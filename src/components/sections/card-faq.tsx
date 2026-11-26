"use client";

import React from "react";

interface FAQItem {
  id: string;
  tag: string;
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    id: "roles",
    tag: "TARGET ROLES",
    question: "What full-time engineering roles are you targeting?",
    answer:
      "I am targeting full-time Software Engineer, Backend Developer, and Full Stack Developer roles where I can contribute to high-throughput backend services, distributed systems, or client-facing applications.",
  },
  {
    id: "stack",
    tag: "TECH STACK",
    question: "What is your primary production technology stack?",
    answer:
      "My core stack includes Node.js, Express, Java, and Spring Boot for backend microservices; React, Next.js, Flutter, and Electron for multiplatform client interfaces; and MongoDB, PostgreSQL, AWS S3, and AWS Lambda for storage and cloud execution.",
  },
  {
    id: "experience",
    tag: "TRACK RECORD",
    question: "What real-world production experience do you bring?",
    answer:
      "During my Software Developer Internship at AventIQ, I engineered production REST APIs, integrated AWS S3 media pipelines, and built desktop/mobile features with Flutter and Electron. Additionally, I architected FinixBooks, an enterprise double-entry ERP with balanced validation and automated Tally sync.",
  },
  {
    id: "integrity",
    tag: "DATA INTEGRITY",
    question: "How do you ensure data integrity and avoid edge cases?",
    answer:
      "I design for zero ambiguity: using integer-paise precision to eliminate floating-point rounding errors in financial systems, append-only MongoDB voucher schemas to prevent race conditions, and strict unit and integration testing across service boundaries.",
  },
  {
    id: "relocation",
    tag: "AVAILABILITY",
    question: "Are you open to relocation or remote opportunities?",
    answer:
      "Yes, I am completely flexible and open to remote positions globally, as well as on-site and hybrid engineering roles in major tech hubs.",
  },
];

export const CardFaq = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      {/* Section Header */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
            {"TECHNICAL & HIRING FAQ"}
          </span>
          <span className="text-zinc-600 font-mono text-xs">{"•"}</span>
          <span className="font-mono text-xs text-zinc-400">
            {"ENGINEERING SPECIFICATIONS"}
          </span>
        </div>
        <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
          {"5 TOPICS"}
        </span>
      </div>

      {/* Frosted Glass 2-Column Technical Q&A Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        {FAQS.map((faq, idx) => (
          <div
            key={faq.id}
            className={`p-4 rounded-xl bg-black/30 backdrop-blur-md border border-white/[0.14] hover:border-white/30 transition-all shadow-2xl flex flex-col justify-between ${
              idx === FAQS.length - 1 ? "md:col-span-2" : ""
            }`}
          >
            <div>
              {/* Question Header */}
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-white/[0.08]">
                <h4 className="font-display text-sm font-bold text-white">
                  {faq.question}
                </h4>
                <span className="font-mono text-[9px] font-semibold px-1.5 py-0.5 rounded bg-white/[0.08] text-zinc-300 border border-white/[0.12] uppercase shrink-0 ml-2">
                  {faq.tag}
                </span>
              </div>

              {/* Answer */}
              <p className="font-sans text-xs sm:text-[13px] text-zinc-300 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardFaq;
