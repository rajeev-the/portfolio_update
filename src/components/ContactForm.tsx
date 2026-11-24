"use client";
import { ChevronRight, Loader2 } from "lucide-react";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/ace-input";
import { Textarea } from "./ui/ace-textarea";
import { cn } from "@/lib/utils";
import { useToast } from "./ui/use-toast";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { z } from "zod";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof formSchema>, string>>;

const ContactForm = () => {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState<FieldErrors>({});

  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const result = formSchema.safeParse({ fullName, email, message });
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof FieldErrors;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, message }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || `Request failed (${res.status})`);
      }
      toast({
        title: "Thank you!",
        description: "I'll get back to you as soon as possible.",
        variant: "default",
        className: cn("top-0 mx-auto flex fixed md:top-4 md:right-4"),
      });
      setLoading(false);
      setFullName("");
      setEmail("");
      setMessage("");
      const timer = setTimeout(() => {
        router.push("/");
        clearTimeout(timer);
      }, 1000);
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong! Please try again.",
        className: cn(
          "top-0 w-full flex justify-center fixed md:max-w-7xl md:top-4 md:right-4"
        ),
        variant: "destructive",
      });
    }
    setLoading(false);
  };

  return (
    <form className="w-full sm:mt-2" onSubmit={handleSubmit} aria-busy={loading}>
      <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 mb-4">
        <LabelInputContainer>
          <Label htmlFor="fullname" className="text-xs font-mono font-medium text-zinc-300">
            Full Name
          </Label>
          <Input
            id="fullname"
            placeholder="Your Name"
            type="text"
            value={fullName}
            onChange={(e) => { setFullName(e.target.value); setErrors((p) => ({ ...p, fullName: undefined })); }}
          />
          {errors.fullName && <p className="text-xs text-rose-400 mt-1">{errors.fullName}</p>}
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="email" className="text-xs font-mono font-medium text-zinc-300">
            Email Address
          </Label>
          <Input
            id="email"
            placeholder="you@example.com"
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: undefined })); }}
          />
          {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
        </LabelInputContainer>
      </div>
      <div className="grid w-full gap-1.5 mb-5">
        <Label htmlFor="content" className="text-xs font-mono font-medium text-zinc-300">
          Your Message
        </Label>
        <Textarea
          placeholder="Briefly describe your project, timeline, or engineering inquiry..."
          id="content"
          value={message}
          onChange={(e) => { setMessage(e.target.value); setErrors((p) => ({ ...p, message: undefined })); }}
          className="min-h-[100px]"
        />
        {errors.message && <p className="text-xs text-rose-400 mt-1">{errors.message}</p>}
      </div>
      <Button
        disabled={loading}
        className="w-full h-11 rounded-[4px] bg-[#8b1e2b] hover:bg-[#721422] text-white font-mono text-xs font-semibold tracking-wider uppercase transition-all shadow-sm active:translate-y-[1px]"
        type="submit"
      >
        {loading ? (
          <div className="flex items-center justify-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Sending Message...</span>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2">
            <span>Send Message</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
