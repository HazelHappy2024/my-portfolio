import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <FadeIn>
        <SectionLabel label="About" />
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Left: narrative */}
          <div className="space-y-5">
            <p className="font-sans text-sm leading-relaxed text-gray-700">
              I&apos;m a software engineer specializing in backend systems and
              distributed architecture, currently pursuing my MS in Computer
              Science at Northeastern University&apos;s Silicon Valley campus.
            </p>
            <p className="font-sans text-sm leading-relaxed text-gray-700">
              Before engineering, I spent eight years as a mathematics teacher.
              That experience fundamentally shaped how I approach complex
              problems — breaking them down, finding elegant structure, and
              communicating clearly.
            </p>
            <p className="font-sans text-sm leading-relaxed text-gray-700">
              I&apos;m drawn to the intersection of high-performance systems and
              applied AI — building infrastructure that scales and products that
              reason.
            </p>
          </div>

          {/* Right: education details */}
          <div className="space-y-6">
            <div>
              <p className="font-sans text-xs tracking-widest uppercase font-light text-gray-400 mb-3">
                Education
              </p>
              <p className="font-serif text-base font-medium text-black">
                Northeastern University
              </p>
              <p className="font-sans text-sm text-gray-600 mt-1">
                MS Computer Science
              </p>
              <p className="font-sans text-sm text-gray-400">
                Silicon Valley Campus · GPA 3.9
              </p>
              <p className="font-sans text-sm text-gray-400">May 2026</p>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <p className="font-sans text-xs tracking-widest uppercase font-light text-gray-400 mb-3">
                Focus Areas
              </p>
              <ul className="space-y-1">
                {[
                  "Distributed Systems",
                  "Backend Engineering",
                  "AI / Machine Learning",
                  "Cloud Infrastructure",
                ].map((area) => (
                  <li key={area} className="font-sans text-sm text-gray-600">
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
