<script lang="ts">
	import { animdelay } from "$utils/delays";
	import {
		type IOnVisibleFn,
		onvisible,
		requiredvis,
		watchlayer
	} from "$utils/elements-visibility.svelte";
	import type { Snippet } from "svelte";
	import type { ClassValue } from "svelte/elements";
	import type { IDelay } from "$types/anims.types";

	interface IProps {
		class?: ClassValue;
		element?: string;
		animDelay?: IDelay;
		children: Snippet;

		isVisible?: boolean;
		onVisible?: IOnVisibleFn;
		watchLayer?: string;
		requiredVis?: string;
	}

	const {
		class: className,
		element = "div",
		animDelay,
		children,
		isVisible = true,
		onVisible,
		watchLayer,
		requiredVis
	}: IProps = $props();
</script>

<svelte:element
	this={element}
	class={[
		"transition-transform",
		isVisible ? "scale-100 ease-bubble-120" : "scale-0 ease-in-out",
		className
	]}
	use:animdelay={animDelay}
	use:onvisible={onVisible || null}
	use:watchlayer={watchLayer}
	use:requiredvis={requiredVis}
>
	{@render children()}
</svelte:element>
