"use client";

import React, { useState, useEffect } from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { SiLeetcode } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import {
  Trophy,
  GraduationCap,
  Award,
  ArrowUpRight,
  RefreshCw,
  CheckCircle2,
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
}

const TOPICS = [
  { name: "Binary Search", solved: 65 },
  { name: "Dynamic Programming", solved: 85 },
  { name: "Trees & Graphs", solved: 95 },
  { name: "Array & Two Pointers", solved: 140 },
  { name: "Stack & Queues", solved: 55 },
  { name: "Heap & Greedy", solved: 60 },
];

export const LeetcodeSection = () => {
  const [stats, setStats] = useState<LeetCodeStats>({
    totalSolved: 500,
    totalQuestions: 3300,
    easySolved: 210,
    totalEasy: 830,
    mediumSolved: 240,
    totalMedium: 1750,
    hardSolved: 50,
    totalHard: 720,
    ranking: 185000,
  });
  const [loading, setLoading] = useState(false);

  const fetchStats = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/leetcode");
      if (res.ok) {
        const data = await res.json();
        if (data && data.totalSolved) {
          setStats(data);
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
            eyebrow="04 / PROBLEM SOLVING & METRICS"
            title="Competitive Programming"
            desc="Algorithmic problem-solving, data structures & live LeetCode telemetry."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Card: Live Metrics Summary */}
            <div className="lg:col-span-5 p-6 rounded-lg bg-[#ffffff] dark:bg-[#232328] border border-black/[0.08] dark:border-white/[0.08] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-black/[0.06] dark:border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-[3px] bg-[#ffdada] dark:bg-[#2a0e13] flex items-center justify-center text-[#8b1e2b] dark:text-[#ff9e98]">
                      <SiLeetcode className="w-3.5 h-3.5" />
                    </span>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1b1b1f] dark:text-white">
                      LeetCode Metrics
                    </span>
                  </div>
                  <button
                    onClick={fetchStats}
                    disabled={loading}
                    title="Refresh data"
                    className="text-[#8b7171] hover:text-[#8b1e2b] transition-colors p-1"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
                  </button>
                </div>

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#8b1e2b] dark:text-[#ff9d9f]">
                    {stats.totalSolved}+
                  </span>
                  <span className="font-sans text-sm text-[#574141] dark:text-zinc-400">
                    Problems Solved Across Categories
                  </span>
                </div>

                {/* Difficulty Bars */}
                <div className="space-y-3 font-mono text-xs">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-[#574141] dark:text-zinc-300">Easy</span>
                      <span className="font-semibold text-[#1b1b1f] dark:text-white">{stats.easySolved}</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#f0edf2] dark:bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-600 rounded-full"
                        style={{ width: `${Math.min(100, (stats.easySolved / 400) * 100)}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-[#574141] dark:text-zinc-300">Medium</span>
                      <span className="font-semibold text-[#1b1b1f] dark:text-white">{stats.mediumSolved}</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#f0edf2] dark:bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-600 rounded-full"
                        style={{ width: `${Math.min(100, (stats.mediumSolved / 400) * 100)}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-[#574141] dark:text-zinc-300">Hard</span>
                      <span className="font-semibold text-[#1b1b1f] dark:text-white">{stats.hardSolved}</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#f0edf2] dark:bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#8b1e2b] rounded-full"
                        style={{ width: `${Math.min(100, (stats.hardSolved / 100) * 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-6 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between">
                <span className="font-mono text-xs text-[#8b7171]" suppressHydrationWarning>
                  Global Rank: #{stats.ranking ? stats.ranking.toLocaleString("en-US") : "185,000"}
                </span>
                {config.social.leetcode && (
                  <a
                    href={config.social.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#8b1e2b] dark:text-[#ff9d9f] hover:underline"
                  >
                    <span>Profile</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>

            {/* Right Card: Topic Distribution */}
            <div className="lg:col-span-7 p-6 rounded-lg bg-[#ffffff] dark:bg-[#232328] border border-black/[0.08] dark:border-white/[0.08] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-black/[0.06] dark:border-white/[0.06]">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1b1b1f] dark:text-white">
                    Topic Breakdown &amp; Algorithmic Mastery
                  </span>
                  <span className="font-mono text-xs text-[#8b7171]">DSA Telemetry</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  {TOPICS.map((topic) => (
                    <div
                      key={topic.name}
                      className="p-3 rounded-[6px] bg-[#fbf8fe] dark:bg-[#1b1b1f] border border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between"
                    >
                      <span className="font-sans text-xs font-medium text-[#1b1b1f] dark:text-zinc-200">
                        {topic.name}
                      </span>
                      <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-[3px] bg-[#f3e8e8] dark:bg-[#2a0e13] text-[#721422] dark:text-[#ff9e98] border border-[#8b1e2b]/15">
                        {topic.solved}+
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="font-sans text-xs text-[#574141] dark:text-zinc-400 pt-3 border-t border-black/[0.06] dark:border-white/[0.06]">
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
            <div className="p-6 rounded-lg bg-[#ffffff] dark:bg-[#232328] border border-black/[0.08] dark:border-white/[0.08] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex items-start gap-4 hover:border-[#8b1e2b]/30 transition-all">
              <div className="w-10 h-10 rounded-[6px] bg-[#fff5ea] dark:bg-[#2e1d0c] border border-[#ff9900]/30 flex items-center justify-center shrink-0 text-[#ff9900]">
                <FaAws className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-display text-base font-bold text-[#1b1b1f] dark:text-white truncate">
                    AWS Certified Cloud Practitioner
                  </h3>
                  <span className="font-mono text-xs text-[#8b7171] shrink-0">2026</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#574141] dark:text-zinc-400 leading-relaxed mb-2">
                  Amazon Web Services — Cloud infrastructure, serverless compute, S3 scalable storage, IAM security policies, and high-availability architecture.
                </p>
                <span className="font-mono text-[11px] font-semibold text-[#8b1e2b] dark:text-[#ff9e98]">
                  Verified Credential
                </span>
              </div>
            </div>

            {/* Card 2: 500+ Solved */}
            <div className="p-6 rounded-lg bg-[#ffffff] dark:bg-[#232328] border border-black/[0.08] dark:border-white/[0.08] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex items-start gap-4 hover:border-[#8b1e2b]/30 transition-all">
              <div className="w-10 h-10 rounded-[6px] bg-[#f3e8e8] dark:bg-[#2a0e13] border border-[#8b1e2b]/20 flex items-center justify-center shrink-0 text-[#8b1e2b] dark:text-[#ff9e98]">
                <Trophy className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-display text-base font-bold text-[#1b1b1f] dark:text-white truncate">
                    500+ Algorithmic Problems Solved
                  </h3>
                  <span className="font-mono text-xs text-[#8b7171] shrink-0">LeetCode</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#574141] dark:text-zinc-400 leading-relaxed mb-2">
                  Demonstrated mastery across Data Structures, Algorithms, Dynamic Programming, Graphs, and Greedy heuristics on LeetCode &amp; GeeksforGeeks.
                </p>
                <span className="font-mono text-[11px] font-semibold text-[#8b1e2b] dark:text-[#ff9e98]">
                  Top Percentile Consistency
                </span>
              </div>
            </div>

            {/* Card 3: Academic Degree */}
            <div className="p-6 rounded-lg bg-[#ffffff] dark:bg-[#232328] border border-black/[0.08] dark:border-white/[0.08] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex items-start gap-4 hover:border-[#8b1e2b]/30 transition-all">
              <div className="w-10 h-10 rounded-[6px] bg-[#f0edf2] dark:bg-[#1b1b1f] border border-black/[0.08] dark:border-white/[0.1] flex items-center justify-center shrink-0 text-[#1b1b1f] dark:text-white">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-display text-base font-bold text-[#1b1b1f] dark:text-white truncate">
                    Sharda University — B.Tech CSE
                  </h3>
                  <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
                    CGPA: 8.0
                  </span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#574141] dark:text-zinc-400 leading-relaxed">
                  B.Tech in Computer Science &amp; Engineering. Core curriculum in Operating Systems, Database Management Systems, Computer Networks, and Object-Oriented Analysis.
                </p>
              </div>
            </div>

            {/* Card 4: Open Source & Production Software */}
            <div className="p-6 rounded-lg bg-[#ffffff] dark:bg-[#232328] border border-black/[0.08] dark:border-white/[0.08] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex items-start gap-4 hover:border-[#8b1e2b]/30 transition-all">
              <div className="w-10 h-10 rounded-[6px] bg-[#f3e8e8] dark:bg-[#2a0e13] border border-[#8b1e2b]/20 flex items-center justify-center shrink-0 text-[#8b1e2b] dark:text-[#ff9e98]">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-display text-base font-bold text-[#1b1b1f] dark:text-white truncate">
                    Full-Stack &amp; Enterprise Production Software
                  </h3>
                  <span className="font-mono text-xs text-[#8b7171] shrink-0">2025–2026</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#574141] dark:text-zinc-400 leading-relaxed">
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
