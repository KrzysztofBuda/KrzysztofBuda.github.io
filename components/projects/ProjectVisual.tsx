type ProjectVisualProps = {
  title: string;
  placeholder: string;
  index: string;
};

export default function ProjectVisual({
  title,
  placeholder,
  index,
}: ProjectVisualProps) {
  return (
    <div className="relative h-[230px] overflow-hidden border-b border-white/10 bg-[#08080b] sm:h-[280px] lg:h-[320px]">
      {/* GRID */}

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* GLOW */}

      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[70px] sm:h-56 sm:w-56 sm:blur-[80px]" />

      {/* PROJECT NUMBER */}

      <div className="absolute left-4 top-4 font-mono text-[10px] text-zinc-700 sm:left-5 sm:top-5 sm:text-xs">
        {index}
      </div>

      {/* MOCK WINDOW */}

      <div className="absolute left-1/2 top-1/2 w-[84%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-white/10 bg-[#0d0d11]/95 shadow-2xl sm:w-[78%]">
        <div className="flex items-center justify-between border-b border-white/10 px-3 py-2.5 sm:px-4 sm:py-3">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-400/70 sm:h-2.5 sm:w-2.5" />
            <span className="h-2 w-2 rounded-full bg-yellow-400/70 sm:h-2.5 sm:w-2.5" />
            <span className="h-2 w-2 rounded-full bg-green-400/70 sm:h-2.5 sm:w-2.5" />
          </div>

          <span className="font-mono text-[9px] text-zinc-700 sm:text-[10px]">
            project.preview
          </span>
        </div>

        <div className="flex min-h-[120px] flex-col items-center justify-center px-4 text-center sm:min-h-[150px] sm:px-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet-400/70 sm:text-xs sm:tracking-[0.25em]">
            {placeholder}
          </div>

          <div className="mt-3 text-base font-medium text-zinc-300 sm:text-lg">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}