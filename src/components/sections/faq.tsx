"use client";

import React, { useState } from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What full-time engineering roles are you targeting?",
    answer:
      "I am targeting full-time Software Engineer, Backend Developer, and Full Stack Developer roles where I can contribute to high-throughput backend services, distributed systems, or client-facing applications.",
  },
  {
    question: "What is your primary production technology stack?",
    answer:
      "My core stack includes Node.js, Express, Java, and Spring Boot for backend microservices; React, Next.js, Flutter, and Electron for multiplatform client interfaces; and MongoDB, PostgreSQL, AWS S3, and AWS Lambda for storage and cloud execution.",
  },
  {
    question: "What real-world production experience do you bring?",
    answer:
      "During my Software Developer Internship at AventIQ, I engineered production REST APIs, integrated AWS S3 media pipelines, and built desktop/mobile features with Flutter and Electron. Additionally, I architected FinixBooks, an enterprise double entry ERP with balanced validation and automated Tally sync.",
  },
  {
    question: "How do you ensure data integrity and avoid edge cases?",
    answer:
      "I design for zero ambiguity: using integer paise precision to eliminate floating-point rounding errors in financial systems, append-only MongoDB voucher schemas to prevent race conditions, and strict unit and integration testing across service boundaries.",
  },
  {
    question: "Are you open to relocation or remote opportunities?",
    answer:
      "Yes, I am completely flexible and open to remote positions globally, as well as on-site and hybrid engineering roles in major tech hubs.",
  },
];

export const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <SectionWrapper id="faq" className="w-full py-16 md:py-24">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        <SectionHeader
          id="faq"
          eyebrow="05 // FREQUENTLY ASKED"
          title="Engineering & Availability FAQ"
          desc="Direct answers to questions regarding engineering qualifications, technical stack, and full-time hiring availability."
        />

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.question}
                className="rounded-xl bg-[#232328] border border-white/[0.08] hover:border-[#8b1e2b]/40 transition-colors duration-300 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b1e2b]"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-semibold text-[#fbf8fe] tracking-tight text-balance">
                    {faq.question}
                  </span>
                  <span
                    className={`w-6 h-6 rounded-md bg-[#1b1b1f] border border-white/[0.08] flex items-center justify-center text-[#ff9d9f] shrink-0 transition-transform duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen ? "rotate-180 bg-[#2a0e13]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-zinc-300 leading-relaxed border-t border-white/[0.04] text-pretty">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FAQSection;
