import { nanoid } from "nanoid";
import type { Action } from "svelte/action";
import { getCssVarValue } from "./css-var";
import { DELAY_IN, DELAY_IN_ORDER, DELAY_LOCAL, DELAY_PAGE } from "./delays";

const ADD_EV = "watch-element";
const REMOVE_EV = "un-watch-element";

const ID_ATTR = "data-watch-id";
const IS_VIS_ATTR = "data-is-visible";
const LAYER_ATTR = "data-watch-layer";

export type IOnVisibleFn = () => void;
interface IWatchItem {
	id: string;
	node: HTMLElement;
	callback?: IOnVisibleFn;
}

export const onvisible: Action<HTMLElement, IWatchItem["callback"] | null> = (node, callback) => {
	if (callback === null) return;

	$effect(() => {
		const id = nanoid();
		node.setAttribute(ID_ATTR, id);
		node.setAttribute(IS_VIS_ATTR, "false");

		document.dispatchEvent(
			new CustomEvent(ADD_EV, {
				detail: {
					node,
					id,
					callback
				} satisfies IWatchItem
			})
		);

		return () => {
			document.dispatchEvent(
				new CustomEvent(REMOVE_EV, {
					detail: {
						node
					}
				})
			);
		};
	});
};

export const watchlayer: Action<HTMLElement, string | undefined> = (node, value) => {
	if (!value) return;
	node.setAttribute(LAYER_ATTR, value);
};

export const watchElementsVisibility = () => {
	$effect(() => {
		/* eslint-disable svelte/prefer-svelte-reactivity */
		const items = new Map<Element, IWatchItem>();
		let isInitialCheck = true;

		const observer = new IntersectionObserver(
			(entities) => {
				const idxs: Record<string, number> = {};
        entities.sort((a,b) => a.boundingClientRect.top - b.boundingClientRect.top)

				const getThenUpdateIdx = (key: string) => {
					const idx = idxs[key] ?? 0;
					idxs[key] = idx + 1;
					return idx;
				};

				for (let i = 0; i < entities.length; i++) {
					const entity = entities[i];

					if (entity.isIntersecting) {
						const item = items.get(entity.target);
						if (item) {
							const layerKey = item.node.getAttribute(LAYER_ATTR) || "default";
							const idx = getThenUpdateIdx(layerKey);

							items.delete(item.node);
							item.node.setAttribute(IS_VIS_ATTR, "true");
							item.node.style.setProperty(DELAY_IN_ORDER, idx.toString());

							if (!isInitialCheck) {
								item.node.style.setProperty(DELAY_LOCAL, `var(${DELAY_IN})`);
							}

							item.callback?.();
						}
						observer.unobserve(entity.target);
					}
				}
				isInitialCheck = false;
			},
			{
				threshold: 0.05
			}
		);

		let canObserve = false;
		let initTimeout: number | null = setTimeout(() => {
			for (const [, item] of items) {
				observer.observe(item.node);
			}
			canObserve = true;
			initTimeout = null;
		}, getCssVarValue(DELAY_PAGE));

		const handleWatchElement = (ev: CustomEvent<IWatchItem>) => {
			const data = ev.detail;
			items.set(data.node, data);

			if (canObserve) {
				observer.observe(data.node);
			}
		};

		const handleUnWatchElement = (ev: CustomEvent<{ node: HTMLElement }>) => {
			const item = items.get(ev.detail.node);
			if (item) {
				items.delete(ev.detail.node);
				observer.unobserve(item.node);
			}
		};

		document.addEventListener(ADD_EV, handleWatchElement as EventListener);
		document.addEventListener(REMOVE_EV, handleUnWatchElement as EventListener);
		return () => {
			document.removeEventListener(ADD_EV, handleWatchElement as EventListener);
			document.removeEventListener(REMOVE_EV, handleUnWatchElement as EventListener);
			observer.disconnect();
			if (initTimeout != null) {
				clearTimeout(initTimeout);
			}
		};
	});
};
