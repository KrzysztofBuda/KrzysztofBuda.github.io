"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import {
  useState,
  type MouseEvent,
} from "react";

import { useLanguage } from "@/components/language/LanguageProvider";

export default function Navbar() {
  const {
    language,
    setLanguage,
    t,
  } = useLanguage();

  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  const navigation = [
    {
      label: t.navbar.projects,
      section: "projects",
    },
    {
      label: t.navbar.skills,
      section: "skills",
    },
    {
      label: t.navbar.about,
      section: "about",
    },
    {
      label: t.navbar.contact,
      section: "contact",
    },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSectionClick = (
    event: MouseEvent<HTMLAnchorElement>,
    section: string,
  ) => {
    /*
     * Na podstronie projektu nie przejmujemy kliknięcia.
     * Przeglądarka przejdzie normalnie do:
     *
     * /#projects
     * /#skills
     * itd.
     */
    if (pathname !== "/") {
      closeMenu();
      return;
    }

    /*
     * Na stronie głównej zawsze przejmujemy
     * kliknięcie, niezależnie od obecnego hasha.
     */
    event.preventDefault();

    closeMenu();

    const target =
      document.getElementById(section);

    if (!target) {
      return;
    }

    /*
     * Najpierw aktualizujemy URL.
     * Nie polegamy jednak na hash navigation
     * do wykonania scrolla.
     */
    window.history.replaceState(
      null,
      "",
      `#${section}`,
    );

    /*
     * Scroll wykonujemy sami za każdym razem.
     */
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto mt-4 max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between gap-3">
          {/* LOGO */}

          <Link
            href="/"
            onClick={closeMenu}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/40 font-mono text-sm font-semibold text-white backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-white/[0.06]"
            aria-label="Strona główna"
          >
            KB.
          </Link>

          {/* DESKTOP NAVIGATION */}

          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-black/40 p-1.5 backdrop-blur-xl md:flex">
            {navigation.map((item) => (
              <a
                key={item.section}
                href={`/#${item.section}`}
                onClick={(event) =>
                  handleSectionClick(
                    event,
                    item.section,
                  )
                }
                className="rounded-full px-4 py-2 text-sm text-zinc-400 transition-colors hover:bg-white/[0.06] hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* RIGHT SIDE */}

          <div className="flex items-center gap-2">
            {/* SOCIALS */}

            <div className="hidden items-center gap-1 sm:flex">
              <a
                href="https://github.com/krzysztofbuda"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-zinc-500 backdrop-blur-xl transition-colors hover:border-white/20 hover:text-white"
              >
                <GithubIcon />
              </a>

              <a
                href="https://www.linkedin.com/in/krzysztofbuda/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-zinc-500 backdrop-blur-xl transition-colors hover:border-white/20 hover:text-white"
              >
                <LinkedinIcon />
              </a>
            </div>

            {/* LANGUAGE */}

            <div className="flex items-center rounded-full border border-white/10 bg-black/40 p-1 backdrop-blur-xl">
              <button
                type="button"
                onClick={() =>
                  setLanguage("pl")
                }
                aria-pressed={
                  language === "pl"
                }
                className={`rounded-full px-2.5 py-1.5 font-mono text-[10px] transition-colors ${
                  language === "pl"
                    ? "bg-white text-black"
                    : "text-zinc-500 hover:text-white"
                }`}
              >
                PL
              </button>

              <button
                type="button"
                onClick={() =>
                  setLanguage("en")
                }
                aria-pressed={
                  language === "en"
                }
                className={`rounded-full px-2.5 py-1.5 font-mono text-[10px] transition-colors ${
                  language === "en"
                    ? "bg-white text-black"
                    : "text-zinc-500 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            {/* MOBILE MENU BUTTON */}

            <button
              type="button"
              onClick={() =>
                setIsMenuOpen(
                  (current) => !current,
                )
              }
              aria-label="Menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-white/[0.06] md:hidden"
            >
              <MenuIcon
                open={isMenuOpen}
              />
            </button>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              id="mobile-navigation"
              initial={{
                opacity: 0,
                y: -10,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -10,
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
              }}
              className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-[#09090b]/95 p-2 shadow-2xl backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col">
                {navigation.map(
                  (item) => (
                    <a
                      key={item.section}
                      href={`/#${item.section}`}
                      onClick={(event) =>
                        handleSectionClick(
                          event,
                          item.section,
                        )
                      }
                      className="rounded-xl px-4 py-3 text-sm text-zinc-400 transition-colors hover:bg-white/[0.05] hover:text-white"
                    >
                      {item.label}
                    </a>
                  ),
                )}
              </div>

              {/* MOBILE SOCIALS */}

              <div className="mt-2 grid grid-cols-2 gap-2 border-t border-white/10 pt-2">
                <a
                  href="https://github.com/krzysztofbuda"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-zinc-500 transition-colors hover:bg-white/[0.05] hover:text-white"
                >
                  <GithubIcon />

                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/krzysztofbuda/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-zinc-500 transition-colors hover:bg-white/[0.05] hover:text-white"
                >
                  <LinkedinIcon />

                  LinkedIn
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

function MenuIcon({
  open,
}: {
  open: boolean;
}) {
  return (
    <div className="relative h-4 w-5">
      <span
        className={`absolute left-0 top-0 h-px w-5 bg-current transition-all duration-200 ${
          open
            ? "translate-y-[7px] rotate-45"
            : ""
        }`}
      />

      <span
        className={`absolute left-0 top-[7px] h-px w-5 bg-current transition-all duration-200 ${
          open
            ? "opacity-0"
            : "opacity-100"
        }`}
      />

      <span
        className={`absolute left-0 top-[14px] h-px w-5 bg-current transition-all duration-200 ${
          open
            ? "-translate-y-[7px] -rotate-45"
            : ""
        }`}
      />
    </div>
  );
}

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="17"
      height="17"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .7a11.3 11.3 0 0 0-3.57 22c.57.1.78-.25.78-.55v-2.16c-3.18.69-3.85-1.35-3.85-1.35-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.54-.29-5.21-1.27-5.21-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.03 0 0 .96-.31 3.11 1.17A10.8 10.8 0 0 1 12 5.9c.96 0 1.92.13 2.82.38 2.15-1.48 3.11-1.17 3.11-1.17.62 1.57.23 2.74.11 3.03.74.8 1.18 1.82 1.18 3.07 0 4.39-2.68 5.35-5.23 5.64.41.36.78 1.06.78 2.14v3.17c0 .31.2.66.79.55A11.3 11.3 0 0 0 12 .7Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="17"
      height="17"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5.34 3.5A2.34 2.34 0 1 1 .66 3.5a2.34 2.34 0 0 1 4.68 0ZM.96 7.36h4.76V22H.96V7.36ZM8.56 7.36h4.56v2h.07c.63-1.2 2.19-2.47 4.5-2.47 4.81 0 5.7 3.17 5.7 7.29V22h-4.75v-6.94c0-1.66-.03-3.79-2.31-3.79-2.31 0-2.67 1.81-2.67 3.67V22H8.56V7.36Z" />
    </svg>
  );
}