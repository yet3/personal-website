import type { Action } from "svelte/action";
import type { IDelay } from "$types/anims.types";

export const DELAY_PAGE = "--delay-page";
export const DELAY_IN = "--delay-in";
export const DELAY_SECTIONS = "--delay-sections";
export const DELAY_LOCAL = "--delay-local";
export const DELAY_IN_ORDER = "--delay-in-order";

export const DELAY_PER_SECTION = "--delay-per-section";
export const DELAY_PER_SKILL = "--delay-per-skill";

const parseStr = (str: string): string => {
	if (str.startsWith("--")) {
		return `var(${str})`;
	}
	return str;
};

const withCalc = (v: string, isTrue: boolean) => {
	if (!isTrue) return v;
	return `calc(${v})`;
};

const calcMulti = (v: Array<string | number>, calc: boolean) => {
	const dur = calcDelay(v[0], false);
	const multi = typeof v[2] === "number" ? v[2] : calcDelay(v[2], false);
	return withCalc(`${dur} ${v[1]} ${multi}`, calc);
};

export const calcDelay = (data?: IDelay | null, calc = true): string => {
	if (!data) return "0ms";

	const delays = Array.isArray(data) ? data : [data];
	const results: string[] = [];

	if (delays.length === 3 && ["*", "/"].includes(delays[1] as string)) {
		return calcMulti(delays as Array<string | number>, calc);
	}

	for (const delay of delays) {
		if (delay) {
			if (typeof delay === "number") {
				results.push(`${delay}ms`);
			} else if (typeof delay === "string") {
				results.push(parseStr(delay));
			} else if (delay.length === 0) {
				results.push("0ms");
			} else if (delay.length === 3 && ["*", "/"].includes(delay[1] as string)) {
				results.push(calcMulti(delay as Array<string | number>, false));
			} else {
				results.push(delay.map((v) => calcDelay(v, false)).join(" + "));
			}
		}
	}

	return withCalc(results.join(" + "), calc);
};

export const animdelay: Action<HTMLElement, IDelay | undefined> = (node, delay) => {
	if (!delay) return;
	node.style.setProperty(
		"transition-delay",
		calcDelay([delay, node.style.getPropertyValue("transition-delay")])
	);
};

export const vardelay: Action<HTMLElement, [string, IDelay | undefined]> = (
	node,
	[varName, delay]
) => {
	if (!delay) return;
	node.style.setProperty(varName, calcDelay([delay]));
};
