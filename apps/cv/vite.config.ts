import { sveltekit } from "@sveltejs/kit/vite";
import browserslist from "browserslist";
import path from "node:path";
import { browserslistToTargets } from "lightningcss";
import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";

export default defineConfig({
  plugins: [
    sveltekit(),
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
    
  ],
  css: {
    transformer: "lightningcss",
    lightningcss: {
      targets: browserslistToTargets(browserslist(">= 0.25%")),
    },
  },
  build: {
    cssMinify: "lightningcss",
  },
});
