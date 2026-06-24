"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { JourneyCard } from "@/components/journey-card";
import { journeys, regions, interests } from "@/lib/data";
import { Close } from "@/components/icons";

export function JourneyExplorer({ initialQuery = "" }: { initialQuery?: string }) {
  const searchParams = useSearchParams();
  const queryFromUrl = initialQuery || searchParams.get("q") || "";
  const [query, setQuery] = useState(queryFromUrl);
  const [region, setRegion] = useState("Toutes");
  const [interest, setInterest] = useState("Toutes");
  const [mode, setMode] = useState("Tous");
  const [sort, setSort] = useState("selection");
  const [compare, setCompare] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const results = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("fr");
    const filtered = journeys.filter((journey) => {
      const haystack = [
        journey.title,
        journey.country,
        journey.region,
        journey.summary,
        ...journey.interests,
      ]
        .join(" ")
        .toLocaleLowerCase("fr");

      return (
        (!normalized || haystack.includes(normalized)) &&
        (region === "Toutes" || journey.region === region) &&
        (interest === "Toutes" || journey.interests.includes(interest)) &&
        (mode === "Tous" || journey.mode === mode)
      );
    });

    return [...filtered].sort((a, b) => {
      if (sort === "prix") return a.price - b.price;
      if (sort === "duree") return a.duration - b.duration;
      return b.rating - a.rating;
    });
  }, [query, region, interest, mode, sort]);

  function toggleCompare(slug: string) {
    setCompare((current) =>
      current.includes(slug)
        ? current.filter((item) => item !== slug)
        : current.length < 3
          ? [...current, slug]
          : current,
    );
  }

  function reset() {
    setQuery("");
    setRegion("Toutes");
    setInterest("Toutes");
    setMode("Tous");
  }

  return (
    <div className="journey-explorer section-shell">
      <div className="journey-explorer__toolbar">
        <label className="catalog-search">
          <span>Rechercher</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Pays, thème, itinéraire..."
          />
        </label>
        <button className="filter-toggle" type="button" onClick={() => setShowFilters(!showFilters)}>
          Filtres <span>{showFilters ? "−" : "+"}</span>
        </button>
        <label className="sort-select">
          <span>Trier par</span>
          <select value={sort} onChange={(event) => setSort(event.target.value)}>
            <option value="selection">Notre sélection</option>
            <option value="prix">Prix croissant</option>
            <option value="duree">Durée</option>
          </select>
        </label>
      </div>

      <div className={`journey-explorer__body ${showFilters ? "filters-open" : ""}`}>
        <aside className="catalog-filters">
          <div>
            <h2>Région</h2>
            {["Toutes", ...regions].map((item) => (
              <button
                type="button"
                className={region === item ? "is-active" : ""}
                onClick={() => setRegion(item)}
                key={item}
              >
                {item}<span>{region === item ? "●" : "○"}</span>
              </button>
            ))}
          </div>
          <div>
            <h2>Envie</h2>
            <select value={interest} onChange={(event) => setInterest(event.target.value)}>
              <option>Toutes</option>
              {interests.map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>
          <div>
            <h2>Format</h2>
            <select value={mode} onChange={(event) => setMode(event.target.value)}>
              <option>Tous</option>
              <option>Privé</option>
              <option>Petit groupe</option>
              <option>Signature</option>
            </select>
          </div>
          <button type="button" className="text-link" onClick={reset}>Réinitialiser</button>
        </aside>

        <div className="catalog-results">
          <div className="catalog-results__head">
            <p><strong>{results.length}</strong> voyages trouvés</p>
            <span>Prix indicatifs par personne, hors vols internationaux.</span>
          </div>
          {results.length ? (
            <div className="journey-grid journey-grid--catalog">
              {results.map((journey) => (
                <div className="catalog-card-wrap" key={journey.slug}>
                  <JourneyCard journey={journey} />
                  <label className="compare-check">
                    <input
                      type="checkbox"
                      checked={compare.includes(journey.slug)}
                      onChange={() => toggleCompare(journey.slug)}
                      disabled={!compare.includes(journey.slug) && compare.length >= 3}
                    />
                    Comparer
                  </label>
                </div>
              ))}
            </div>
          ) : (
            <div className="catalog-empty">
              <p className="eyebrow">Aucun résultat exact</p>
              <h2>Et si nous partions d’une page blanche&nbsp;?</h2>
              <p>Un conseiller peut composer un itinéraire autour de vos dates et de vos priorités.</p>
              <Link href="/demande-de-voyage" className="button button--terracotta">Créer mon voyage</Link>
            </div>
          )}
        </div>
      </div>

      {compare.length > 0 && (
        <div className="compare-dock">
          <div>
            <span>{compare.length}/3</span>
            <p>Voyages prêts à comparer</p>
          </div>
          <div className="compare-dock__items">
            {compare.map((slug) => {
              const journey = journeys.find((item) => item.slug === slug);
              return (
                <button type="button" key={slug} onClick={() => toggleCompare(slug)}>
                  {journey?.shortTitle}<Close size={14} />
                </button>
              );
            })}
          </div>
          <button type="button" className="button button--gold">Comparer</button>
        </div>
      )}
    </div>
  );
}
