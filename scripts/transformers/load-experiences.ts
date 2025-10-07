import { join } from "path";
import type { IExperience } from "../../src/types/experience.types.ts";
import { loadMdFiles } from "./load-md-files.ts";

export const loadExperiences = async () => {
	const items = await loadMdFiles(join(process.cwd(), "static", "experiences"));
	return items.map(({ attributes, body, totalBlocks }) => ({
		...(attributes as Omit<IExperience, "html">),
		html: body,
		totalBlocks
	})) as IExperience[];
};
