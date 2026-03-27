"use client";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Teaching", href: "#teaching" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200"
      style={{ borderBottomWidth: "1px" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
        <a
          href="#"
          className="font-serif text-base font-medium tracking-tight text-black hover:opacity-70 transition-opacity"
        >
          Shurui Liu
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative font-sans text-xs tracking-widest uppercase font-light text-gray-500 hover:text-black transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-full h-px bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <ul className="flex md:hidden items-center gap-5 overflow-x-auto">
          {navLinks.map((link) => (
            <li key={link.href} className="shrink-0">
              <a
                href={link.href}
                className="font-sans text-xs tracking-widest uppercase font-light text-gray-500 hover:text-black transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
