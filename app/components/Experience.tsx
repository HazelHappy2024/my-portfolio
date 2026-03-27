import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";

const experiences = [
  {
    company: "Applied Research Lab",
    role: "Software Engineer Intern",
    period: "2024",
    tech: "Java · Spring Boot · Kafka · Redis · Elasticsearch · Kubernetes",
    highlights: [
      "Built distributed e-commerce backend systems handling high-throughput workloads",
      "Migrated task queue to Redis ZSet priority structure, improving scheduling fairness",
      "Optimized Elasticsearch queries, achieving ~70% reduction in p50 latency",
    ],
  },
  {
    company: "Phairy",
    role: "Software Engineer Intern",
    period: "2024",
    tech: "Android · On-device ML · DJI SDK",
    highlights: [
      "Developed Android application with on-device machine learning capabilities",
      "Integrated DJI drone SDK for autonomous aerial data collection",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <FadeIn>
        <SectionLabel label="Experience" />
        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <div key={exp.company} className="group relative">
              {/* Left border that scales in on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-black scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-top" />

              {/* Content shifts right on hover */}
              <div className="py-10 grid md:grid-cols-3 gap-6 md:gap-12 transition-transform duration-200 group-hover:translate-x-3">
                {/* Left: company + meta */}
                <div>
                  <p className="font-serif text-lg font-medium text-black">
                    {exp.company}
                  </p>
                  <p className="font-sans text-sm text-gray-600 mt-1">
                    {exp.role}
                  </p>
                  <p className="font-sans text-xs text-gray-400 mt-1">
                    {exp.period}
                  </p>
                  <p className="font-sans text-xs text-gray-400 mt-3 leading-relaxed">
                    {exp.tech}
                  </p>
                </div>

                {/* Right: highlights */}
                <div className="md:col-span-2">
                  <ul className="space-y-2">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="font-sans text-sm text-gray-700 leading-relaxed flex gap-3"
                      >
                        <span className="text-gray-300 select-none mt-0.5">—</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {i < experiences.length - 1 && (
                <div className="border-t border-gray-100" />
              )}
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
