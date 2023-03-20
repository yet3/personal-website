import { isMobile } from "@utils/isMobile.util";
import { children, JSX, onCleanup, onMount, ValidComponent } from "solid-js";
import { Dynamic } from "solid-js/web";

interface Props {
  tag?: ValidComponent;

  class?: string;
  style?: JSX.CSSProperties;

  children: JSX.Element;
}

export const AttractToMouse = (props: Props) => {
  let container: HTMLElement | null = null;
  let handleMouseMove: any;

  onMount(() => {
    if (!container) return;
    const els = container.childNodes;

    const defPoses = new Map<HTMLElement, DOMRect>();

    els.forEach((l) => {
      const el = l as HTMLElement;
      const rect = el.getBoundingClientRect();
      defPoses.set(el, rect);
    });

    handleMouseMove = (e: MouseEvent) => {
      if (isMobile()) {
        return;
      }

      els.forEach((l) => {
        const el = l as HTMLElement;
        const rect = defPoses.get(el);
        if (rect) {
          const d = 35;
          const cx = rect.x + rect.width / 2;
          const cy = rect.y + rect.height / 2;

          const dist = Math.sqrt(Math.pow(e.x - cx, 2) + Math.pow(e.y - cy, 2));
          let r = dist;
          r -= d;
          r /= -(d / 10);
          r = Math.min(dist, Math.max(0, r));

          const angle = Math.atan2(e.y - cy, e.x - cx);
          const y = Math.sin(angle) * r;
          const x = Math.cos(angle) * r;

          let scale = r;
          // scale /= 4;
          // scale = Math.min(1.1, Math.max(1, scale));
          // if (dist < 8) scale = 1.1;
          scale = 1;

          el.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;

          if (r === 0) {
            const rect = el.getBoundingClientRect();
            defPoses.set(el, rect);
          }
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
  });

  onCleanup(() => {
    if (handleMouseMove) {
      window.removeEventListener("mousemove", handleMouseMove);
    }
  });

  const c = children(() => props.children);
  return (
    <Dynamic
      component={props.tag ?? "div"}
      ref={(r: HTMLElement) => (container = r)}
      class={props.class}
      style={props.style}
    >
      {c}
    </Dynamic>
  );
};
