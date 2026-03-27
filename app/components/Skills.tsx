import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";

const skillGroups = [
  {
    category: "Languages",
    skills: ["Java", "Python", "JavaScript / TypeScript", "SQL"],
  },
  {
    category: "Backend",
    skills: ["Spring Boot", "Django", "Node.js", "Next.js"],
  },
  {
    category: "Distributed Systems",
    skills: ["Kafka", "Redis", "Elasticsearch", "Kubernetes"],
  },
  {
    category: "AI / ML",
    skills: ["RAG", "LLM Fine-tuning", "LangChain", "OpenAI API"],
  },
  {
    category: "Database",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Cloud & Tools",
    skills: ["GCP", "AWS", "Docker", "Git", "Linux"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <FadeIn>
        <SectionLabel label="Skills" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-0">
          {skillGroups.map((group, i) => {
            const isLastRow =
              i >= skillGroups.length - (skillGroups.length % 3 || 3);
            const col = i % 3;
            return (
              <div
                key={group.category}
                className={[
                  "py-8 pr-8",
                  !isLastRow ? "border-b border-gray-100" : "",
                  col > 0 ? "md:pl-8 md:border-l md:border-gray-100" : "",
                ].join(" ")}
              >
                <p className="font-serif text-sm font-semibold text-black mb-3">
                  {group.category}
                </p>
                <ul className="space-y-1.5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="font-sans text-sm font-light text-gray-600"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </FadeIn>
    </section>
  );
}
