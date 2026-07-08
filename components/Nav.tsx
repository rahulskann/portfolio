"use client";

import { site } from "@/data/site";

const SECTIONS = [
  { id: "about", label: "ABOUT" },
  { id: "projects", label: "PROJECTS" },
  { id: "skills", label: "SKILLS" },
  { id: "contact", label: "CONTACT" },
];

export default function Nav() {
  const labUrl = site.links.lab;

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto max-w-5xl px-6 py-3 flex items-center justify-between text-xs sm:text-sm">
        <a href="#top" className="text-ink hover:text-amber transition-colors">
          {site.handle}<span className="text-amber">.sys</span>
        </a>
        <nav className="flex items-center gap-4 sm:gap-6 text-dim">
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="hover:text-amber transition-colors">
              [{s.label}]
            </a>
          ))}
          {labUrl ? (
            <a
              href={labUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan transition-colors"
            >
              [LAB]
            </a>
          ) : (
            <span
              className="text-line cursor-default"
              title="Coming soon"
            >
              [LAB:OFFLINE]
            </span>
          )}
        </nav>
      </div>
    </header>
  );
}
