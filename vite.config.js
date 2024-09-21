import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'

const hrefBasePath = () => {
  let basePath;
  return {
    name: "vite-plugin-href-base-path",
    // https://vitejs.dev/guide/api-plugin.html#configresolved
    configResolved(config) {
      basePath = config.base;
    },
    // https://vitejs.dev/guide/api-plugin.html#transformindexhtml
    transformIndexHtml(html) {
      const hrefRE = /(?<=<a\b[^>]+href\s*=\s*["'])\//gi;
      return html.replace(hrefRE, basePath);
    },
  };
};

export default defineConfig({
  base: "/proyecto-react-central-de-turnos/",
  plugins: [hrefBasePath(), react()],
});