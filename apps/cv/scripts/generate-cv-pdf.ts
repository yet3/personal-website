#!/usr/bin/env node
import { exec } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { promisify } from "node:util";
import puppeteer, { type Browser } from "puppeteer";
import { type PreviewServer, preview } from "vite";

const CV_OUTPUT_DIR = "./cv-output";

const CV_PATH = join(CV_OUTPUT_DIR, "cv.pdf");
const CV_COMPRSSED_PATH = join(CV_OUTPUT_DIR, "cv_compressed.pdf");

const runCmd = promisify(exec);

let previewServer: PreviewServer | null = null;
let browser: Browser | null = null;

const main = async () => {
	try {
		previewServer = await preview();
		const previewUrl = previewServer.resolvedUrls?.local[0];
		console.log("Generating cv.pdf to", CV_OUTPUT_DIR);

		if (!previewUrl) {
			console.log(
				"Failed to resolve preview url while generating cv.pdf to",
				CV_OUTPUT_DIR,
			);
			return;
		}

		browser = await puppeteer.launch();
		const page = await browser.newPage();

		await page.goto(previewUrl, {
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

		await Promise.all([writeFile(CV_PATH, pdfData)]);

		try {
			console.log("Started optimizing pdf with ghostscript");
			await runCmd(
				`gs -sDEVICE=pdfwrite -dCompatibilityLevel=2 -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH -sOutputFile=${CV_COMPRSSED_PATH} ${CV_PATH}`,
			);

			await runCmd(`mv -f ${CV_COMPRSSED_PATH} ${CV_PATH}`);

			console.log("Finished optimizing pdf with ghostscript");
		} catch (e) {
			console.log(e);
		}

		console.log("Finished generating cv.pdf to", CV_OUTPUT_DIR);
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
