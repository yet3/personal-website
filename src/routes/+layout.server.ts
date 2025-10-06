import { BUILD_DIR, DEV_DIR } from "$scripts/consts";
import { load as cheerioLoad } from "cheerio";
import frontmatter from "front-matter";
import { existsSync } from "fs";
import { readFile, readdir } from "fs/promises";
import { parse as parseMd } from "marked";
import { basename, dirname, join } from "path";
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

const loadProjects = async (): Promise<IProject[]> => {
	const files = import.meta.glob("$static/projects/*/*.md", {
		query: "raw"
	});
	const items = await loadMdFiles(files);

	const isDev = import.meta.env.DEV;

	return await Promise.all<IProject>(
		items.map(
			({ filePath, ...item }) =>
				new Promise(async (resolve, reject) => {
					try {
						const projectDir = dirname(filePath);
						const projectDirName = basename(projectDir);
						const projectImagesDir = join("/projects", projectDirName, "images");

						const images = (await readdir(join(process.cwd(), projectDir, "images")))
							.filter((file) => file.endsWith(".png"))
							.map((file) => ({
								png: join(projectImagesDir, file),
								webp: join(projectImagesDir, file.replaceAll(".png", ".webp")),
								avif: join(projectImagesDir, file.replaceAll(".png", ".avif"))
							}));

						let blurHash = "KDG+XX0000-:a#IU00~qxv";
						const blurhashPath = join(
							isDev ? DEV_DIR : BUILD_DIR,
							"projects",
							projectDirName,
							"blurhash"
						);
						if (existsSync(blurhashPath)) {
							blurHash = await readFile(blurhashPath, "utf-8");
						}

						resolve({
							...(item.attributes as unknown as IProject),
							id: projectDirName.replace(/[0-9]{2}-/gm, ""),
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
