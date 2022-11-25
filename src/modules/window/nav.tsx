import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import "./styles.css";
import { HEADER_NAV_ITEM_IN_DURATION, WINDOW_CONTENT_DELAY } from "@constants";

const BTNS: Array<{ id: string; href: string; display: string }> = [
  { id: "index", href: "#index", display: "Index" },
  { id: "experience", href: "#experience", display: "Experience" },
  { id: "projects", href: "#projects", display: "Projects" },
  { id: "contact", href: "#contact", display: "Contact" },
];

export const NAV_BTNS = BTNS;
export const NAV_BTN_DELAY = 20;
export const AMT_OF_NAV_ITEMS = BTNS.length;

export default function Nav() {
  const [currentSection, setCurrentSection] = useState<string[]>(["index"]);
  const navRef = useRef<HTMLDivElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shoudHaveDelay, setShouldHaveDelay] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(
        (entry) => {
          const id = entry.target.id;
          setCurrentSection((p) => {
            const cloned = p.slice().filter((s) => s !== id);
            if (entry.isIntersecting) cloned.unshift(id);
            return cloned;
          });
        },
        { threshold: 0.25 }
      );
    });

    BTNS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const timeout = setTimeout(() => {
      setShouldHaveDelay(false);
    }, WINDOW_CONTENT_DELAY + HEADER_NAV_ITEM_IN_DURATION + AMT_OF_NAV_ITEMS * NAV_BTN_DELAY + 100);

    return () => {
      observer.disconnect();
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleMouseDown = (e: globalThis.MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    console.log("added");
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      console.log("removed");
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [isMenuOpen]);

  return (
    <div ref={navRef} className="relative flex items-center w-full h-full z-10">
      <button
        className="relative w-6 h-full aspect-square mob-l:hidden motion-safe:animate-fade-in-top-full motion-safe:opacity-0"
        style={{
          animationDelay: shoudHaveDelay ? WINDOW_CONTENT_DELAY + "ms" : "0ms",
          animationDuration: HEADER_NAV_ITEM_IN_DURATION + "ms",
        }}
        onClick={() => setIsMenuOpen((p) => !p)}
      >
        <div
          className={clsx(
            "absolute top-4 left-1/2 -translate-x-1/2 w-full h-[1px] bg-white"
          )}
        />
        <div
          className={clsx(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-white"
          )}
        />
        <div
          className={clsx(
            "absolute bottom-4 left-1/2 -translate-x-1/2 w-full h-[1px] bg-white"
          )}
        />
      </button>

      <nav
        className={clsx(
          isMenuOpen
            ? "motion-safe:animate-[header-nav-in_150ms_ease_forwards]"
            : "motion-safe:animate-[header-nav-out_100ms_ease_forwards]",
          "bg-dark grid w-full rounded-b-xl self-start",
          "mob-l:translate-y-0 mob-l:animate-none mob-l:grid mob-l:bg-none mob-l:rounded-none mob-l:grid-flow-col mob-l:gap-4 mob-l:items-center mob-l:justify-start mob-l:h-full"
        )}
      >
        {BTNS.map((e, i) => (
          <button
            key={e.id}
            style={
              !isMenuOpen
                ? {
                  animationTimingFunction: "ease",
                  animationDuration: `${HEADER_NAV_ITEM_IN_DURATION}ms`,
                  animationDelay: shoudHaveDelay
                    ? `${WINDOW_CONTENT_DELAY + i * NAV_BTN_DELAY}ms`
                    : i * NAV_BTN_DELAY + "ms",
                  animationFillMode: "forwards",
                }
                : { animationDelay: i * 50 + "ms" }
            }
            onClick={() => {
              const el = document.querySelector(e.href);
              if (el) el.scrollIntoView({ behavior: "smooth" });
              setIsMenuOpen(false);
            }}
            className={clsx(
              "text-base font-light",
              isMenuOpen &&
              "motion-safe:opacity-0 motion-safe:animate-[fade-in-top-s_300ms_ease_forwards]",
              "py-2 mob-l:py-0 mob-l:motion-safe:animate-fade-in-top-full mob-l:motion-safe:-translate-y-12",
              e.id === currentSection[0] ? "text-white" : "text-gray"
            )}
          >
            {e.display}
          </button>
        ))}
      </nav>
    </div>
  );
}
