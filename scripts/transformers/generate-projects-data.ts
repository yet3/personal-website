import { encode as blurHashEncode } from "blurhash";
import { readdir } from "fs/promises";
import { join } from "path";
import sharp from "sharp";
import { type IProjectId, PROJECTS } from "../../src/projects";
import type { IProjectsGeneratedData } from "../../src/types/projects.types";

export const generateProjectsData = async () => {
	const inProjectsDir = join(process.cwd(), "static", "projects");
	const ids = Object.keys(PROJECTS);

	const generatedData: Partial<IProjectsGeneratedData> = {};

	await Promise.all<void>(
		ids.map(
			(id) =>
				/* eslint-disable no-async-promise-executor */
				new Promise(async (resolve, reject) => {
					try {
						const imagesDir = join(inProjectsDir, id);
						const outStaticImagesDir = join("/projects", id);

						const images = (await readdir(imagesDir))
							.filter((file) => file.endsWith(".png"))
							.map((file) => ({
								png: join(outStaticImagesDir, file),
								webp: join(outStaticImagesDir, file.replace(".png", ".webp")),
								avif: join(outStaticImagesDir, file.replace(".png", ".avif")),
							}));

						let blurHash = "KDG+XX0000-:a#IU00~qxv";
						if (images[0]) {
							console.log(`[${id}] Startred generatring blurhash`);

							const s = sharp(join(process.cwd(), "static", images[0].png))
								.resize(480)
								.png({ quality: 5 })
								.raw()
								.ensureAlpha();
							const { data: pixels, info } = await s.toBuffer({
								resolveWithObject: true,
							});
							blurHash = blurHashEncode(
								new Uint8ClampedArray(pixels),
								info.width,
								info.height,
								5,
								5,
							);
							console.log(`[${id}] Finished generatring blurhash`);
						}

						generatedData[id as IProjectId] = {
							images,
							blurHash,
						};
						resolve();
					} catch (e) {
						console.log(e);
						reject(e);
					}
				}),
		),
	);

	return generatedData;
};
