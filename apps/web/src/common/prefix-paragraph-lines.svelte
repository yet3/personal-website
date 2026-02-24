<script lang="ts" module>
  let observer: ResizeObserver | null = null;

  const observing = new Map<Element, () => void>();

  const observeSize = (el: HTMLElement, callback: () => void) => {
    observing.set(el, callback);

    if (observer == null) {
      observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const func = observing.get(entry.target);
          if (func) {
            func();
          }
        }
      });
    }

    observer.observe(el);

    return () => {
      observing.delete(el);
      if (observer) {
        observer.unobserve(el);
        if (observing.size === 0) {
          observer.disconnect();
        }
      }
    };
  };
</script>

<script lang="ts">
  interface Props {
    content: string;
    prefix: string;

    class?: string;
    lineClass?: string;
    prefixClass?: string;
    lineContentClass?: string;

    noEntryAnim?: boolean;
    delay?: string;
  }

  const {
    content,
    prefix,
    class: className,
    lineClass = "",
    prefixClass = "",
    lineContentClass = "",
    noEntryAnim = false,
    delay = '0ms',
  }: Props = $props();

  let el: HTMLDivElement | null = null;

  $effect(() => {
    if (!el) return;

    let lastWidth = 0;
    const handleSize = () => {
      if (!el) return;

      const words = content.split(" ");
      const containerWidth = el.clientWidth;
      if (containerWidth === lastWidth) {
        return;
      }
      lastWidth = containerWidth;

      const mesaEl = document.createElement("div");
      mesaEl.style =
        "position:fixed;top:-9999px;left:-9999px;opacity:0;pointer-events:none;white-space:pre;";

      const containerStyle = getComputedStyle(el);
      mesaEl.style.setProperty("width", `${containerWidth}px`);
      mesaEl.style.setProperty("font", containerStyle.font);

      mesaEl.textContent = prefix;
      document.body.append(mesaEl);

      mesaEl.innerHTML = `${prefix}${content}`;

      const r = new Range();
      r.setStart(mesaEl.childNodes[0], 0);
      r.setEnd(mesaEl.childNodes[0], prefix.length);

      const prefixWidth = r.getBoundingClientRect().width;

      const lines: string[] = [];

      let len = prefix.length;
      let startIdx = prefix.length;
      let prevW = 0;
      let canAddStr = true;
      for (const word of words) {
        canAddStr = true;

        r.setStart(mesaEl.childNodes[0], startIdx);
        len += word.length;
        r.setEnd(mesaEl.childNodes[0], len);
        if (prevW === 0) {
        }

        const textRect = r.getBoundingClientRect();

        if (textRect.width >= containerWidth - prefixWidth) {
          startIdx = len - (word.length + 1);
          r.setEnd(mesaEl.childNodes[0], startIdx);
          lines.push(r.toString().trim());
          prevW = textRect.width - prevW;
          canAddStr = false;
        } else {
          prevW = textRect.width;
        }
        len++;
      }
      if (canAddStr) {
        lines.push(r.toString().trim());
      }

      const p = document.createElement("p");
      p.style = "display:flex;flex-direction:column;";
      p.className = "anim";
      for (const line of lines) {
        if (line.length > 0) {
          p.innerHTML += `<span class="${lineClass}"><span class="prefix-comment ${prefixClass}">${prefix}</span><span class="${lineContentClass}">${line}</span></span>`;
        }
      }
      if (el.children[0]) {
        el.children[0].innerHTML = p.outerHTML;
      }
      p.remove();
      mesaEl.remove();
    };

    const cleanUp = observeSize(el, handleSize);
    handleSize();

    return () => {
      cleanUp();
    };
  });
</script>

<div
  bind:this={el}
  class={[className, "w-full"]}
  style="--delay: {delay}"
  data-line-class={lineClass}
  data-prefix-class={prefixClass}
  data-line-content-class={lineContentClass}
>
  <div class={[!noEntryAnim && "p-line-anim w-full"]}>
    <p class="flex flex-col">{content}</p>
  </div>
</div>

<style>
  @media (prefers-reduced-motion: no-preference) {
    .p-line-anim {
      animation: anim_p_in var(--duration_anim_p_in) var(--delay, 0s) ease 1
        forwards;
      opacity: 0;
      transform: scaleX(1);
      transform-origin: left center;
    }

    @anim-step step_in_1 {
      opacity: 0;
      transform: scaleX(0);
    }

    @anim-step step_in_2 {
      opacity: 1;
      transform: scaleX(0.4);
    }

    @anim-step step_in_3 {
      opacity: 0;
    }

    @anim-step step_in_4 {
      opacity: 0.4;
    }

    @anim-step step_in_5 {
      opacity: 0;
      transform: scaleX(1);
    }

    @anim-step step_in_6 {
      opacity: 1;
      transform: scaleX(1);
    }

    @timed-anim anim_p_in {
      step_in_1: 0s;
      step_in_2: 0.05s;
      step_in_3: 0.1s;
      step_in_4: 0.05s;
      step_in_5: 0.05s;
      step_in_6: 0.1s;
    }
  }
</style>
