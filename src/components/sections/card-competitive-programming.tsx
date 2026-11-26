"use client";

import React, { useEffect, useState } from "react";
import { SiLeetcode } from "react-icons/si";
import { ArrowUpRight, RefreshCw } from "lucide-react";
import { config } from "@/data/config";

interface TopicItem {
  name: string;
  solved: number;
}

interface LeetCodeStats {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  ranking: number;
  topics?: TopicItem[];
}

const DEFAULT_TOPICS: TopicItem[] = [
  { name: "Array", solved: 239 },
  { name: "String", solved: 91 },
  { name: "Hash Table", solved: 87 },
  { name: "Dynamic Programming", solved: 76 },
  { name: "Depth-First Search", solved: 69 },
  { name: "Two Pointers", solved: 67 },
];

const INITIAL_STATS: LeetCodeStats = {
  totalSolved: 463,
  totalQuestions: 4124,
  easySolved: 156,
  totalEasy: 978,
  mediumSolved: 270,
  totalMedium: 2152,
  hardSolved: 37,
  totalHard: 994,
  ranking: 255535,
  topics: DEFAULT_TOPICS,
};

const CACHE_KEY = "leetcode_stats_cache_v1";
const CACHE_TTL_MS = 15 * 60 * 1000;

export const CardCompetitiveProgramming = () => {
  const [stats, setStats] = useState<LeetCodeStats>(INITIAL_STATS);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  const fetchStats = async (bypassCache = false) => {
    if (!bypassCache && typeof window !== "undefined") {
      try {
        const cached = sessionStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached) as { ts: number; data: LeetCodeStats };
          if (Date.now() - parsed.ts < CACHE_TTL_MS && parsed.data?.totalSolved) {
            setStats(parsed.data);
            return;
          }
        }
      } catch {
        // Ignore storage errors
      }
    }

    setLoading(true);
    try {
      const res = await fetch("/api/leetcode");
      if (res.ok) {
        const data = await res.json();
        if (data && typeof data.totalSolved === "number") {
          const nextStats: LeetCodeStats = {
            totalSolved: data.totalSolved,
            totalQuestions: typeof data.totalQuestions === "number" ? data.totalQuestions : INITIAL_STATS.totalQuestions,
            easySolved: typeof data.easySolved === "number" ? data.easySolved : INITIAL_STATS.easySolved,
            totalEasy: typeof data.totalEasy === "number" ? data.totalEasy : INITIAL_STATS.totalEasy,
            mediumSolved: typeof data.mediumSolved === "number" ? data.mediumSolved : INITIAL_STATS.mediumSolved,
            totalMedium: typeof data.totalMedium === "number" ? data.totalMedium : INITIAL_STATS.totalMedium,
            hardSolved: typeof data.hardSolved === "number" ? data.hardSolved : INITIAL_STATS.hardSolved,
            totalHard: typeof data.totalHard === "number" ? data.totalHard : INITIAL_STATS.totalHard,
            ranking: typeof data.ranking === "number" ? data.ranking : INITIAL_STATS.ranking,
            topics:
              Array.isArray(data.topics) && data.topics.length > 0
                ? data.topics
                : DEFAULT_TOPICS,
          };
          setStats(nextStats);
          try {
            sessionStorage.setItem(
              CACHE_KEY,
              JSON.stringify({ ts: Date.now(), data: nextStats })
            );
          } catch {
            // Ignore storage quota errors
          }
        }
      }
    } catch {
      // Keep fallback stats on network failure
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setMounted(true);
    setMounted(true);
    fetchStats(false);
  }, []);

  const difficultyStats = [
    {
      label: "Easy",
      solved: stats.easySolved,
      total: stats.totalEasy || 978,
      color: "bg-emerald-400",
    },
    {
      label: "Medium",
      solved: stats.mediumSolved,
      total: stats.totalMedium || 2152,
      color: "bg-amber-400",
    },
    {
      label: "Hard",
      solved: stats.hardSolved,
      total: stats.totalHard || 994,
      color: "bg-rose-400",
    },
  ];

  const topics = stats.topics && stats.topics.length > 0 ? stats.topics : DEFAULT_TOPICS;

  const formattedRanking = typeof stats?.ranking === "number" && !isNaN(stats.ranking)
    ? stats.ranking.toLocaleString("en-US")
    : INITIAL_STATS.ranking.toLocaleString("en-US");

  return (
    <div className="flex flex-col justify-between h-full p-4 sm:p-5 rounded-xl bg-black/30 backdrop-blur-md border border-white/[0.14] hover:border-white/30 transition-all shadow-2xl">
      <div>
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-2 mb-2.5 border-b border-white/[0.08]">
          <div className="flex flex-wrap items-center gap-2 min-w-0">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              {"COMPETITIVE PROGRAMMING"}
            </span>
            <span className="text-zinc-600 font-mono text-xs hidden sm:inline">{"•"}</span>
            <span className="font-mono text-xs text-zinc-400 hidden sm:inline">{"ALGORITHMS"}</span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-white/[0.08] text-zinc-300 border border-white/[0.12]">
              {"LIVE LEETCODE API"}
            </span>
            <button
              type="button"
              onClick={() => fetchStats(true)}
              disabled={loading}
              title="Refresh LeetCode stats"
              className="p-1.5 sm:p-1 rounded text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 sm:w-3 sm:h-3 ${loading ? "animate-spin" : ""}`} />
            </button>
          </div>
        </div>

        {/* Big Metric Display */}
        <div className="mb-3" suppressHydrationWarning>
          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 mb-0.5">
            <h3 className="font-display text-2xl font-bold tracking-tight text-white" suppressHydrationWarning>
              {`${stats.totalSolved} Solved`}
            </h3>
            <span className="font-mono text-xs text-cyan-400 font-semibold" suppressHydrationWarning>
              {`Global Rank #${formattedRanking}`}
            </span>
          </div>
          <p className="font-mono text-xs text-zinc-400" suppressHydrationWarning>
            {`LeetCode (${stats.totalSolved}/${stats.totalQuestions}) Problem Solving Telemetry`}
          </p>
        </div>

        {/* Progress Bars Format */}
        <div className="space-y-2 mb-3 font-mono text-xs" suppressHydrationWarning>
          {difficultyStats.map((item) => {
            const pct = Math.min(
              100,
              Math.max(4, Math.round((item.solved / item.total) * 100))
            );
            return (
              <div key={item.label} className="flex flex-col gap-1">
                <div className="flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                    <span className="font-medium text-zinc-300">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-white">{item.solved}</span>
                    <span className="text-zinc-400 text-[10px]">{`/ ${item.total}`}</span>
                  </div>
                </div>
                <div className="w-full h-1.5 bg-white/[0.08] rounded-full overflow-hidden border border-white/[0.10]">
                  <div
                    className={`h-full ${item.color} rounded-full transition-all`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Topic Breakdown Chips */}
        <div className="flex flex-wrap gap-1 mb-2" suppressHydrationWarning>
          {topics.map((topic) => (
            <span
              key={topic.name}
              className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/[0.06] text-zinc-300 border border-white/[0.10]"
            >
              {`${topic.name} (${topic.solved})`}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Profile Link */}
      <div className="pt-2 border-t border-white/[0.08] mt-2 flex items-center justify-between font-mono text-xs">
        <a
          href={config.social.leetcode}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 font-semibold text-white hover:underline"
        >
          <SiLeetcode className="w-3.5 h-3.5" />
          <span>{"LeetCode Profile"}</span>
          <ArrowUpRight className="w-3 h-3 text-zinc-400" />
        </a>
      </div>
    </div>
  );
};

export default CardCompetitiveProgramming;
