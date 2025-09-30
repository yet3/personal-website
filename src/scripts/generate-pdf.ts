#!/usr/bin/env node
import { writeFile } from "fs/promises";
import { join } from "path";
import puppeteer, { Browser } from "puppeteer";
import { type PreviewServer, preview } from "vite";

let previewServer: PreviewServer | null = null;
let browser: Browser | null = null;

const STATIC_DIR = join(process.cwd(), "static");
const BUILD_DIR = join(process.cwd(), ".svelte-kit/output/client");

const main = async () => {
	try {
		previewServer = await preview();
		const previewUrl = previewServer.resolvedUrls?.local[0];
		console.log("Generating cv.pdf and resume.pdf");

		if (!previewUrl) {
			console.log("Failed to resolve preview url while generating cv.pdf and resume.pdf");
			return;
		}

		browser = await puppeteer.launch();
		const page = await browser.newPage();

		await page.goto(join(previewUrl, "raw-cv"), {
			waitUntil: ["domcontentloaded", "networkidle2"]
		});

		const pdfData = await page.pdf({
			printBackground: true,
			margin: {
				top: 0,
				bottom: 0,
				left: 0,
				right: 0
			},
			scale: 1,
			format: "a4",
			displayHeaderFooter: false
		});

		await Promise.all([
			writeFile(join(STATIC_DIR, "cv.pdf"), pdfData),
			writeFile(join(STATIC_DIR, "resume.pdf"), pdfData),
      //
			writeFile(join(BUILD_DIR, "cv.pdf"), pdfData),
			writeFile(join(BUILD_DIR, "reusme.pdf"), pdfData)
		]);

		console.log("Finished generating cv.pdf and resume.pdf:");
	} catch (e) {
		console.log(e);
	} finally {
		await browser?.close();
		await previewServer?.close();
	}
};

await main();

process.on("SIGINT", () => {
	browser?.close();
	previewServer?.close();
	process.exit(0);
});
