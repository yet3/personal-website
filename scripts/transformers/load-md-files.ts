import { load as cheerioLoad } from "cheerio";
import frontmatter from "front-matter";
import { readdir, readFile } from "fs/promises";
import { parse as parseMd } from "marked";
import { join } from "path";

interface IMdImport {
	attributes: Record<string, unknown>;
	body: string;
	totalBlocks: number;
	filePath: string;
}

export const loadMdFiles = async (pathOrFiles: string | string[]) => {
	let files: string[] = [];

	if (typeof pathOrFiles === "string") {
		files = (await readdir(pathOrFiles))
			.filter((name) => name.endsWith(".md"))
			.map((name) => join(pathOrFiles, name));
	} else files = pathOrFiles;

	return await Promise.all<IMdImport>(
		files.map(
			(filePath) =>
				/* eslint-disable no-async-promise-executor */
				new Promise(async (resolve) => {
					const { attributes, body } = frontmatter(
						await readFile(filePath, "utf-8"),
					);

					const $ = cheerioLoad(await parseMd(body));
					let totalBlocks = 0;
					$("p, li").each((idx, el) => {
						const $p = $(el);
						const text = $p.text();
						const words = text.split(/\s+/).filter((word) => word.length > 0);
						const wrappedWords = words
							.map((word) => `<span>${word}</span>`)
							.join(" ");
						$p.html(wrappedWords);

						totalBlocks++;
						el.attribs.style = `--block-idx: ${idx}`;
					});

					resolve({
						filePath,
						attributes: (attributes as Record<string, unknown>) ?? {},
						body: $.html(),
						totalBlocks,
					});
				}),
		),
	);
};
