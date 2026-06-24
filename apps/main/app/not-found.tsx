import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main>
      <section className="content-section" style={{ paddingTop: "6rem", textAlign: "center" }}>
        <div className="shell">
          <p className="eyebrow">404</p>
          <h1>This page could not be found.</h1>
          <p style={{ color: "var(--muted)", marginBottom: "2rem" }}>Return to Sanaa Services or explore our services.</p>
          <Link href="/" className="button button--dark">Return home</Link>
        </div>
      </section>
    </main>
  );
}
