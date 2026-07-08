import Nav from "@/components/Nav";
import ProjectCard from "@/components/ProjectCard";
import SiteShell from "@/components/SiteShell";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { skillGroups, coursework } from "@/data/skills";

export default function Home() {
  return (
    <SiteShell>
      <div id="top">
        <Nav />

        {/* HERO — neofetch-style system readout */}
        <section className="mx-auto max-w-5xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="text-xs sm:text-sm text-dim mb-6">
            $ whoami<span className="crt-cursor animate-blink" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-ink mb-4">
            {site.name}
          </h1>
          <p className="text-cyan text-sm sm:text-base mb-8">{site.role}</p>

          <div className="border border-line bg-panel max-w-md text-xs sm:text-sm">
            {[
              ["STATUS", site.status],
              ["BASE", site.location],
              ["FOCUS", "embedded + full-stack"],
              ["EDU", "B.S. Computer Science, Oregon State"],
            ].map(([k, v], i) => (
              <div
                key={k}
                className={`flex justify-between px-4 py-2.5 ${
                  i !== 0 ? "border-t border-line" : ""
                }`}
              >
                <span className="text-dim tracking-wide">{k}</span>
                <span className="text-ink">{v}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex gap-4 text-sm">
            <a
              href="#projects"
              className="border border-amber text-amber px-4 py-2 hover:bg-amber hover:text-bg transition-colors"
            >
              view projects
            </a>
            <a
              href={`mailto:${site.email}`}
              className="border border-line text-dim px-4 py-2 hover:border-cyan hover:text-cyan transition-colors"
            >
              get in touch
            </a>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-5xl px-6 py-16 border-t border-line">
          <div className="text-xs text-dim mb-4"># about.md</div>
          <p className="text-ink/90 leading-7 max-w-2xl text-sm sm:text-base">
            Computer Science senior at Oregon State University with a focus on software
            engineering and embedded systems. I build end-to-end&nbsp;— from AI-driven
            healthcare prototypes down to firmware on a bare Arduino Uno. Comfortable moving
            between full-stack development, real-time signal processing, and AI-assisted
            workflows, and I like projects that touch both the code and the copper.
          </p>

          <div className="mt-10 text-xs text-dim mb-4"># coursework.md</div>
          <div className="grid sm:grid-cols-3 gap-6">
            {coursework.map((group) => (
              <div key={group.label}>
                <div className="text-[11px] tracking-widest text-cyan mb-2">{group.label}</div>
                <ul className="space-y-1">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-dim">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mx-auto max-w-5xl px-6 py-16 border-t border-line">
          <div className="text-xs text-dim mb-2">$ ls ./projects</div>
          <h2 className="text-xl sm:text-2xl font-bold text-ink mb-8">Projects</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mx-auto max-w-5xl px-6 py-16 border-t border-line">
          <div className="text-xs text-dim mb-2">$ cat ./skills.pinout</div>
          <h2 className="text-xl sm:text-2xl font-bold text-ink mb-8">Skills</h2>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
            {skillGroups.map((group) => (
              <div key={group.label} className="flex gap-4 items-start border-b border-line pb-4">
                <span className="text-[11px] tracking-widest text-amber w-28 shrink-0 pt-1">
                  {group.label}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs text-ink/90 border border-line px-2 py-1 bg-panel"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LEADERSHIP */}
        <section className="mx-auto max-w-5xl px-6 py-16 border-t border-line">
          <div className="text-xs text-dim mb-2">$ cat ./leadership.log</div>
          <h2 className="text-xl sm:text-2xl font-bold text-ink mb-6">Leadership</h2>
          <div className="border-l-2 border-line pl-5">
            <div className="text-ink font-bold text-sm">
              Officer — OSU Hackathon Club
            </div>
            <div className="text-dim text-xs mb-2">On-campus Representative · Lead Officer · Treasurer</div>
            <p className="text-sm text-ink/80 leading-6">
              Helped coordinate multiple hackathons, fostering innovation and collaboration
              among students.
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="mx-auto max-w-5xl px-6 py-20 border-t border-line"
        >
          <div className="text-xs text-dim mb-2">$ ./contact --init</div>
          <h2 className="text-xl sm:text-2xl font-bold text-ink mb-6">Contact</h2>
          <p className="text-dim text-sm mb-6 max-w-md">
            Open to embedded systems and software engineering roles. Reach out directly:
          </p>
          <a
            href={`mailto:${site.email}`}
            className="inline-block text-amber text-sm sm:text-base border border-amber px-5 py-3 hover:bg-amber hover:text-bg transition-colors"
          >
            {site.handle}@kannan:~$ mail {site.email}
          </a>
        </section>

        <footer className="mx-auto max-w-5xl px-6 py-8 border-t border-line text-xs text-dim flex justify-between">
          <span>{site.location}</span>
          <span>
            uptime: since {new Date().getFullYear()}
            <span className="crt-cursor animate-blink" />
          </span>
        </footer>
      </div>
    </SiteShell>
  );
}
