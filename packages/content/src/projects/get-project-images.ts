import type { IProjectImg } from "./projects.types";
import { readdirSync } from "node:fs";
import { join, basename } from "node:path";
import { encode as blurHashEncode } from "blurhash";
import sharp from "sharp";

const blurhashCache = new Map<string, string>();

export const getProjectImages = async (
  dirname: string,
): Promise<IProjectImg[]> => {
  const imagesDir = join(dirname, "images");
  const names = readdirSync(imagesDir).filter((name) =>
    /^.*\.(png|jpe?g|webp|avif)$/gm.test(name),
  );

  const promises: Promise<IProjectImg>[] = [];

  for (const [idx, filename] of names.entries()) {
    promises.push(
      /* biome-ignore lint/suspicious/noAsyncPromiseExecutor: */
      new Promise(async (resolve) => {
        const imgPath = join(imagesDir, filename);

        let blurhash = blurhashCache.get(imgPath) ?? "KDG+XX0000-:a#IU00~qxv";
        if (import.meta.env.PROD || !blurhashCache.has(imgPath)) {
          console.log(
            `Generating blurhash for "${join(basename(dirname), filename)}"`,
          );
          const s = sharp(imgPath)
            .resize(480)
            .png({ quality: 5 })
            .raw()
            .ensureAlpha();

          const { data: pixels, info } = await s.toBuffer({
            resolveWithObject: true,
          });

          blurhash = blurHashEncode(
            new Uint8ClampedArray(pixels),
            info.width,
            info.height,
            5,
            5,
          );
          blurhashCache.set(imgPath, blurhash);
        }

        resolve({
          idx,
          // src: (await import(/* @vite-ignore */ imgPath)).default,
          src: join(basename(join(imagesDir, "..")), "images", filename),
          blurhash,
        });
      }),
    );
  }

  return (await Promise.all(promises)).sort((a, b) => a.idx - b.idx);
};
