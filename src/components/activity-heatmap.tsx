"use client";

import React, { useState, useMemo } from "react";
import initialData from "@/data/github-contributions.json";
import { config } from "@/data/config";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";

const MONTH_NAMES = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

export default function ActivityHeatmap() {
  const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null);

  const days: ContributionDay[] = (initialData?.contributions || []) as ContributionDay[];
  const total = initialData?.total || 529;

  // Split days into 7-day columns (weeks)
  const weeks = useMemo(() => {
    const result: ContributionDay[][] = [];
    let currentWeek: ContributionDay[] = [];

    days.forEach((day, idx) => {
      currentWeek.push(day);
      if (currentWeek.length === 7 || idx === days.length - 1) {
        result.push(currentWeek);
        currentWeek = [];
      }
    });

    return result;
  }, [days]);

  // Months label calculation — deterministic string parsing avoids timezone/locale hydration mismatches
  const months = useMemo(() => {
    const labels: { label: string; weekIndex: number }[] = [];
    let lastMonth = -1;

    weeks.forEach((week, wIdx) => {
      const firstDay = week[0];
      if (!firstDay || !firstDay.date) return;
      const parts = firstDay.date.split("-");
      if (parts.length >= 2) {
        const m = parseInt(parts[1], 10) - 1;
        if (m !== lastMonth && wIdx > 0 && wIdx < weeks.length - 2) {
          labels.push({ label: MONTH_NAMES[m] || "", weekIndex: wIdx });
          lastMonth = m;
        }
      }
    });

    return labels;
  }, [weeks]);

  const getCellColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-[#4a181e]";
      case 2:
        return "bg-[#7c242c]";
      case 3:
        return "bg-[#a43a43]";
      case 4:
        return "bg-[#e06d79]";
      default:
        return "bg-[#27272a]";
    }
  };

  return (
    <div className="w-full mt-8 p-4 sm:p-5 rounded-lg bg-[#232328] border border-white/[0.08] shadow-[0_1px_3px_rgba(0,0,0,0.2)]" suppressHydrationWarning>
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <SiGithub className="w-4 h-4 text-[#ff9d9f]" />
          <span className="font-mono text-xs font-semibold text-white">
            GitHub Activity
          </span>
          <span className="text-zinc-400 text-xs font-mono">• {total} contributions in the last year</span>
        </div>

        {config.social.github && (
          <a
            href={config.social.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#ff9d9f] hover:underline"
          >
            <span>@{config.githubUsername || "rajeev-the"}</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        )}
      </div>

      {/* Grid container with responsive horizontal scroll */}
      <div className="overflow-x-auto pb-1 scrollbar-thin">
        <div className="inline-block min-w-full">
          {/* Month labels */}
          <div className="flex text-[10px] font-mono text-zinc-400 mb-1 pl-6 relative h-4">
            {months.map(({ label, weekIndex }) => (
              <span
                key={`${label}-${weekIndex}`}
                style={{
                  position: "absolute",
                  left: `${weekIndex * 13 + 24}px`,
                }}
              >
                {label}
              </span>
            ))}
          </div>

          <div className="flex gap-[3px]">
            {/* Day of week labels */}
            <div className="flex flex-col gap-[3px] text-[9px] font-mono text-zinc-400 pr-1 select-none">
              <span className="h-[10px] leading-[10px]"></span>
              <span className="h-[10px] leading-[10px]">Mon</span>
              <span className="h-[10px] leading-[10px]"></span>
              <span className="h-[10px] leading-[10px]">Wed</span>
              <span className="h-[10px] leading-[10px]"></span>
              <span className="h-[10px] leading-[10px]">Fri</span>
              <span className="h-[10px] leading-[10px]"></span>
            </div>

            {/* Weeks columns */}
            {weeks.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-[3px]">
                {week.map((day) => (
                  <div
                    key={day.date}
                    onMouseEnter={() => setHoveredDay(day)}
                    onMouseLeave={() => setHoveredDay(null)}
                    title={`${day.count} contributions on ${day.date}`}
                    className={`w-[10px] h-[10px] rounded-[2px] transition-colors cursor-pointer ${getCellColor(
                      day.level
                    )}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer / Legend */}
      <div className="flex items-center justify-between pt-3 mt-2 border-t border-white/[0.06] text-[11px] font-mono text-zinc-400">
        <div>
          {hoveredDay ? (
            <span className="text-[#ff9d9f] font-semibold">
              {hoveredDay.count} contribution{hoveredDay.count === 1 ? "" : "s"} on {hoveredDay.date}
            </span>
          ) : (
            <span>Daily git commit &amp; push activity across engineering repos</span>
          )}
        </div>

        <div className="flex items-center gap-1.5 select-none">
          <span>Less</span>
          <span className="w-2.5 h-2.5 rounded-[2px] bg-[#27272a]" />
          <span className="w-2.5 h-2.5 rounded-[2px] bg-[#4a181e]" />
          <span className="w-2.5 h-2.5 rounded-[2px] bg-[#7c242c]" />
          <span className="w-2.5 h-2.5 rounded-[2px] bg-[#a43a43]" />
          <span className="w-2.5 h-2.5 rounded-[2px] bg-[#e06d79]" />
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
