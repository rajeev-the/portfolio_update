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
import { Mail, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="w-full py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <SectionHeader
          id="contact"
          eyebrow="06 // CONTACT / INQUIRY"
          title="Let's discuss systems architecture or engineering roles."
          desc="Available for full-time software engineering roles, enterprise architecture discussions, and select consulting engagements."
        />

        {/* Contact Banner & Action */}
        <div className="p-6 md:p-8 rounded-lg bg-[#ffffff] dark:bg-[#232328] border border-black/[0.08] dark:border-white/[0.08] mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#8b7171] dark:text-zinc-400 block mb-1">
              DIRECT INQUIRY //
            </span>
            <a
              href={`mailto:${config.email}`}
              className="font-display text-lg sm:text-xl font-bold text-[#8b1e2b] dark:text-[#ff9d9f] hover:underline"
            >
              {config.email}
            </a>
            <p className="font-sans text-xs text-[#574141] dark:text-zinc-400 mt-1">
              Based in India • Open to remote worldwide &amp; on-site engineering roles.
            </p>
          </div>

          <a
            href={`mailto:${config.email}`}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[4px] bg-[#8b1e2b] hover:bg-[#721422] text-white text-xs sm:text-sm font-mono font-semibold tracking-wide transition-all shadow-sm active:translate-y-[1px] shrink-0"
          >
            <Mail className="w-4 h-4" />
            <span>Send Email</span>
          </a>
        </div>

        {/* Contact Form Container */}
        <div className="max-w-2xl mx-auto">
          <Card className="w-full bg-[#ffffff] dark:bg-[#232328] border border-black/[0.08] dark:border-white/[0.08] rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            <CardHeader className="pb-4">
              <CardTitle className="font-display text-xl font-bold text-[#1b1b1f] dark:text-white">
                Leave a Message
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm text-[#574141] dark:text-zinc-400">
                You can also drop your contact details and message directly through this form:
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
