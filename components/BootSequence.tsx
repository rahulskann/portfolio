"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

const LINES = [
  `$ ssh ${site.handle}@portfolio --port 2026`,
  `connecting... baud 115200`,
  `handshake OK`,
  `loading profile ${site.name.toLowerCase().replace(" ", "_")}.json`,
  `mounting sections: about, projects, skills, contact`,
  `status: ${site.status.toLowerCase()}`,
  `> welcome`,
];

export default function BootSequence({ onDone }: { onDone: () => void }) {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = sessionStorage.getItem("bootSeen");
    if (reduced || seen) {
      setSkip(true);
      onDone();
      return;
    }
    sessionStorage.setItem("bootSeen", "1");

    let cancelled = false;
    (async () => {
      for (let i = 0; i < LINES.length; i++) {
        if (cancelled) return;
        await new Promise((r) => setTimeout(r, i === 0 ? 150 : 220));
        setVisibleLines((prev) => [...prev, LINES[i]]);
      }
      await new Promise((r) => setTimeout(r, 350));
      if (!cancelled) onDone();
    })();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onDone();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (skip) return null;

  return (
    <div className="fixed inset-0 z-50 bg-bg flex items-center justify-center px-6">
      <button
        onClick={onDone}
        className="absolute top-6 right-6 text-xs text-dim border border-line px-3 py-1.5 hover:text-amber hover:border-amber transition-colors"
      >
        skip [esc]
      </button>
      <div className="w-full max-w-xl text-sm sm:text-base leading-7">
        {visibleLines.map((line, i) => (
          <div key={i} className={line.startsWith(">") ? "text-amber" : "text-dim"}>
            {line}
          </div>
        ))}
        <span className="crt-cursor animate-blink" />
      </div>
    </div>
  );
}
