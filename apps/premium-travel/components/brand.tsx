"use client";

import Link from "next/link";
import { asset } from "@/lib/base-path";

export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Sanaa Services, home">
      <img
        src={asset("/images/logo.png")}
        alt="Sanaa Services"
        height={56}
        style={{ display: "block", height: 56, width: "auto" }}
      />
    </Link>
  );
}
