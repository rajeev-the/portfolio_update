"use client";
import {
  useState,
  useEffect,
  createContext,
  ReactNode,
  useContext,
  useRef,
} from "react";
import { AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";

import Loader from "./loader";
import gsap from "gsap";
import { usePerfProfile } from "@/hooks/use-perf-profile";

type PreloaderContextType = {
  isLoading: boolean;
  loadingPercent: number;
  bypassLoading: () => void;
};
const INITIAL: PreloaderContextType = {
  isLoading: false,
  loadingPercent: 100,
  bypassLoading: () => {},
};
export const preloaderContext = createContext<PreloaderContextType>(INITIAL);

type PreloaderProps = {
  children: ReactNode;
  disabled?: boolean;
};

export const usePreloader = () => {
  const context = useContext(preloaderContext);
  if (!context) {
    throw new Error("usePreloader must be used within a PreloaderProvider");
  }
  return context;
};
const LOADING_TIME = 1.2;
function Preloader({ children, disabled = true }: PreloaderProps) {
  const pathname = usePathname();
  // Skip the loading splash (the Spline 3D scene was replaced with lightweight terminal & CSS)
  const skip = disabled || pathname?.startsWith("/resume");

  const [isLoading, setIsLoading] = useState(!skip);
  const [loadingPercent, setLoadingPercent] = useState(skip ? 100 : 0);
  const loadingTween = useRef<gsap.core.Tween>(null);

  const { disable3D, ready: perfReady } = usePerfProfile();

  const bypassLoading = () => {
    loadingTween.current?.progress(0.99).kill();
    setLoadingPercent(100);
    setIsLoading(false);
  };

  useEffect(() => {
    if (perfReady && disable3D) bypassLoading();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perfReady, disable3D]);
  const loadingPercentRef = useRef<{ value: number }>({ value: 0 });
  useEffect(() => {
    if (skip) return;
    loadingTween.current = gsap.to(loadingPercentRef.current, {
      value: 100,
      duration: LOADING_TIME,
      ease: "power2.out",
      onUpdate: () => {
        setLoadingPercent(loadingPercentRef.current.value);
      },
      onComplete: () => {
        setIsLoading(false);
      },
    });

    const fallback = setTimeout(() => {
      setIsLoading(false);
      setLoadingPercent(100);
    }, 1500);

    return () => {
      loadingTween.current?.kill();
      clearTimeout(fallback);
    };
  }, [skip]);

  return (
    <preloaderContext.Provider
      value={{ isLoading, bypassLoading, loadingPercent }}
    >
      <AnimatePresence mode="wait">{isLoading && <Loader />}</AnimatePresence>
      {children}
    </preloaderContext.Provider>
  );
}

export default Preloader;
