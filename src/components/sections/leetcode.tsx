"use client";

import React, { useEffect, useState } from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { config } from "@/data/config";
import { cn } from "@/lib/utils";
import {
  Code2,
  Flame,
  Award,
  ExternalLink,
  RefreshCw,
  Trophy,
  Zap,
  TrendingUp,
  Brain,
  CheckCircle2,
} from "lucide-react";
import { SiLeetcode } from "react-icons/si";

interface StatsData {
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
}

const TOPICS = [
  { name: "Dynamic Programming", solved: 64, color: "from-violet-500 to-purple-600" },
  { name: "Trees & Graphs", solved: 82, color: "from-cyan-400 to-blue-500" },
  { name: "Arrays & Hashing", solved: 145, color: "from-fuchsia-500 to-pink-500" },
  { name: "Binary Search", solved: 48, color: "from-teal-400 to-emerald-500" },
  { name: "Backtracking & Recursion", solved: 36, color: "from-indigo-400 to-violet-500" },
  { name: "Stack / Queue / Heap", solved: 55, color: "from-sky-400 to-cyan-500" },
];

export const LeetcodeSection = () => {
  const [stats, setStats] = useState<StatsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchStats = async () => {
    try {
      setRefreshing(true);
      const res = await fetch(
        `/api/leetcode?username=${encodeURIComponent(
          config.leetcodeUsername || "rajeevranjan_8860"
        )}`
      );
      const data = await res.json();
      setStats(data);
    } catch {
      // Fallback
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const totalSolved = stats?.totalSolved ?? 512;
  const totalQuestions = stats?.totalQuestions ?? 3340;
  const easySolved = stats?.easySolved ?? 192;
  const totalEasy = stats?.totalEasy ?? 830;
  const mediumSolved = stats?.mediumSolved ?? 268;
  const totalMedium = stats?.totalMedium ?? 1760;
  const hardSolved = stats?.hardSolved ?? 52;
  const totalHard = stats?.totalHard ?? 750;
  const acceptanceRate = stats?.acceptanceRate ?? 68.2;
  const ranking = stats?.ranking ?? 34120;

  // Percentage calculations
  const totalPct = Math.min(Math.round((totalSolved / totalQuestions) * 100), 100);
  const easyPct = Math.min(Math.round((easySolved / totalEasy) * 100), 100);
  const mediumPct = Math.min(Math.round((mediumSolved / totalMedium) * 100), 100);
  const hardPct = Math.min(Math.round((hardSolved / totalHard) * 100), 100);

  // SVG Radial constants
  const radius = 68;
  const circumference = 2 * Math.PI * radius;
  const strokeOffset = circumference - (totalPct / 100) * circumference;

  return (
    <SectionWrapper id="competitive-programming" className="w-full py-20 relative overflow-hidden">
      {/* Background ambient neon glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl" />

      <SectionHeader
        id="competitive-programming"
        title="Competitive Programming"
        desc="Algorithmic problem-solving, data structures & live LeetCode stats"
        className="static mb-12"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pointer-events-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Radial Chart & Primary Metrics */}
          <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-zinc-900/60 dark:bg-zinc-950/70 border border-violet-500/30 backdrop-blur-xl shadow-[0_0_40px_-15px_rgba(139,92,246,0.3)] flex flex-col justify-between relative group hover:border-violet-500/50 transition-all duration-300">
            {/* Corner Badge */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/15 border border-violet-500/30 text-violet-400 text-xs font-semibold uppercase tracking-wider">
                <SiLeetcode className="size-4 text-amber-500" />
                <span>LeetCode Metrics</span>
              </div>
              <button
                onClick={fetchStats}
                disabled={refreshing}
                title="Refresh Live Data"
                className="p-2 rounded-xl bg-zinc-800/80 hover:bg-violet-600/20 text-zinc-400 hover:text-cyan-400 transition-colors border border-zinc-700/50"
              >
                <RefreshCw className={cn("size-4", refreshing && "animate-spin text-cyan-400")} />
              </button>
            </div>

            {/* Circular Gauge */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 my-4">
              <div className="relative size-44 flex items-center justify-center">
                <svg className="size-full -rotate-90" viewBox="0 0 160 160">
                  {/* Track */}
                  <circle
                    cx="80"
                    cy="80"
                    r={radius}
                    className="stroke-zinc-800"
                    strokeWidth="12"
                    fill="transparent"
                  />
                  {/* Neon Glow Gradient Definition */}
                  <defs>
                    <linearGradient id="cyberGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                  {/* Progress Arc */}
                  <circle
                    cx="80"
                    cy="80"
                    r={radius}
                    stroke="url(#cyberGradient)"
                    strokeWidth="12"
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeOffset}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>

                {/* Center Content */}
                <div className="absolute flex flex-col items-center justify-center text-center">
                  <span className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                    {loading ? "..." : totalSolved}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider mt-0.5">
                    Solved
                  </span>
                </div>
              </div>

              {/* Progress Breakdown */}
              <div className="flex flex-col gap-3 w-full sm:w-auto">
                {/* Easy */}
                <div className="flex items-center justify-between sm:justify-start gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="size-3 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                    <span className="text-zinc-300 font-medium">Easy</span>
                  </div>
                  <span className="font-bold text-foreground">
                    {easySolved} <span className="text-xs text-zinc-500 font-normal">/ {totalEasy}</span>
                  </span>
                </div>

                {/* Medium */}
                <div className="flex items-center justify-between sm:justify-start gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="size-3 rounded-full bg-violet-500 shadow-[0_0_8px_#a855f7]" />
                    <span className="text-zinc-300 font-medium">Medium</span>
                  </div>
                  <span className="font-bold text-foreground">
                    {mediumSolved} <span className="text-xs text-zinc-500 font-normal">/ {totalMedium}</span>
                  </span>
                </div>

                {/* Hard */}
                <div className="flex items-center justify-between sm:justify-start gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="size-3 rounded-full bg-rose-500 shadow-[0_0_8px_#f43f5e]" />
                    <span className="text-zinc-300 font-medium">Hard</span>
                  </div>
                  <span className="font-bold text-foreground">
                    {hardSolved} <span className="text-xs text-zinc-500 font-normal">/ {totalHard}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Link to LeetCode Profile */}
            <a
              href={config.social.leetcode || "https://leetcode.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-medium text-sm transition-all duration-300 shadow-[0_0_20px_-5px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_0px_rgba(6,182,212,0.6)]"
            >
              <span>View LeetCode Profile</span>
              <ExternalLink className="size-4" />
            </a>
          </div>

          {/* Right Column: Key Stats & Topic Distribution */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            
            {/* 3 Highlight Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Card 1: Global Rank */}
              <div className="p-5 rounded-2xl bg-zinc-900/60 dark:bg-zinc-950/70 border border-violet-500/20 backdrop-blur-md flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center justify-between text-violet-400 mb-2">
                  <span className="text-xs uppercase font-bold tracking-wider text-muted-foreground">Global Rank</span>
                  <Trophy className="size-5 text-amber-400" />
                </div>
                <div className="text-2xl font-bold text-foreground">
                  #{loading ? "..." : ranking.toLocaleString()}
                </div>
                <div className="text-xs text-cyan-400 mt-1 flex items-center gap-1">
                  <TrendingUp className="size-3" /> Top tier global percentile
                </div>
              </div>

              {/* Card 2: Acceptance Rate */}
              <div className="p-5 rounded-2xl bg-zinc-900/60 dark:bg-zinc-950/70 border border-violet-500/20 backdrop-blur-md flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center justify-between text-cyan-400 mb-2">
                  <span className="text-xs uppercase font-bold tracking-wider text-muted-foreground">Accuracy</span>
                  <Zap className="size-5 text-cyan-400" />
                </div>
                <div className="text-2xl font-bold text-foreground">
                  {loading ? "..." : `${acceptanceRate}%`}
                </div>
                <div className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
                  <CheckCircle2 className="size-3" /> High submission precision
                </div>
              </div>

              {/* Card 3: Problem Solving Streaks & Focus */}
              <div className="p-5 rounded-2xl bg-zinc-900/60 dark:bg-zinc-950/70 border border-violet-500/20 backdrop-blur-md flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center justify-between text-rose-400 mb-2">
                  <span className="text-xs uppercase font-bold tracking-wider text-muted-foreground">Consistency</span>
                  <Flame className="size-5 text-rose-500" />
                </div>
                <div className="text-2xl font-bold text-foreground">
                  Active
                </div>
                <div className="text-xs text-violet-400 mt-1 flex items-center gap-1">
                  <Award className="size-3" /> Daily problem challenge
                </div>
              </div>
            </div>

            {/* Topic Mastery Distribution */}
            <div className="p-6 rounded-3xl bg-zinc-900/60 dark:bg-zinc-950/70 border border-violet-500/30 backdrop-blur-xl flex-1 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Brain className="size-5 text-violet-400" />
                  <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">
                    Core Algorithm & Topic Focus
                  </h3>
                </div>
                <span className="text-xs text-muted-foreground font-mono">Mastery Breakdown</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {TOPICS.map((topic) => (
                  <div
                    key={topic.name}
                    className="p-3 rounded-xl bg-zinc-800/40 border border-zinc-700/40 hover:border-violet-500/40 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={cn("size-2.5 rounded-full bg-gradient-to-r", topic.color)} />
                      <span className="text-xs sm:text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
                        {topic.name}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded-md border border-cyan-800/50">
                      {topic.solved}+
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </SectionWrapper>
  );
};

export default LeetcodeSection;
