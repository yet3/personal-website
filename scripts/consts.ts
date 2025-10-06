import { join } from "path";

export const BUILD_DIR = join(
	process.cwd(),
	import.meta.env.VERCEL ? ".vercel/output/static" : "build"
);
export const DEV_DIR = join(process.cwd(), ".svelte-kit/output/client");
export const CV_OUTPUT_DIR = join(process.cwd(), "cv-output");
