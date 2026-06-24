"use client";

import { useEffect, useState } from "react";

export function TypeWriter({
  text,
  delay = 0,
  speed = 35,
  className = "",
  as: Tag = "span",
}: {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  as?: "span" | "p" | "h1" | "h2";
}) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [started, displayed, text, speed]);

  return (
    <Tag className={`typewriter ${className}`}>
      {displayed}
      {started && displayed.length < text.length && (
        <span className="typewriter__cursor" aria-hidden="true" />
      )}
    </Tag>
  );
}
