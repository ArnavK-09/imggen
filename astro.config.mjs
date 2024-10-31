import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), solidJs()],
  site: "https://arnavk-09.github.io",
  base: "imggen",
  output: "static"
});
