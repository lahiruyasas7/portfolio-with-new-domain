"use client";
import { useState } from "react";
import { projects, Project } from "@/data/projectsData";

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const [current, setCurrent] = useState(0);
  const total = project.images.length;
  const isReverse = index % 2 === 1;
  const num = String(index + 1).padStart(2, "0");

  const goTo = (n: number) => setCurrent((n + total) % total);

  return (
    <div
      className={`flex flex-col md:flex-row ${
        isReverse ? "md:flex-row-reverse" : "md:flex-row"
      } border border-[#1e293b] rounded-2xl overflow-hidden bg-[#0f0f1a] hover:border-[#2d2d4e] transition-colors duration-200`}
    >
      {/* Image panel */}
      <div className="relative w-full md:w-[46%] md:flex-shrink-0 bg-[#0d0d1a] overflow-hidden">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {project.images.map((img, idx) => (
              <div key={idx} className="w-full flex-shrink-0">
                <img
                  src={img}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  className="w-full h-52 sm:h-60 md:h-64 object-contain block"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Image count badge */}
        <span className="absolute top-2.5 right-2.5 text-[11px] text-slate-400 bg-black/70 px-2 py-0.5 rounded-full border border-[#1e293b]">
          {current + 1} / {total}
        </span>

        {/* Bottom overlay: dots + controls */}
        <div className="absolute bottom-0 left-0 right-0 px-3 py-2.5 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent">
          <div className="flex gap-2">
            {project.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  idx === current ? "bg-violet-500 scale-125" : "bg-slate-600"
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => goTo(current - 1)}
              className="w-8 h-8 md:w-6 md:h-6 rounded-full border border-slate-700 bg-black/80 text-slate-400 hover:text-white hover:bg-slate-800 flex items-center justify-center text-sm md:text-xs transition-colors"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={() => goTo(current + 1)}
              className="w-8 h-8 md:w-6 md:h-6 rounded-full border border-slate-700 bg-black/80 text-slate-400 hover:text-white hover:bg-slate-800 flex items-center justify-center text-sm md:text-xs transition-colors"
              aria-label="Next image"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      {/* Info panel */}
      <div className="flex-1 relative flex flex-col justify-center overflow-hidden px-5 py-6 sm:px-6 md:px-8 md:py-7">
        {/* Watermark number — hidden on small screens to avoid clutter */}
        <span
          className="hidden sm:block absolute bottom-[-10px] right-3 text-[56px] md:text-[72px] font-bold leading-none select-none pointer-events-none"
          style={{ color: "rgba(255,255,255,0.035)" }}
          aria-hidden="true"
        >
          {num}
        </span>

        {/* Project index on mobile — inline instead of watermark */}
        <span className="sm:hidden text-[11px] text-violet-500 font-medium tracking-widest uppercase mb-2">
          Project {num}
        </span>

        <h2 className="text-base sm:text-[17px] font-semibold text-slate-200 mb-2 sm:mb-2.5 leading-snug tracking-tight">
          {project.title}
        </h2>
        <p className="text-[13px] text-slate-500 leading-relaxed mb-4 line-clamp-3 sm:line-clamp-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech?.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2.5 py-0.5 rounded-full border border-[#1e293b] text-indigo-400 bg-indigo-950/20"
            >
              {t}
            </span>
          ))}
        </div>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start inline-flex items-center gap-1.5 text-[12px] px-3.5 py-2 md:py-1.5 rounded-lg border border-slate-700 text-slate-400 hover:border-violet-600 hover:text-violet-300 hover:bg-violet-950/20 transition-all duration-150"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        )}
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section className="w-full">
      <div className="grid gap-5 sm:gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
