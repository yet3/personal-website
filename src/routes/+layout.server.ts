import { encode as blurHashEncode } from "blurhash";
import { load as cheerioLoad } from "cheerio";
import frontmatter from "front-matter";
import { existsSync } from "fs";
import { readdir } from "fs/promises";
import { parse as parseMd } from "marked";
import { basename, dirname, join } from "path";
import sharp from "sharp";
import type { IExperience } from "$types/experience.types";
import type { IProject } from "$types/projects.types";
import type { LayoutServerLoad } from "./$types";

interface IMdImport {
	attributes: Record<string, unknown>;
	body: string;
	totalBlocks: number;
	filePath: string;
}

const loadMdFiles = async (files: Record<string, () => Promise<unknown>>) => {
	const promises: Promise<IMdImport>[] = [];
	for (const filePath in files) {
		const importFile = files[filePath];

		const res = await importFile();
		if (typeof res === "object" && res && "default" in res && typeof res.default === "string") {
			const content = res.default;
			promises.push(
				/* eslint-disable no-async-promise-executor */
				new Promise(async (resolve, reject) => {
					const { attributes, body } = frontmatter(content);

					const $ = cheerioLoad(await parseMd(body));
					let totalBlocks = 0;
					$("p, li").each((idx, el) => {
						const $p = $(el);
						const text = $p.text();
						const words = text.split(/\s+/).filter((word) => word.length > 0);
						const wrappedWords = words.map((word) => `<span>${word}</span>`).join(" ");
						$p.html(wrappedWords);

						totalBlocks++;
						el.attribs.style = `--block-idx: ${idx}`;
					});

					try {
						resolve({
							filePath,
							attributes: (attributes as Record<string, unknown>) ?? {},
							body: $.html(),
							totalBlocks
						});
					} catch (e) {
						console.log(e);
						reject(e);
					}
				})
			);
		}
	}
	return await Promise.all(promises);
};

const loadExperiences = async () => {
	const files = import.meta.glob("$static/experiences/*.md", {
		query: "raw"
	});
	const items = await loadMdFiles(files);
	return items.map(({ attributes, body, totalBlocks }) => ({
		...(attributes as Omit<IExperience, "html">),
		html: body,
		totalBlocks
	})) as IExperience[];
};

const generatedImages = new Set<string>();

const loadProjects = async (): Promise<IProject[]> => {
	const files = import.meta.glob("$static/projects/*/*.md", {
		query: "raw"
	});
	const items = await loadMdFiles(files);

	return await Promise.all<IProject>(
		items.map(
			({ filePath, ...item }) =>
				new Promise(async (resolve, reject) => {
					try {
						const dirPath = dirname(filePath);
						const dirName = basename(dirPath);

						const images = (await readdir(join(process.cwd(), dirPath, "images")))
							.filter((file) => file.endsWith(".png"))
							.map((file) => ({
								png: join("/projects", dirName, "images", file),
								webp: join("/projects", dirName, "images", file.replaceAll(".png", ".webp")),
								avif: join("/projects", dirName, "images", file.replaceAll(".png", ".avif"))
							}));

						let blurHash = "KDG+XX0000-:a#IU00~qxv";
						if (images[0]) {
							const s = sharp(join(process.cwd(), "static", images[0].png))
								.resize(480)
								.png({ quality: 5 })
								.raw()
								.ensureAlpha();

							const { data: pixels, info } = await s.toBuffer({
								resolveWithObject: true
							});
							const ar = new Uint8ClampedArray(pixels);
							blurHash = blurHashEncode(ar, info.width, info.height, 5, 5);
						}

						for (const imgSrc of images) {
							const src = join(process.cwd(), "static", imgSrc.png);

							if (!generatedImages.has(src)) {
                generatedImages.add(src)
								const outputAvif = src.replaceAll(".png", ".avif");
								const outputWebp = src.replaceAll(".png", ".webp");
								if (import.meta.env.MODE === "production" || !existsSync(outputAvif)) {
									console.log("Generating .avif and .webp for:", imgSrc);
									await Promise.all([
										await sharp(src).avif({ quality: 70 }).toFile(outputAvif),
										await sharp(src).webp({ quality: 70 }).toFile(outputWebp)
									]);
								}
							}
						}

						resolve({
							...(item.attributes as unknown as IProject),
							id: dirName.replace(/[0-9]{2}-/gm, ""),
							images,
							html: item.body,
							totalBlocks: item.totalBlocks,
							blurHash
						});
					} catch (e) {
						console.log(e);
						reject(e);
					}
				})
		)
	);
};

export const load: LayoutServerLoad = async () => {
	const promises: [Promise<IExperience[]>, Promise<IProject[]>] = [
		loadExperiences(),
		loadProjects()
	];
	const data = await Promise.all(promises);
	return {
		experiences: data[0],
		projects: data[1]
	};
};

export const prerender = true;
export const ssr = false;
export const csr = true;
