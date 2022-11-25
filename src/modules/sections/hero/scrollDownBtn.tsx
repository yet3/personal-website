import clsx from "clsx";
import { useEffect, useState } from "react";
import { WINDOW_CONTENT_DELAY } from "@constants";

const Y_M = 0.2;
const O_M = 0.0022;

export default function ScrollDownBtn() {
  const [offsetY, setOffsetY] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);

  useEffect(() => {
    const el = document.getElementById("app-window-scrollable");
    if (!el) return;

    const handleScroll = () => {
      setHasMoved(true);
      if (el.scrollTop * O_M <= 1) {
        setOffsetY(el.scrollTop);
      }
    };

    el.addEventListener("scroll", handleScroll);
    return () => {
      el.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      href="#projects"
      className={clsx(
        "text-gray font-light tracking-wide text-sm mob-l:text-base",
        !hasMoved && "motion-safe:opacity-0 motion-reduce:opacity-1 motion-safe:animate-fade-in-bottom-m duration-400 fill-mode-forwards ease-base"
      )}
      style={
        hasMoved
          ? {
              transform: `translateY(-${offsetY * Y_M}px)`,
              opacity: Math.max(0, 1 - offsetY * O_M),
              willChange: "transform, opacity",
            }
          : {
              animationDelay: `${WINDOW_CONTENT_DELAY + 300}ms`,
            }
      }
    >
      {"<"}SCROLL DOWN{">"}
    </a>
  );
}
