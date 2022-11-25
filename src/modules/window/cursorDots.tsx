import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function CursorDots() {
  const ref = useRef<HTMLDivElement | null>(null);
  const pos = useRef({
    x: -99999,
    y: -99999,
    scrollY: 0,
  });

  const [, setRerender] = useState({});
  const rerender = () => setRerender({});

  useEffect(() => {
    const scrollEl = document.getElementById("app-window-scrollable");

    if (!ref.current || !scrollEl) {
      console.error("CursorDots error", ref.current, "scrollEl", scrollEl);
      return;
    }

    const handleMouseMove = (e: globalThis.MouseEvent) => {
      if (window.innerWidth < 1000) {
        return;
      }

      const scrollRect = scrollEl.getBoundingClientRect();

      const scrollY = Math.floor(scrollEl.scrollTop / 50) * 50;
      const scrollDiffY = scrollEl.scrollTop - scrollY;
      let x = e.x - scrollRect.x - 75;
      let y = e.y - scrollRect.y - 75 + scrollDiffY;
      x = Math.floor(x / 50) * 50;
      y = Math.floor(y / 50) * 50;

      if (
        x !== pos.current.x ||
        y !== pos.current.y ||
        scrollY !== pos.current.scrollY
      ) {
        pos.current = {
          x,
          y,
          scrollY,
        };
        rerender();
      }
    };

    const handleScroll = () => {
      if (window.innerWidth < 1000) {
        return;
      }

      let scrollY = Math.floor(scrollEl.scrollTop / 50) * 50;
      if (pos.current.scrollY !== scrollY) {
        pos.current.scrollY = scrollY;
        rerender();
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    scrollEl.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      scrollEl.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      id="cursor-dots"
      className="absolute flex items-center top-0 left-0 pointer-events-none -z-10"
      style={{
        transform: `translate(${pos.current.x}px, ${
          pos.current.y + pos.current.scrollY
        }px)`,
        /* willChange: 'transform', */
        /* transition: 'transform 300ms cubic-bezier(.34,.94,.53,1.15)' */
      }}
    >
      <div className="dots-x" />
      <div className="dots-y" />
      <div className="dots-x" />
    </div>
  );
}
