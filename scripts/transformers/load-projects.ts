import { encode as blurHashEncode } from "blurhash";
import { readdir } from "fs/promises";
import { basename, dirname, join } from "path";
import sharp from "sharp";
import type { IProject } from "../../src/types/projects.types";
import { loadMdFiles } from "./load-md-files";

export const loadProjects = async () => {
	const inProjectsDir = join(process.cwd(), "static", "projects");
	const files = (await readdir(inProjectsDir))
		.filter((name) => /^[0-9]/gm.test(name))
		.map((name) => join(inProjectsDir, name, "project.md"));

	const items = await loadMdFiles(files);

	return await Promise.all<IProject>(
		items.map(
			({ filePath, ...item }) =>
				/* eslint-disable no-async-promise-executor */
				new Promise(async (resolve, reject) => {
					try {
						const projectDir = dirname(filePath);
						const projectDirName = basename(projectDir);

						const imagesDir = join(projectDir, "images");
						const staticImagesDir = join("/projects", projectDirName, "images");

						const images = (await readdir(imagesDir))
							.filter((file) => file.endsWith(".png"))
							.map((file) => ({
								png: join(staticImagesDir, file),
								webp: join(staticImagesDir, file.replace(".png", ".webp")),
								avif: join(staticImagesDir, file.replace(".png", ".avif"))
							}));

						let blurHash = "KDG+XX0000-:a#IU00~qxv";
						if (images[0]) {
							console.log(`[${projectDirName}] Startred generatring blurhash`);

							const s = sharp(join(process.cwd(), "static", images[0].png))
								.resize(480)
								.png({ quality: 5 })
								.raw()
								.ensureAlpha();
							const { data: pixels, info } = await s.toBuffer({
								resolveWithObject: true
							});
							blurHash = blurHashEncode(
								new Uint8ClampedArray(pixels),
								info.width,
								info.height,
								5,
								5
							);
							console.log(`[${projectDirName}] Finished generatring blurhash`);
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
