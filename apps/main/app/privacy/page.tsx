import type { Metadata } from "next";
import { createMainMetadata } from "../../lib/metadata";

export const metadata: Metadata = createMainMetadata({
  title: "Privacy Notice | Sanaa Services",
  description: "How Sanaa Services handles your data, what we collect and your rights as a visitor.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main>
      <section className="content-section" style={{ paddingTop: "6rem" }}>
        <div className="shell">
          <div className="prose">
            <p className="eyebrow">Privacy</p>
            <h1>Privacy notice</h1>
            <h2>What we collect</h2>
            <p>This website does not use contact forms, customer accounts, document uploads or online payments at this time. We do not collect personal information beyond standard server logs.</p>
            <h2>Cookies</h2>
            <p>We use only essential cookies required for the website to function. No advertising, tracking or third-party analytics cookies are placed.</p>
            <h2>Your rights</h2>
            <p>You have the right to request information about any personal data we may hold, to request its correction or deletion, and to withdraw consent where applicable.</p>
            <h2>Updates</h2>
            <p>This notice may be revised as the website evolves. Material changes will be reflected on this page.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
