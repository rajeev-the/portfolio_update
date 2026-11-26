"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default function SiteFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const bare = pathname?.startsWith("/components") ?? false;
  const isHome = !pathname || pathname === "/";

  if (bare) return <>{children}</>;

  return (
    <>
      {!isHome && <Header />}
      {children}
      {!isHome && <Footer />}
    </>
  );
}
