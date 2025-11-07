#!/usr/bin/env node
import { existsSync } from "fs";
import { mkdir, writeFile } from "fs/promises";
import { join } from "path";
import puppeteer, { type Browser } from "puppeteer";
import { type PreviewServer, preview } from "vite";
import { CV_OUTPUT_DIR } from "./consts";

let previewServer: PreviewServer | null = null;
let browser: Browser | null = null;

const main = async () => {
	try {
		previewServer = await preview();
		const previewUrl = previewServer.resolvedUrls?.local[0];
		console.log("Generating cv.pdf and resume.pdf to", CV_OUTPUT_DIR);

		if (!previewUrl) {
			console.log(
				"Failed to resolve preview url while generating cv.pdf and resume.pdf to",
				CV_OUTPUT_DIR,
			);
			return;
		}

		browser = await puppeteer.launch();
		const page = await browser.newPage();

		await page.goto(join(previewUrl, "raw-cv"), {
			waitUntil: ["domcontentloaded", "networkidle2"],
		});

		const pdfData = await page.pdf({
			printBackground: true,
			margin: {
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,
			},
			scale: 1,
			format: "a4",
			displayHeaderFooter: false,
		});

		if (!existsSync(CV_OUTPUT_DIR)) {
			await mkdir(CV_OUTPUT_DIR);
		}

		await Promise.all([
			writeFile(join(CV_OUTPUT_DIR, "cv.pdf"), pdfData),
			writeFile(join(CV_OUTPUT_DIR, "resume.pdf"), pdfData),
		]);

		console.log("Finished generating cv.pdf and resume.pdf to", CV_OUTPUT_DIR);
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
