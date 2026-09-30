"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import type { Category, Project } from "@/data/projects";

type Filter = "all" | Category;

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "all" },
  { key: "software", label: "software" },
  { key: "hardware", label: "hardware" },
  { key: "hybrid", label: "hybrid" },
];

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  const countFor = (key: Filter) =>
    key === "all" ? projects.length : projects.filter((p) => p.category === key).length;

  const visible = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <div
        role="group"
        aria-label="Filter projects by category"
        className="flex flex-wrap items-center gap-2 mb-8 text-xs sm:text-sm"
      >
        <span className="text-dim mr-1">--filter</span>
        {FILTERS.map(({ key, label }) => {
          const active = filter === key;
          return (
            <button
              key={key}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(key)}
              className={`border px-3 py-1.5 transition-colors ${
                active
                  ? "border-amber text-amber"
                  : "border-line text-dim hover:border-cyan hover:text-cyan"
              }`}
            >
              {label} ({countFor(key)})
            </button>
          );
        })}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {visible.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </>
  );
}
