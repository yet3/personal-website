<script lang="ts">
	import { vardelay } from "$utils/delays";
	import type { ClassValue } from "svelte/elements";
	import type { IDelay } from "$types/anims.types";

	interface IProps {
		class?: ClassValue;
		body: string;
		isVisible?: boolean;
		animDelay?: IDelay;
		hideDelay?: number;
	}
	const { class: className, body, isVisible = true, animDelay, hideDelay = 0 }: IProps = $props();
</script>

<div
	class={["md-body text-sm sm:text-base", className]}
	data-is-visible={isVisible}
	use:vardelay={["--delay", animDelay]}
	use:vardelay={["--hide-delay", hideDelay]}
>
	{@html body}
</div>

<style>
	@reference "$styles/global.css";

	:global {
		.md-body {
			&[data-is-visible="true"] {
				p,
				li {
					scale: 100%;
					transition-duration: var(--default-transition-duration);
					transition-delay: calc(var(--delay) + var(--block-idx, 0) * 100ms);
				}
			}

			p,
			li {
				scale: 0%;
				transform-origin: top left;
				transition-property: scale;
				transition-timing-function: var(--ease-bubble-120);
				transition-delay: var(--hide-delay);
				transition-duration: 0ms;

				& > span {
					--r: var(--rotate-word);
					&:nth-child(odd) {
						--r: calc(var(--rotate-word) * -1);
					}

					display: inline-flex;
					transition-property: translate, scale, rotate;
					transition-timing-function: var(--ease-bubble-200);
					transition-duration: var(--default-transition-duration);
					transform-origin: center;

					&:hover {
						scale: var(--scale-word);
						translate: 0 calc(var(--translate-word) * -1);
						rotate: var(--r);
					}
				}
			}

      li::marker {
        color: var(--color-accent);
      }

			ul {
				list-style: disc;
				margin-inline-start: 1em;
			}
			ol {
				list-style: decimal;
				margin-inline-start: 1em;
			}
		}
	}
</style>
