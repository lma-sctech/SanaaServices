"use client";

import { asset } from "../lib/base-path";

const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=sanaaservices+astoria+newyork#lrd=0x89c25f402a398c2d:0x20cbdb6005b7476c,1,,,,,";

const reviews = [
  { name: "nicole Ben", category: "Travel", years: "20+", quote: "Best travel agency — honest, trustworthy and professional. Got my first ticket in 2005, still the best ever." },
  { name: "Milim Nava", category: "Notary", years: null, quote: "Visited for notary services — kind, professional and patient with my paperwork. She loves what she does." },
  { name: "WFM CHANNEL", category: "Travel", years: "20+", quote: "Friendly and professional service. I have been a customer for more than 20 years." },
  { name: "Bahi", category: "Travel", years: "17", quote: "Best travel agency — customer for the past 17 years. Exceptional customer service." },
  { name: "Massy W.", category: "Travel", years: "10+", quote: "Very professional, helpful — I always purchase my tickets from her and she loves what she does." },
  { name: "Ftina S", category: "General", years: null, quote: "The ladies are absolutely phenomenal and amazing! I would highly recommend checking them out." },
  { name: "Tao Ben", category: "General", years: null, quote: "Great person and professional. Big up madame Sanaa!" },
  { name: "Mohammed", category: "General", years: null, quote: "Highly recommended: trustworthy, professional, and excellent service." },
  { name: "Arman D.", category: "Notary", years: null, quote: "Great and easy notary." },
  { name: "Coloradolimo Services", category: "General", years: null, quote: "Excellent service: Sanaa and Wahiba are very friendly and professional." },
  { name: "Adam H", category: "General", years: null, quote: "Great service, staff are friendly, knowledgeable and courteous." },
  { name: "essaaudaoui youness", category: "Travel", years: null, quote: "Best travel agency — honest, trustworthy and professional." },
  { name: "Anoiar B.", category: "General", years: null, quote: "Awesome customer service — girl on the phone is patient and professional." },
  { name: "Sebastiano B.", category: "General", years: null, quote: "Kind and courteous staff. A pleasure to work with." },
  { name: "Jamila Ben", category: "General", years: null, quote: "Very professional and nice welcoming." },
  { name: "Sabrina Lala", category: "General", years: null, quote: "Fantastic service." },
  { name: "Omar Abaik", category: "General", years: null, quote: "She's doing a great job, thanks for the help." },
  { name: "Mustapha Nadir", category: "General", years: null, quote: "Their service is good and trustful." },
  { name: "Dady Yagoubi", category: "General", years: null, quote: "Best and fast service. I recommend." },
  { name: "E Kanzy", category: "General", years: null, quote: "Best service and best customer service." },
  { name: "bouazza benjeddi", category: "General", years: null, quote: "Professional and great services." },
  { name: "Omar Z.", category: "General", years: null, quote: "Very good and helpful people." },
  { name: "Zohra Hilal", category: "General", years: null, quote: "Good and professional." },
  { name: "Ayoub", category: "General", years: null, quote: "Sanaa is a saint." },
];

const doubled = [...reviews, ...reviews];

function Stars() {
  return (
    <span className="review-stars" aria-label="5 out of 5 stars">
      {"★★★★★"}
    </span>
  );
}

export function ReviewCarousel() {
  return (
    <section className="reviews-section">
      <div className="shell">
        <div className="reviews-section__header">
          <div>
            <p className="eyebrow">Client trust, built over years</p>
            <h2>What our clients say.</h2>
            <p className="reviews-section__intro">
              Real reviews from families, travelers and community members who trusted Sanaa Services.
            </p>
          </div>
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="reviews-section__google" aria-label="See our Google Reviews">
            <img src={asset("/images/icons/google.svg")} alt="" width={18} height={18} />
            <span>Google Reviews</span>
          </a>
        </div>
      </div>
      <div className="reviews-track-wrapper">
        <div className="reviews-track" aria-label="Client reviews">
          {doubled.map((review, i) => (
            <article className="review-card" key={`${i}-${review.name}`}>
              <div className="review-card__top">
                <Stars />
                <span className="review-card__meta">
                  {review.category}
                  {review.years && ` · ${review.years} years`}
                </span>
              </div>
              <blockquote>&ldquo;{review.quote}&rdquo;</blockquote>
              <div className="review-card__author">
                <span className="review-card__name">{review.name}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
