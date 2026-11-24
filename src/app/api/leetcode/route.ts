import { config } from "@/data/config";

export interface TopicStat {
  name: string;
  solved: number;
}

export interface LeetCodeStatsResponse {
  status: "success" | "error";
  message?: string;
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  acceptanceRate: number;
  ranking: number;
  contributionPoints: number;
  reputation: number;
  topics?: TopicStat[];
}

// Verified real fallback baseline for Rajeev Ranjan (rajeevranjan_8860)
const FALLBACK_TOPICS: TopicStat[] = [
  { name: "Array", solved: 239 },
  { name: "String", solved: 91 },
  { name: "Hash Table", solved: 87 },
  { name: "Dynamic Programming", solved: 76 },
  { name: "Depth-First Search", solved: 69 },
  { name: "Two Pointers", solved: 67 },
];

const FALLBACK_DATA: LeetCodeStatsResponse = {
  status: "success",
  totalSolved: 463,
  totalQuestions: 4123,
  easySolved: 156,
  totalEasy: 978,
  mediumSolved: 270,
  totalMedium: 2152,
  hardSolved: 37,
  totalHard: 993,
  acceptanceRate: 63.4,
  ranking: 256449,
  contributionPoints: 1033,
  reputation: 0,
  topics: FALLBACK_TOPICS,
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username =
    searchParams.get("username") || config.leetcodeUsername || "rajeevranjan_8860";

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const [profileRes, skillsRes] = await Promise.allSettled([
      fetch(
        `https://alfa-leetcode-api.onrender.com/userProfile/${encodeURIComponent(username)}`,
        {
          signal: controller.signal,
          next: { revalidate: 3600 },
        }
      ),
      fetch(
        `https://alfa-leetcode-api.onrender.com/skillStats/${encodeURIComponent(username)}`,
        {
          signal: controller.signal,
          next: { revalidate: 3600 },
        }
      ),
    ]);

    clearTimeout(timeoutId);

    let profileData: any = null;
    let topicsData: TopicStat[] = FALLBACK_TOPICS;

    if (profileRes.status === "fulfilled" && profileRes.value.ok) {
      try {
        profileData = await profileRes.value.json();
      } catch {
        // failed parsing json
      }
    }

    if (skillsRes.status === "fulfilled" && skillsRes.value.ok) {
      try {
        const skills = await skillsRes.value.json();
        const tagCounts = skills?.matchedUser?.tagProblemCounts;
        if (tagCounts) {
          const allTags = [
            ...(tagCounts.fundamental ?? []),
            ...(tagCounts.intermediate ?? []),
            ...(tagCounts.advanced ?? []),
          ];

          if (allTags.length > 0) {
            topicsData = allTags
              .filter(
                (t: { tagName?: string; problemsSolved?: number }) =>
                  t.tagName && typeof t.problemsSolved === "number" && t.problemsSolved > 0
              )
              .sort(
                (
                  a: { problemsSolved: number },
                  b: { problemsSolved: number }
                ) => b.problemsSolved - a.problemsSolved
              )
              .slice(0, 6)
              .map((t: { tagName: string; problemsSolved: number }) => ({
                name: t.tagName,
                solved: t.problemsSolved,
              }));
          }
        }
      } catch {
        // retain default topics
      }
    }

    if (profileData && typeof profileData.totalSolved === "number") {
      let acceptanceRate = 63.4;
      const totalSub = profileData.matchedUserStats?.totalSubmissionNum?.[0]?.submissions;
      const acSub = profileData.matchedUserStats?.acSubmissionNum?.[0]?.submissions;
      if (typeof totalSub === "number" && totalSub > 0 && typeof acSub === "number") {
        acceptanceRate = Number(((acSub / totalSub) * 100).toFixed(1));
      } else if (profileData.acceptanceRate) {
        acceptanceRate = Number(profileData.acceptanceRate);
      }

      const responsePayload: LeetCodeStatsResponse = {
        status: "success",
        totalSolved: profileData.totalSolved ?? FALLBACK_DATA.totalSolved,
        totalQuestions: profileData.totalQuestions ?? FALLBACK_DATA.totalQuestions,
        easySolved: profileData.easySolved ?? FALLBACK_DATA.easySolved,
        totalEasy: profileData.totalEasy ?? FALLBACK_DATA.totalEasy,
        mediumSolved: profileData.mediumSolved ?? FALLBACK_DATA.mediumSolved,
        totalMedium: profileData.totalMedium ?? FALLBACK_DATA.totalMedium,
        hardSolved: profileData.hardSolved ?? FALLBACK_DATA.hardSolved,
        totalHard: profileData.totalHard ?? FALLBACK_DATA.totalHard,
        acceptanceRate,
        ranking: profileData.ranking ?? FALLBACK_DATA.ranking,
        contributionPoints:
          profileData.contributionPoint ??
          profileData.contributionPoints ??
          FALLBACK_DATA.contributionPoints,
        reputation: profileData.reputation ?? FALLBACK_DATA.reputation,
        topics: topicsData,
      };

      return new Response(JSON.stringify(responsePayload), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      });
    }
  } catch {
    // Return verified fallback data
  }

  return new Response(JSON.stringify(FALLBACK_DATA), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
