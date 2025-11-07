import { readdir } from "fs/promises";
import { basename, join } from "path";
import sharp from "sharp";
import type { Rollup } from "vite";
import { PROJECTS } from "../../src/projects";

const IN_PROJECTS_DIR = join(process.cwd(), "static/projects");

export const optimizeProjectsImages = async (emitFile: Rollup.EmitFile) => {
	try {
		const ids = Object.keys(PROJECTS);
		await Promise.all(
			ids.map((projectDirName) => handleProject(emitFile, projectDirName)),
		);
	} catch (e) {
		console.log("Error handling projects' images", e);
	}
};

const handleProject = async (
	emitFile: Rollup.EmitFile,
	projectDirName: string,
) => {
	const projectDir = join(IN_PROJECTS_DIR, projectDirName);
	const inImages = (await readdir(projectDir))
		.filter((file) => file.endsWith(".png"))
		.map((name) => join(projectDir, name));

	const outProjectDir = join("projects", projectDirName);

	console.log(`[${projectDirName}] Started generating/optimizing images`);
	for (const inImgSrc of inImages) {
		const s = sharp(inImgSrc).resize(1920);
		const sPng = s.png({ quality: 70 });
		const sAvif = s.avif({ quality: 70 });
		const sWebp = s.webp({ quality: 70 });

		const baseName = basename(inImgSrc);
		const makeFilePath = (format: string) => {
			return join(outProjectDir, baseName.replace(".png", `.${format}`));
		};

		emitFile({
			type: "asset",
			fileName: makeFilePath("png"),
			source: await sPng.toBuffer(),
		});
		emitFile({
			type: "asset",
			fileName: makeFilePath("avif"),
			source: await sAvif.toBuffer(),
		});
		emitFile({
			type: "asset",
			fileName: makeFilePath("webp"),
			source: await sWebp.toBuffer(),
		});
	}

	console.log(`[${projectDirName}] Finished generating/optimizing images`);
};
