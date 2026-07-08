"use client";

import { useState } from "react";
import BootSequence from "./BootSequence";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [booted, setBooted] = useState(false);

  return (
    <>
      {!booted && <BootSequence onDone={() => setBooted(true)} />}
      <div
        className={`transition-opacity duration-700 ${
          booted ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
}
