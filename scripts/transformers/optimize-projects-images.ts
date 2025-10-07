import { readdir } from "fs/promises";
import { basename, join } from "path";
import sharp from "sharp";
import type { Rollup } from "vite";

const IN_PROJECTS_DIR = join(process.cwd(), "static/projects");

export const optimizeProjectsImages = async (emitFile: Rollup.EmitFile) => {
	try {
		const projects = (await readdir(IN_PROJECTS_DIR)).filter((name) => /^[0-9]/gm.test(name));
		await Promise.all(projects.map((projectDirName) => handleProject(emitFile, projectDirName)));
	} catch (e) {
		console.log("Error handling projects' images", e);
	}
};

const handleProject = async (emitFile: Rollup.EmitFile, projectDirName: string) => {
	const projectDir = join(IN_PROJECTS_DIR, projectDirName);
	const inImages = (await readdir(join(projectDir, "images")))
		.filter((file) => file.endsWith(".png"))
		.map((name) => join(projectDir, "images", name));

	const outProjectDir = join("projects", projectDirName);

	console.log(`[${projectDirName}] Started generating/optimizing images`);
	for (const inImgSrc of inImages) {
		const sPng = sharp(inImgSrc).png({ quality: 70 });
		const sAvif = sharp(inImgSrc).avif({ quality: 70 });
		const sWebp = sharp(inImgSrc).webp({ quality: 70 });

		const baseName = basename(inImgSrc);
		const makeFilePath = (format: string) => {
			return join(outProjectDir, "images", baseName.replace(".png", `.${format}`));
		};

		emitFile({
			type: "asset",
			fileName: makeFilePath("png"),
			source: await sPng.toBuffer()
		});
		emitFile({
			type: "asset",
			fileName: makeFilePath("avif"),
			source: await sAvif.toBuffer()
		});
		emitFile({
			type: "asset",
			fileName: makeFilePath("webp"),
			source: await sWebp.toBuffer()
		});
	}

	console.log(`[${projectDirName}] Finished generating/optimizing images`);
};
