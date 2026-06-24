"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    function onPlaying() {
      video!.classList.add("is-playing");
    }

    if (video.readyState >= 3) {
      onPlaying();
    } else {
      video.addEventListener("playing", onPlaying, { once: true });
      return () => video.removeEventListener("playing", onPlaying);
    }
  }, []);

  return (
    <video
      ref={ref}
      className="hero__video"
      autoPlay
      muted
      loop
      playsInline
      poster="/images/hero/hero-cap1.png"
    >
      <source src="/vid/hero-vid1.mp4" type="video/mp4" />
    </video>
  );
}
