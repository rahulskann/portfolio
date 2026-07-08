import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-line bg-panel p-5 sm:p-6 hover:border-amber/60 transition-colors">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] tracking-widest text-cyan">{project.tag}</span>
        {project.status && (
          <span className="text-[10px] tracking-widest text-dim border border-line px-2 py-0.5">
            {project.status}
          </span>
        )}
      </div>
      <h3 className="text-ink text-base sm:text-lg font-bold mb-2">{project.title}</h3>
      <p className="text-dim text-sm mb-4 leading-6">{project.description}</p>
      <ul className="space-y-1.5 mb-4">
        {project.bullets.map((b, i) => (
          <li key={i} className="text-sm text-ink/90 flex gap-2">
            <span className="text-amber select-none">›</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-line">
        {project.stack.map((s) => (
          <span
            key={s}
            className="text-[11px] text-dim border border-line px-2 py-0.5 bg-panel2"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
