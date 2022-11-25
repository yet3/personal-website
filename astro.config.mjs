import { defineConfig } from "astro/config";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

import { viteCommonjs } from "@originjs/vite-plugin-commonjs";
import commonjs from "@rollup/plugin-commonjs";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [viteCommonjs(), commonjs()],
  },
  integrations: [
    react(),
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
});
