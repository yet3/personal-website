---
title: React to svg (Figma plugin)
githubRepo: figma-svg-to-react
appHref: https://www.figma.com/community/plugin/1139659790182545298/SVG-to-React
imgName: figma_svg_to_react
technologies:
  - Figma
  - Typescript
  - React
  - Vite
  - TailwindCSS
  - SVGR
  - Fastify
  - Vercel
---

I made the SVG to React Figma plugin because I wanted a way to transform multiple svgs to react components at once. The plugin uses SVGR for transformation and @svgr/plugin-svgo for SVG optimization. The conversion happens on a serverless function that's deployed to vercel. The plugin lets you preview the code of each converted svg, set its name, and copy each individually or download them as files.
