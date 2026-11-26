import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you're looking for doesn't exist or has been moved.",
};

const NotFoundPage = () => {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-[#030305] text-white px-4">
      <div className="max-w-md w-full p-6 rounded-xl bg-black/40 backdrop-blur-xl border border-white/[0.12] text-center space-y-4">
        <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
          {"ERROR 404 // NOT FOUND"}
        </p>
        <h1 className="font-display text-3xl font-bold tracking-tight text-white">
          {"Page Not Found"}
        </h1>
        <p className="font-sans text-sm text-zinc-400">
          {"The page you're looking for doesn't exist or has been moved."}
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-4 py-2 rounded bg-white hover:bg-zinc-200 text-black font-mono text-xs font-semibold transition-colors"
          >
            {"Back to Portfolio"}
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
