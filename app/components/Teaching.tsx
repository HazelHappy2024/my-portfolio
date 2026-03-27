"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";

interface PhotoItem {
  src: string;
  alt: string;
}

export default function Teaching() {
  const [photos, setPhotos] = useState<PhotoItem[]>([]);

  useEffect(() => {
    fetch("/api/photos")
      .then((r) => r.json())
      .then((data: string[]) => {
        setPhotos(data.map((src) => ({ src, alt: "Teaching moment" })));
      })
      .catch(() => setPhotos([]));
  }, []);

  const displayPhotos = photos.length > 0 ? [...photos, ...photos] : [];

  return (
    <section id="teaching" className="py-24 max-w-none">
      <div className="px-6 md:px-12 max-w-6xl mx-auto">
        <FadeIn>
          <SectionLabel label="Before Engineering" />
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <p className="font-sans text-sm leading-relaxed text-gray-700">
              8 years as a mathematics teacher before transitioning to software
              engineering. Those years shaped how I think about problem-solving
              and communication — the ability to take something abstract and make
              it tangible is a skill that transfers perfectly into engineering.
            </p>
            <p className="font-sans text-sm leading-relaxed text-gray-400 italic">
              Teaching mathematics taught me that the clearest explanation is
              usually the most elegant one. I carry that principle into every
              system I design.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Photo strip */}
      {photos.length > 0 ? (
        <div className="max-w-6xl mx-auto px-8">
          {/* group/gallery scopes hover to this wrapper for caption + scale */}
          <div className="group/gallery">
            <div className="photo-strip overflow-hidden">
              <div
                className="flex gap-4 animate-scroll-left"
                style={{ width: "max-content" }}
              >
                {displayPhotos.map((photo, i) => (
                  <div
                    key={`${photo.src}-${i}`}
                    className="relative shrink-0 w-64 h-80 overflow-hidden"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="256px"
                      className="object-cover transition-transform duration-500 ease-out group-hover/gallery:scale-[1.02]"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Caption — appears on gallery hover */}
            <p className="mt-4 text-center font-sans text-xs text-gray-400 tracking-widest uppercase opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-300">
              Mathematics Teacher · 2015 — 2023
            </p>
          </div>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto px-8">
          <div className="border border-dashed border-gray-200 rounded-none h-64 flex items-center justify-center">
            <p className="font-sans text-xs text-gray-300 tracking-widest uppercase">
              Add photos to /public/photos/ to populate this gallery
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
