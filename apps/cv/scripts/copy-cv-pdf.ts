import { existsSync } from "node:fs";
import { cp } from "node:fs/promises";
const BUILD_DIR = "";
const CV_OUTPUT_DIR = "../dist";

export const main = async () => {
  try {
    if (!existsSync(CV_OUTPUT_DIR)) {
      throw new Error("cv-output dir doesn't exist!");
    }
    if (!existsSync(BUILD_DIR)) {
      throw "build dir doesn't exist!";
    }

    console.log("Copying cv pdfs to", BUILD_DIR);
    await cp(CV_OUTPUT_DIR, BUILD_DIR, {
      recursive: true,
    });
    console.log("Finished copying cv pdfs to", BUILD_DIR);
  } catch (e) {
    console.log("Error copying cv pdfs", e);
  }
};

await main();

process.on("SIGINT", () => {
  process.exit(0);
});
