import type { Metadata } from "next";
import { createMainMetadata } from "../../lib/metadata";

export const metadata: Metadata = createMainMetadata({
  title: "Accessibility | Sanaa Services",
  description: "Our commitment to accessibility across the Sanaa Services websites.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <main>
      <section className="content-section" style={{ paddingTop: "6rem" }}>
        <div className="shell">
          <div className="prose">
            <p className="eyebrow">Accessibility</p>
            <h1>Our commitment to accessibility</h1>
            <p>Sanaa Services is committed to making its websites accessible to everyone, including people with disabilities. We aim to conform to WCAG 2.2 Level AA.</p>
            <h2>Measures in place</h2>
            <p>Semantic HTML, keyboard navigation, visible focus indicators, responsive text, reduced-motion support and sufficient color contrast.</p>
            <h2>Feedback</h2>
            <p>If you encounter an accessibility barrier on any Sanaa Services website, please contact us. We will address the issue promptly.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
