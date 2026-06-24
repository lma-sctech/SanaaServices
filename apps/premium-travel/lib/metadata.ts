import type { Metadata } from "next";

const SITE_NAME = "Sanaa Private Travel";
const BASE_URL = "https://travel.sanaaservices.com";

export function createPremiumMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${BASE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
    },
    twitter: { card: "summary", title, description },
  };
}
