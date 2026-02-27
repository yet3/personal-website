// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import fg from "fast-glob";
import UnoCSS from "unocss/vite";

import svelte from "@astrojs/svelte";
import timedAnim from "@yet3/lightningcss-timed-anim-plugin";
import { composeVisitors } from "lightningcss";
import path from "node:path";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      UnoCSS(),
      {
        name: "inject-file-dir-path",
        transform(code, id) {
          if (id.includes("projects/entries/") && id.endsWith(".ts")) {
            const filename = path.resolve(process.cwd(), id);
            const dirname = path.dirname(filename);
            return `var __filename="${filename}";var __dirname="${dirname}";${code}`;
          }
        },
      },
      {
        name: "watch-project-images",
        async configureServer(server) {
          const files = await fg([
            "../../packages/lib/src/projects/entries/**/*",
          ]);

          for (const file of files) {
            server.watcher.add(file);
          }

          server.watcher.on("all", async (_, f) => {
            if (
              f.includes("packages/lib/src/projects/entries/") &&
              f.includes("/images/")
            ) {
              console.log("Project image changed: ", f);
              server.restart();
            }
          });
        },
      },
    ],
    css: {
      transformer: "lightningcss",
      lightningcss: {
        customAtRules: {
          ...timedAnim.customAtRules,
          // ...pluginAtRules,
        },
        //
        visitor: composeVisitors([timedAnim.visitor()]),
      },
    },
  },

  output: "static",
  redirects: {
    "/cv": "/cv.pdf",
    "/resume": "/cv.pdf",
    "/resume.pdf": "/cv.pdf",
    "/experience": "/#experience",
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Montserrat",
        cssVariable: "--font-primary",
        styles: ["normal", "italic"],
        subsets: ["latin"],
        weights: [400, 500, 600, 700],
      },
    ],
  },

  integrations: [svelte()],
});

// TODO: clean up redirects
