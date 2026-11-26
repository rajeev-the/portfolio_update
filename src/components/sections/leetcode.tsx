"use client";

import React, { useState, useEffect } from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { SiLeetcode } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import {
  Trophy,
  GraduationCap,
  ArrowUpRight,
  RefreshCw,
  Code2,
} from "lucide-react";
import { config } from "@/data/config";

interface LeetCodeStats {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  ranking?: number;
  topics?: TopicItem[];
}

interface TopicItem {
  name: string;
  solved: number;
}

const DEFAULT_TOPICS: TopicItem[] = [
  { name: "Array", solved: 239 },
  { name: "String", solved: 91 },
  { name: "Hash Table", solved: 87 },
  { name: "Dynamic Programming", solved: 76 },
  { name: "Depth-First Search", solved: 69 },
  { name: "Two Pointers", solved: 67 },
];

export const LeetcodeSection = () => {
  const [stats, setStats] = useState<LeetCodeStats>({
    totalSolved: 463,
    totalQuestions: 4123,
    easySolved: 156,
    totalEasy: 978,
    mediumSolved: 270,
    totalMedium: 2152,
    hardSolved: 37,
    totalHard: 993,
    ranking: 256449,
  });
  const [topics, setTopics] = useState<TopicItem[]>(DEFAULT_TOPICS);
  const [loading, setLoading] = useState(false);

  const fetchStats = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/leetcode");
      if (res.ok) {
        const data = await res.json();
        if (data && typeof data.totalSolved === "number") {
          setStats(data);
          if (Array.isArray(data.topics) && data.topics.length > 0) {
            setTopics(data.topics);
          }
        }
      }
    } catch {
      // fallback retained
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <>
      {/* Section 04: Competitive Programming */}
      <SectionWrapper id="competitive-programming" className="w-full py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <SectionHeader
            id="competitive-programming"
            eyebrow="04 // PROBLEM SOLVING & METRICS"
            title="Competitive Programming"
            desc="Algorithmic problem-solving, data structures & live LeetCode telemetry."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Card: Live Metrics Summary */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#232328] border border-white/[0.08] shadow-[0_1px_3px_rgba(0,0,0,0.2)] flex flex-col justify-between transition-all duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:border-[#8b1e2b]/50">
              <div>
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-[#2a0e13] flex items-center justify-center text-[#ff9e98]">
                      <SiLeetcode className="w-3.5 h-3.5" />
                    </span>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                      LeetCode Metrics
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={fetchStats}
                    disabled={loading}
                    title="Refresh data"
                    className="text-zinc-400 hover:text-[#ff9d9f] transition-colors duration-300 p-1 rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#8b1e2b]"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
                  </button>
                </div>

                <div className="flex items-baseline gap-3 mb-6" suppressHydrationWarning>
                  <span className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#ff9d9f]">
                    {`${stats.totalSolved}+`}
                  </span>
                  <span className="font-sans text-sm text-zinc-300">
                    Problems Solved Across Categories
                  </span>
                </div>

                {/* Difficulty Bars */}
                <div className="space-y-3 font-mono text-xs" suppressHydrationWarning>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-zinc-300">Easy</span>
                      <span className="font-semibold text-white">
                        <span>{stats.easySolved}</span>
                        <span className="text-zinc-500 text-xs ml-1">{`/${stats.totalEasy || 978}`}</span>
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-500 rounded-full"
                        style={{ width: `${Math.min(100, Math.round((stats.easySolved / (stats.totalEasy || 978)) * 100))}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-zinc-300">Medium</span>
                      <span className="font-semibold text-white">
                        <span>{stats.mediumSolved}</span>
                        <span className="text-zinc-500 text-xs ml-1">{`/${stats.totalMedium || 2152}`}</span>
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-500 rounded-full"
                        style={{ width: `${Math.min(100, Math.round((stats.mediumSolved / (stats.totalMedium || 2152)) * 100))}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-zinc-300">Hard</span>
                      <span className="font-semibold text-white">
                        <span>{stats.hardSolved}</span>
                        <span className="text-zinc-500 text-xs ml-1">{`/${stats.totalHard || 993}`}</span>
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#e06d79] rounded-full"
                        style={{ width: `${Math.min(100, Math.round((stats.hardSolved / (stats.totalHard || 993)) * 100))}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-6 border-t border-white/[0.06] flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-400" suppressHydrationWarning>
                  {`Global Rank: #${stats.ranking ? stats.ranking.toLocaleString("en-US") : "256,449"}`}
                </span>
                {config.social.leetcode && (
                  <a
                    href={config.social.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#ff9d9f] hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#8b1e2b] rounded-sm"
                  >
                    <span>Profile</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>

            {/* Right Card: Topic Distribution */}
            <div className="lg:col-span-7 p-6 rounded-2xl bg-[#232328] border border-white/[0.08] shadow-[0_1px_3px_rgba(0,0,0,0.2)] flex flex-col justify-between transition-all duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:border-[#8b1e2b]/50">
              <div>
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-white/[0.06]">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                    {"Topic Breakdown & Algorithmic Mastery"}
                  </span>
                  <span className="font-mono text-xs text-zinc-400">DSA Telemetry</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4" suppressHydrationWarning>
                  {topics.map((topic) => (
                    <div
                      key={topic.name}
                      className="p-3 rounded-md bg-[#1b1b1f] border border-white/[0.06] flex items-center justify-between"
                    >
                      <span className="font-sans text-xs font-medium text-zinc-200">
                        {topic.name}
                      </span>
                      <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-sm bg-[#2a0e13] text-[#ff9e98] border border-[#8b1e2b]/25" suppressHydrationWarning>
                        {`${topic.solved}+`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="font-sans text-xs text-zinc-400 pt-3 border-t border-white/[0.06]">
                Focus areas include deterministic space-time optimization, graph traversals, amortized complexity analysis, and concurrency synchronization patterns.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 05: Certifications & Achievements */}
      <SectionWrapper id="certifications" className="w-full py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <SectionHeader
            id="certifications"
            eyebrow="05 // ACCREDITATIONS & EDUCATION"
            title="Certifications & Achievements"
            desc="Verified credentials, competitive honors & computer science academic foundation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: AWS Certification */}
            <div className="p-6 rounded-2xl bg-[#232328] border border-white/[0.08] shadow-[0_1px_3px_rgba(0,0,0,0.2)] flex items-start gap-4 hover:border-[#8b1e2b]/50 transition-all duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]">
              <div className="w-10 h-10 rounded-md bg-[#2e1d0c] border border-[#ff9900]/30 flex items-center justify-center shrink-0 text-[#ff9900]">
                <FaAws className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-display text-base font-bold text-white truncate text-balance">
                    AWS Certified Cloud Practitioner
                  </h3>
                  <span className="font-mono text-xs text-zinc-400 shrink-0">2026</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-normal mb-2 text-pretty">
                  Amazon Web Services — Cloud infrastructure, serverless compute, S3 scalable storage, IAM security policies, and high-availability architecture.
                </p>
                <span className="font-mono text-xs font-semibold text-[#ff9e98]">
                  Verified Credential
                </span>
              </div>
            </div>

            {/* Card 2: 500+ Solved */}
            <div className="p-6 rounded-2xl bg-[#232328] border border-white/[0.08] shadow-[0_1px_3px_rgba(0,0,0,0.2)] flex items-start gap-4 hover:border-[#8b1e2b]/50 transition-all duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]">
              <div className="w-10 h-10 rounded-md bg-[#2a0e13] border border-[#8b1e2b]/30 flex items-center justify-center shrink-0 text-[#ff9e98]">
                <Trophy className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-display text-base font-bold text-white truncate text-balance">
                    500+ Algorithmic Problems Solved
                  </h3>
                  <span className="font-mono text-xs text-zinc-400 shrink-0">{"LeetCode & GFG"}</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-normal mb-2 text-pretty">
                  Demonstrated mastery across Data Structures, Algorithms, Dynamic Programming, Graphs, and Greedy heuristics on LeetCode and GeeksforGeeks.
                </p>
                <span className="font-mono text-xs font-semibold text-[#ff9e98]">
                  Top Percentile Consistency
                </span>
              </div>
            </div>

            {/* Card 3: Academic Degree */}
            <div className="p-6 rounded-2xl bg-[#232328] border border-white/[0.08] shadow-[0_1px_3px_rgba(0,0,0,0.2)] flex items-start gap-4 hover:border-[#8b1e2b]/50 transition-all duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]">
              <div className="w-10 h-10 rounded-md bg-[#1b1b1f] border border-white/[0.1] flex items-center justify-center shrink-0 text-white">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-display text-base font-bold text-white truncate text-balance">
                    {"Sharda University — B.Tech CSE"}
                  </h3>
                  <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-sm bg-emerald-950/80 text-emerald-300 border border-emerald-800/40">
                    CGPA: 8.0
                  </span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-normal text-pretty">
                  {"B.Tech in Computer Science and Engineering. Core curriculum in Operating Systems, Database Management Systems, Computer Networks, and Object Oriented Analysis."}
                </p>
              </div>
            </div>

            {/* Card 4: Open Source & Production Software */}
            <div className="p-6 rounded-2xl bg-[#232328] border border-white/[0.08] shadow-[0_1px_3px_rgba(0,0,0,0.2)] flex items-start gap-4 hover:border-[#8b1e2b]/50 transition-all duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]">
              <div className="w-10 h-10 rounded-md bg-[#2a0e13] border border-[#8b1e2b]/30 flex items-center justify-center shrink-0 text-[#ff9e98]">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-display text-base font-bold text-white truncate text-balance">
                    {"Multiplatform & Enterprise Production Software"}
                  </h3>
                  <span className="font-mono text-xs text-zinc-400 shrink-0">{"2025 to 2026"}</span>
                </div>
                <p className="font-sans text-xs sm:text-zinc-300 text-zinc-300 leading-normal text-pretty">
                  Architected production-ready platforms including FinixBooks, DucoArt, LandSathi, and high-throughput RabbitMQ file conversion pipelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default LeetcodeSection;
