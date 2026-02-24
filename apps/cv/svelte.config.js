import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess({
    script: true,
  }),
  kit: {
    adapter: adapter(),
    prerender: {
      entries: ["*"],
    },

    alias: {
      "$styles/*": "src/styles/*",
      "$modules/*": "src/modules/*",
      "$common/*": "src/common/*",
      "$utils/*": "src/utils/*",
      "$static/*": "static/*",
      "$scripts/*": "scripts/*",
    },
  },
};

export default config;
