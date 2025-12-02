"use client";

import { useEffect, useRef, useState } from "react";

type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  threshold?: number;
};

const transformMap: Record<NonNullable<FadeInProps["direction"]>, string> = {
  up: "translate-y-8",
  down: "-translate-y-8",
  left: "-translate-x-8",
  right: "translate-x-8",
  none: "",
};

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  threshold = 0.1,
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { root: null, rootMargin: "0px", threshold }
    );

    const current = ref.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0 translate-x-0" : `opacity-0 ${transformMap[direction]}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
