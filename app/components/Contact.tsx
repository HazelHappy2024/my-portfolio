import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <FadeIn>
        <SectionLabel label="Contact" />
        <div className="max-w-lg space-y-8">
          <p className="font-serif text-2xl md:text-3xl font-medium text-black leading-snug">
            Let&apos;s build something together.
          </p>

          <div className="space-y-3">
            <div>
              <a
                href="mailto:liu.shur@northeastern.edu"
                className="font-sans text-sm text-black underline underline-offset-4 hover:opacity-50 transition-opacity"
              >
                liu.shur@northeastern.edu
              </a>
            </div>
            <div>
              <a
                href="https://github.com/shuruil"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-black underline underline-offset-4 hover:opacity-50 transition-opacity"
              >
                GitHub
              </a>
            </div>
            <div>
              <a
                href="https://linkedin.com/in/shuruil"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-black underline underline-offset-4 hover:opacity-50 transition-opacity"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <p className="font-sans text-xs tracking-widest uppercase font-light text-gray-400">
            Open to new grad SDE opportunities · Sunnyvale, CA
          </p>
        </div>
      </FadeIn>

      <div className="mt-24 pt-8 border-t border-gray-100">
        <p className="font-sans text-xs text-gray-300">
          Shurui Liu · {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
