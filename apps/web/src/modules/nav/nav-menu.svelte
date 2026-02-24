<script lang="ts">
  import Button, { BtnSize } from "$common/button.svelte";
  import { onMount } from "svelte";

  interface IOpt {
    label: string;
    href: string;
  }

  const OPTIONS: IOpt[] = [
    {
      label: "About me",
      href: "/",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Resume",
      href: "/cv.pdf",
    },
    {
      label: "Repo",
      href: "https://github.com/yet3",
    },
  ];

  let isOpen = $state(false);
  let menuEl!: HTMLElement;

  onMount(() => {
    const handleMouseDown = (e: MouseEvent) => {
      if (e.target instanceof Node && !menuEl.contains(e.target)) {
        isOpen = false;
      }
    };

    window.addEventListener("pointerdown", handleMouseDown);
    return () => {
      window.removeEventListener("pointerdown", handleMouseDown);
    };
  });
</script>

<nav bind:this={menuEl}>
  <Button size={BtnSize.Sm} class="sm:hidden" onClick={() => (isOpen = !isOpen)}
    >MENU</Button
  >

  <ul
    class={{
      "grid items-center gap-4 max-sm:justify-center sm:gap-8": true,
      "grid-flow-row sm:grid-flow-col-dense": true,
      "max-sm:(grid bg-base clip-ribbon-0-0-45 border-primary ribbon-border-br-1 ribbon-border-primary py-2) absolute top-full right-1 w-48 border":
        isOpen,
      "max-sm:hidden": !isOpen,
    }}
  >
    {#each OPTIONS as el}
      {@const isExternal = el.href.startsWith("http")}
      <li>
        <a
          href={el.href}
          onclick={() => (isOpen = false)}
          rel="noreferrer noopener"
          target={isExternal ? "_blank" : undefined}
        >
          <span class="text-xs text-gray-600">href:</span>
          {el.label}
        </a>
      </li>
    {/each}
  </ul>
</nav>
