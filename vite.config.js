import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  const isCSSBuild = mode === "css";
  return {
    build: {
      lib: {
        entry: isCSSBuild ? "./src/scss/index.scss" : "./src/js/main.js",
        name: isCSSBuild ? "abstractcss" : "abstractcss_js",
        fileName: (format) => `abstractcss.${isCSSBuild ? "css" : "js"}`,
        formats: isCSSBuild ? ["es"] : ["es", "umd"],
      },
      rollupOptions: {
        output: {
          assetFileNames: "[name].[ext]",
        },
      },
    },
    css: {
      postcss: "./postcss.config.js",
    },
  };
});
