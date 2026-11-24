import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

export const SectionHeader = ({
  id,
  eyebrow,
  title,
  desc,
  className,
}: {
  id: string;
  eyebrow?: string;
  title: string | ReactNode;
  desc?: string;
  className?: string;
}) => {
  return (
    <div className={cn("mb-8 md:mb-10 text-left", className)}>
      {eyebrow && (
        <div className="font-mono text-xs font-semibold uppercase tracking-wider text-[#ff9d9f] mb-1.5">
          {eyebrow}
        </div>
      )}
      <Link href={`#${id}`}>
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#fbf8fe] hover:text-[#ff9d9f] transition-colors inline-block">
          {title}
        </h2>
      </Link>
      {desc && (
        <p className="font-sans text-sm sm:text-base text-zinc-400 mt-1 max-w-2xl leading-relaxed">
          {desc}
        </p>
      )}
    </div>
  );
};
