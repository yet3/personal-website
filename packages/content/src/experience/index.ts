export * from "./experience.types"
export * from "./experience-date"

import dentica from "./entries/dentica";
import storydoc from "./entries/storydoc";
import strebersoft from "./entries/strebersoft";

export const EXPERIENCE = Object.freeze({
	...strebersoft,
	...dentica,
	...storydoc,
});
