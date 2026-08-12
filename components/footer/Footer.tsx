"use client";

import { useLanguage } from "@/components/language/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-zinc-700 sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:px-6 sm:py-8">
        <div className="font-mono">
          © {year} Krzysztof Buda
        </div>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono">
          <span>{t.footer.builtWith}</span>

          <span className="text-zinc-500">
            Next.js
          </span>

          <span className="text-violet-400">
            •
          </span>

          <span className="text-zinc-500">
            TypeScript
          </span>
        </div>
      </div>
    </footer>
  );
}