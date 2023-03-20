import { createSignal, For, JSX, onMount } from "solid-js";
import { ProjectSkill, SkillBtn } from "./skillBtn";
import "./style.scss";

interface Props {
  name: string;
  content: string;
  skills: ProjectSkill[];
}

export const ProjectWindow = (props: Props) => {
  const [isExpanded, setExpanded] = createSignal(true);
  const [isMaximized, setMaximized] = createSignal(false);

  let textRef: HTMLParagraphElement | null = null;
  onMount(() => {
    if (!textRef) return;

    const sel = window.getSelection();
    if (!sel) return;

    const range = new Range();
    const lines: string[] = [];
    const text = textRef.innerText;
    range.setStart(textRef.childNodes[0], 0);

    let prevHeight = -1;
    let rangeEnd = 0;
    for (let i = 0; i < text.length; i++) {
      const word = text[i];
      rangeEnd += word.length;
      range.setEnd(textRef.childNodes[0], rangeEnd);

      const { height } = range.getBoundingClientRect();
      if (height > prevHeight) {
        prevHeight = height;
        lines.push(word);
      } else lines[lines.length - 1] += word;
    }

    const nodes: JSX.Element[] = lines.map((line, i) => (
      <div class="overflow-hidden">
        <div
          class="project-content-line opacity-0"
          style={{
            "--add-delay": i * 100 + "ms",
          }}
        >
          {line}
        </div>
      </div>
    ));

    textRef.replaceChildren(...(nodes as Node[]));
  });

  return (
    <article
      class="project-window opacity-0 w-[90vw] h-[475px] bg-white border-2 overflow-hidden rounded-lg flex flex-col max-w-[875px]"
      style={{
        "transform-origin": "top",
      }}
    >
      <div class="h-10 overflow-hidden">
        <header class="bg-pinkish-brown h-full flex gap-2 items-center px-3 rounded-t-lg relative">
          <button class="w-3 h-3 bg-[#FE5F57] rounded-full" />
          <button
            class="w-3 h-3 bg-yellow-400 rounded-full"
            onClick={() => setExpanded(!isExpanded())}
          />
          <button
            class="w-3 h-3 bg-green-400 rounded-full"
            onClick={() => setMaximized(!isMaximized())}
          />
        </header>
      </div>

      <div class="p-4 pb-2 grid grid-rows-[1fr,auto] h-full">
        <div class="grid grid-cols-[400px,auto] gap-4 self-center">
          <div class="w-full">
            <div class="overflow-hidden">
              <picture>
                <source srcset={"src/assets/conoder.webp"} type="image/webp" />
                <img
                  class="project-img"
                  src={"src/assets/conoder.png"}
                  alt="like button"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>

          <div class="grid grid-rows-[auto,1fr,auto] gap-2">
            <h2 class="fluid-text-xl-2xl project-win-title text-pinkish-brown overflow-hidden flex items-end">
              <div class="fluid-text-lg-2xl text-accent">#</div>
              <div>{props.name}</div>
            </h2>
            <div
              ref={(r) => (textRef = r.childNodes[0] as HTMLParagraphElement)}
              class="project-content text-pinkish-brown opacity-0"
              innerHTML={props.content}
            />
          </div>
        </div>

        <ul class="project-skills flex gap-1 grid-flow-col overflow-y-hidden overflow-x-auto w-full">
          <For each={props.skills}>
            {(skill, i) => (
              <li
                style={{
                  "--add-delay": `${i() * 100}ms`,
                }}
              >
                <SkillBtn skill={skill} />
              </li>
            )}
          </For>
        </ul>
      </div>
    </article>
  );
};
