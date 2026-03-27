import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";

const projects = [
  {
    title: "AroundU",
    description:
      "Local lifestyle platform combining discovery and flash sales. Engineered a high-concurrency flash sale system using Redis Lua scripts to prevent overselling, multi-tier caching, and Kafka for async order processing.",
    tech: ["Java", "Spring Boot", "Redis", "Kafka", "MySQL"],
  },
  {
    title: "SQL Study Room",
    description:
      "AI-powered SQL learning platform that converts natural language to SQL queries. Provides interactive exercises with real-time feedback powered by OpenAI and deployed on GCP.",
    tech: ["Django", "React", "MySQL", "OpenAI API", "GCP"],
  },
  {
    title: "Banking Q&A RAG System",
    description:
      "Retrieval-augmented generation system for financial Q&A. Fine-tuned Baichuan2-7B with LoRA for domain adaptation, using FAISS for efficient vector similarity search.",
    tech: ["Python", "Baichuan2-7B", "LoRA", "FAISS", "RAG"],
  },
  {
    title: "Voice Email Assistant",
    description:
      "Voice-driven email assistant with hybrid RAG combining dense and sparse retrieval. Real-time transcription via Deepgram, orchestrated with LiveKit for low-latency audio streaming.",
    tech: ["Next.js", "LiveKit", "Deepgram", "OpenAI", "Nylas"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <FadeIn>
        <SectionLabel label="Projects" />
        <div className="grid md:grid-cols-2 gap-0">
          {projects.map((project, i) => {
            const isLastRow =
              i >= projects.length - (projects.length % 2 === 0 ? 2 : 1);
            const isRightCol = i % 2 === 1;
            return (
              <div
                key={project.title}
                className={[
                  "py-10 group cursor-default transition-transform duration-200 ease-out hover:-translate-y-1",
                  !isLastRow ? "border-b border-gray-100" : "",
                  isRightCol ? "md:pl-12 md:border-l md:border-gray-100" : "md:pr-12",
                ].join(" ")}
              >
                {/* Title + arrow */}
                <div className="mb-3 flex items-center gap-2">
                  <h3 className="font-serif text-xl font-medium text-black relative inline-block">
                    {project.title}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-black group-hover:w-full transition-all duration-300" />
                  </h3>
                  <span className="font-sans text-base text-black opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    →
                  </span>
                </div>

                <p className="font-sans text-sm text-gray-600 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-sans text-xs text-gray-400 tracking-wide"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </FadeIn>
    </section>
  );
}
