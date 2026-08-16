"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  Terminal,
  Play,
  CheckCircle2,
  Cpu,
  Copy,
  Check,
  Code2,
  Sparkles,
  Zap,
} from "lucide-react";
import { FaJava } from "react-icons/fa";
import { SiSpringboot, SiFlutter, SiRabbitmq } from "react-icons/si";

interface CodeSnippet {
  id: string;
  filename: string;
  lang: string;
  icon: React.ReactNode;
  lines: { text: string; color: string }[];
  output: string;
}

const SNIPPETS: CodeSnippet[] = [
  {
    id: "spring",
    filename: "FileConversionService.java",
    lang: "Java 21 / Spring Boot",
    icon: <SiSpringboot className="size-4 text-[#6db33f]" />,
    lines: [
      { text: "@Service", color: "text-amber-400" },
      { text: "public class FileConversionService {", color: "text-violet-300" },
      { text: "  @Autowired", color: "text-amber-400" },
      { text: "  private RabbitTemplate rabbitTemplate;", color: "text-cyan-300" },
      { text: "", color: "" },
      { text: "  public void processAsync(FilePayload payload) {", color: "text-violet-300" },
      { text: "    rabbitTemplate.convertAndSend(", color: "text-zinc-300" },
      { text: "      \"image.exchange\", \"convert.key\", payload", color: "text-emerald-300" },
      { text: "    );", color: "text-zinc-300" },
      { text: "    log.info(\"✓ Dispatched to worker queue\");", color: "text-emerald-400 font-semibold" },
      { text: "  }", color: "text-violet-300" },
      { text: "}", color: "text-violet-300" },
    ],
    output: "⚡ Event published to RabbitMQ queue • Worker pods processing (14ms)",
  },
  {
    id: "flutter",
    filename: "RentalFeedScreen.dart",
    lang: "Flutter / Dart",
    icon: <SiFlutter className="size-4 text-[#02569b]" />,
    lines: [
      { text: "class RentalFeedScreen extends StatefulWidget {", color: "text-violet-300" },
      { text: "  @override", color: "text-amber-400" },
      { text: "  _RentalFeedState createState() => _RentalFeedState();", color: "text-cyan-300" },
      { text: "}", color: "text-violet-300" },
      { text: "", color: "" },
      { text: "class _RentalFeedState extends State<RentalFeedScreen> {", color: "text-violet-300" },
      { text: "  Future<void> fetchProperties() async {", color: "text-cyan-300" },
      { text: "    final res = await apiService.getAvailableRentals();", color: "text-zinc-300" },
      { text: "    setState(() => properties = res.data);", color: "text-emerald-300" },
      { text: "  }", color: "text-violet-300" },
      { text: "}", color: "text-violet-300" },
    ],
    output: "📱 Flutter state synchronized with AWS S3 & Redis Cache • 60 FPS Render",
  },
];

export const HeroTerminal = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [activeLine, setActiveLine] = useState(0);

  const snippet = SNIPPETS[activeTab];

  // Cycling active highlight line
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLine((prev) => (prev + 1) % snippet.lines.length);
    }, 1800);
    return () => clearInterval(timer);
  }, [snippet.lines.length]);

  const handleCopy = () => {
    const code = snippet.lines.map((l) => l.text).join("\n");
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => setIsRunning(false), 1200);
  };

  return (
    <div className="w-full max-w-full sm:max-w-lg mx-auto flex flex-col justify-center items-center">
      {/* Terminal Window Container */}
      <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-zinc-950/90 border border-violet-500/30 backdrop-blur-2xl shadow-[0_0_50px_-15px_rgba(139,92,246,0.3)] transition-all duration-500 hover:border-violet-500/50 hover:shadow-[0_0_60px_-15px_rgba(6,182,212,0.35)]">
        
        {/* Top Window Bar */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-zinc-900/90 border-b border-zinc-800">
          {/* MacOS Window Dots */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <span className="size-2.5 sm:size-3 rounded-full bg-rose-500/80 inline-block shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
            <span className="size-2.5 sm:size-3 rounded-full bg-amber-500/80 inline-block shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
            <span className="size-2.5 sm:size-3 rounded-full bg-emerald-500/80 inline-block shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
          </div>

          {/* File Tabs */}
          <div className="flex items-center gap-1 bg-zinc-950/80 p-0.5 sm:p-1 rounded-xl border border-zinc-800/80 max-w-[200px] sm:max-w-none overflow-hidden">
            {SNIPPETS.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(idx);
                  setActiveLine(0);
                }}
                className={cn(
                  "flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 rounded-lg text-[11px] sm:text-xs font-mono transition-all",
                  activeTab === idx
                    ? "bg-zinc-800 text-white border border-zinc-700 shadow-sm"
                    : "text-zinc-400 hover:text-white"
                )}
              >
                {tab.icon}
                <span className="truncate max-w-[65px] sm:max-w-[130px]">{tab.filename}</span>
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleCopy}
              className="p-1 sm:p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              title="Copy snippet"
            >
              {copied ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
            </button>
          </div>
        </div>

        {/* Code Content Area */}
        <div className="p-5 font-mono text-xs leading-relaxed bg-zinc-950/95 overflow-x-auto min-h-[260px] flex flex-col justify-between">
          <div className="space-y-1">
            {snippet.lines.map((line, idx) => (
              <div
                key={idx}
                className={cn(
                  "flex items-center gap-3 px-2 py-0.5 rounded transition-colors duration-300",
                  activeLine === idx ? "bg-violet-500/15 text-white" : "hover:bg-zinc-900/40"
                )}
              >
                <span className="select-none text-[10px] text-zinc-600 w-5 text-right font-mono">
                  {idx + 1}
                </span>
                <span className={cn(line.color, "whitespace-pre")}>{line.text}</span>
              </div>
            ))}
          </div>

          {/* Real-time Status / Output Footer */}
          <div className="mt-4 pt-3 border-t border-zinc-800/80 flex flex-col gap-2">
            <div className="flex items-center justify-between text-[11px] text-zinc-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                {snippet.lang} • Online
              </span>
              <button
                onClick={handleRun}
                disabled={isRunning}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-violet-600/30 border border-violet-500/40 text-violet-300 hover:bg-violet-600/50 transition-all cursor-pointer text-[10px] font-semibold"
              >
                <Play className={cn("size-2.5", isRunning && "animate-spin")} />
                {isRunning ? "Running..." : "Test Dispatch"}
              </button>
            </div>
            
            <div className="px-3 py-1.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-[11px] text-zinc-300 font-mono flex items-center gap-2">
              <Zap className="size-3.5 text-amber-400 shrink-0" />
              <span className="truncate">{snippet.output}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroTerminal;
