"use client";

import { useSearchParams } from "next/navigation";
import { QuoteWizard } from "@/components/quote-wizard";

export function QuotePageClient() {
  const searchParams = useSearchParams();

  return <QuoteWizard presetJourney={searchParams.get("journey") ?? ""} />;
}
