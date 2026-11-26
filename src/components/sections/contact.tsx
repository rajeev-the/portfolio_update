"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="w-full py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <SectionHeader
          id="contact"
          eyebrow="06 // GET IN TOUCH"
          title="Let's discuss systems architecture or engineering roles."
          desc="Available for full-time software engineering roles, enterprise architecture discussions, and select consulting engagements."
        />

        {/* Contact Banner & Action */}
        <div className="p-6 md:p-8 rounded-2xl bg-[#232328] border border-white/[0.08] mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-[0_1px_3px_rgba(0,0,0,0.2)]">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 block mb-1">
              {"DIRECT INQUIRY //"}
            </span>
            <a
              href={`mailto:${config.email}`}
              className="font-display text-lg sm:text-xl font-bold text-[#ff9d9f] hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#8b1e2b] rounded-sm"
            >
              {config.email}
            </a>
            <p className="font-sans text-xs text-zinc-400 mt-1">
              {"Based in India • Open to remote worldwide & on-site engineering roles."}
            </p>
          </div>

          <a
            href={`mailto:${config.email}`}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[#8b1e2b] hover:bg-[#721422] text-white text-xs font-mono font-semibold tracking-wide transition-all duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] shadow-sm active:scale-[0.98] active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b1e2b] shrink-0"
          >
            <Mail className="w-4 h-4" />
            <span>{"Send Email"}</span>
          </a>
        </div>

        {/* Contact Form Container */}
        <div className="max-w-2xl mx-auto">
          <Card className="w-full bg-[#232328] border border-white/[0.08] rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.2)]">
            <CardHeader className="pb-4">
              <CardTitle className="font-display text-xl font-bold text-white">
                {"Leave a Message"}
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm text-zinc-400">
                {"Drop your contact details and project or hiring inquiry directly through this form:"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
