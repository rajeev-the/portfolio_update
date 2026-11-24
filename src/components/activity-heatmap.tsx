"use client";

import React, { useState, useMemo } from "react";
import initialData from "@/data/github-contributions.json";
import { config } from "@/data/config";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";

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

  // Months label calculation
  const months = useMemo(() => {
    const labels: { label: string; weekIndex: number }[] = [];
    let lastMonth = -1;

    weeks.forEach((week, wIdx) => {
      const firstDay = week[0];
      if (!firstDay) return;
      const d = new Date(firstDay.date);
      const m = d.getMonth();
      if (m !== lastMonth && wIdx > 0 && wIdx < weeks.length - 2) {
        const monthShort = d.toLocaleString("en-US", { month: "short" });
        labels.push({ label: monthShort, weekIndex: wIdx });
        lastMonth = m;
      }
    });

    return labels;
  }, [weeks]);

  const getCellColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-[#ffdad9] dark:bg-[#4a181e]";
      case 2:
        return "bg-[#fe7f86] dark:bg-[#7c242c]";
      case 3:
        return "bg-[#8b1e2b] dark:bg-[#a43a43]";
      case 4:
        return "bg-[#6b0217] dark:bg-[#e06d79]";
      default:
        return "bg-[#f0edf2] dark:bg-[#27272a]";
    }
  };

  return (
    <div className="w-full mt-8 p-4 sm:p-5 rounded-lg bg-[#ffffff] dark:bg-[#232328] border border-black/[0.08] dark:border-white/[0.08] shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/[0.06] dark:border-white/[0.06]">
        <div className="flex items-center gap-2">
          <SiGithub className="w-4 h-4 text-[#8b1e2b] dark:text-[#ff9d9f]" />
          <span className="font-mono text-xs font-semibold text-[#1b1b1f] dark:text-white">
            GitHub Activity
          </span>
          <span className="text-[#8b7171] text-xs font-mono">• {total} contributions in the last year</span>
        </div>

        {config.social.github && (
          <a
            href={config.social.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#8b1e2b] dark:text-[#ff9d9f] hover:underline"
          >
            <span>@{config.githubUsername || "rajeev-the"}</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        )}
      </div>

      {/* Heatmap Grid Viewport */}
      <div className="overflow-x-auto pb-1 scrollbar-thin">
        <div className="min-w-[680px]">
          {/* Month labels */}
          <div className="flex mb-1.5 text-[10px] font-mono text-[#8b7171] select-none pl-6">
            {months.map((m, idx) => (
              <span
                key={idx}
                style={{ marginLeft: idx === 0 ? `${m.weekIndex * 13}px` : undefined }}
                className={idx > 0 ? "ml-auto" : ""}
              >
                {m.label}
              </span>
            ))}
          </div>

          {/* Grid with Weekday Labels */}
          <div className="flex gap-2">
            <div className="flex flex-col justify-between py-[2px] text-[9px] font-mono text-[#8b7171] select-none">
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
            </div>

            <div className="flex gap-[3px]">
              {weeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-[3px]">
                  {week.map((day, dIdx) => (
                    <div
                      key={dIdx}
                      onMouseEnter={() => setHoveredDay(day)}
                      onMouseLeave={() => setHoveredDay(null)}
                      title={`${day.count} contributions on ${day.date}`}
                      className={`w-[10.5px] h-[10.5px] rounded-[2px] transition-transform hover:scale-125 cursor-pointer ${getCellColor(
                        day.level
                      )}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info & Legend */}
      <div className="flex items-center justify-between pt-3 mt-2 border-t border-black/[0.04] dark:border-white/[0.04] font-mono text-[11px] text-[#574141] dark:text-zinc-400">
        <div className="truncate">
          {hoveredDay ? (
            <span className="font-semibold text-[#1b1b1f] dark:text-white">
              {hoveredDay.count} contributions{" "}
              <span className="text-[#8b7171] font-normal">on {hoveredDay.date}</span>
            </span>
          ) : (
            <span className="text-[#8b7171]">Hover over a cell to view daily commits</span>
          )}
        </div>

        <div className="flex items-center gap-1.5 shrink-0 select-none">
          <span className="text-[10px] text-[#8b7171]">Less</span>
          {[0, 1, 2, 3, 4].map((lvl) => (
            <div
              key={lvl}
              className={`w-[9px] h-[9px] rounded-[2px] ${getCellColor(lvl)}`}
            />
          ))}
          <span className="text-[10px] text-[#8b7171]">More</span>
        </div>
      </div>
    </div>
  );
}
