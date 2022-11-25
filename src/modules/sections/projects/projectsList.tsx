import { ReactNode, useEffect, useRef } from "react";
import { WINDOW_CONTENT_DELAY } from "@constants";

interface Props {
  children: ReactNode;
}

export default function ProjectsList({ children }: Props) {
  const listRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            observer.unobserve(e.target);
            const el = e.target as HTMLElement;
            el.classList.add("show");
            console.log(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    const timeout = setTimeout(() => {
      if (!listRef.current) return;

      const slot = listRef.current.children[0];
      slot.childNodes.forEach((node) => {
        if (node.nodeName === "LI") {
          observer.observe(node as HTMLElement);
        }
      });
    }, WINDOW_CONTENT_DELAY * 0.75);

    return () => {
      if (timeout != null) clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  return (
    <ul
      className="w-full grid content-start items-start gap-8 max-w-[500px] sm:max-w-5xl"
      ref={listRef}
    >
      {children}
    </ul>
  );
}
