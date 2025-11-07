import dentica from "./dentica";
import storydoc from "./storydoc";
import strebersoft from "./strebersoft";

export const EXPERIENCES = Object.freeze({
	...storydoc,
	...dentica,
	...strebersoft,
});
