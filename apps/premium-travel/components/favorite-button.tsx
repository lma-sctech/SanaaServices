"use client";

import { useEffect, useState } from "react";
import { Heart } from "@/components/icons";

export function FavoriteButton({ slug, label = "Ajouter aux favoris" }: { slug: string; label?: string }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("sanaa-favorites") ?? "[]") as string[];
    setActive(saved.includes(slug));
  }, [slug]);

  function toggle() {
    const saved = JSON.parse(localStorage.getItem("sanaa-favorites") ?? "[]") as string[];
    const next = saved.includes(slug) ? saved.filter((item) => item !== slug) : [...saved, slug];
    localStorage.setItem("sanaa-favorites", JSON.stringify(next));
    setActive(next.includes(slug));
  }

  return (
    <button
      type="button"
      className={`favorite-button ${active ? "is-active" : ""}`}
      onClick={toggle}
      aria-pressed={active}
      aria-label={active ? "Retirer des favoris" : label}
    >
      <Heart />
    </button>
  );
}
