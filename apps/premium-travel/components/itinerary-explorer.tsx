"use client";

import { useState } from "react";
import { ItineraryDay } from "@/lib/data";

export function ItineraryExplorer({ days }: { days: ItineraryDay[] }) {
  const [activeDay, setActiveDay] = useState(1);
  const active = (days.find((day) => day.day === activeDay) ?? days[0])!;

  return (
    <div className="itinerary-explorer">
      <div className="itinerary-list">
        {days.map((day) => (
          <button
            type="button"
            key={day.day}
            className={activeDay === day.day ? "is-active" : ""}
            onClick={() => setActiveDay(day.day)}
          >
            <span>Jour {String(day.day).padStart(2, "0")}</span>
            <div>
              <small>{day.place}</small>
              <strong>{day.title}</strong>
              <p>{day.description}</p>
              <em>{day.stay} · {day.meals}</em>
            </div>
          </button>
        ))}
      </div>
      <div className="itinerary-map">
        <div className="itinerary-map__grid" />
        <div className="itinerary-map__route" />
        {days.map((day) => (
          <button
            type="button"
            key={day.day}
            className={activeDay === day.day ? "is-active" : ""}
            style={{ left: `${day.coordinates[0]}%`, top: `${day.coordinates[1]}%` }}
            onClick={() => setActiveDay(day.day)}
            aria-label={`Jour ${day.day}, ${day.place}`}
          >
            {day.day}
          </button>
        ))}
        <div className="itinerary-map__card">
          <span>Jour {active.day}</span>
          <strong>{active.place}</strong>
          <p>{active.title}</p>
        </div>
        <small>Carte illustrative · synchronisée avec l’itinéraire</small>
      </div>
    </div>
  );
}
