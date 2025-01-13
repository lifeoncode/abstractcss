import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  const isCSSBuild = mode === "css";
  return {
    build: {
      lib: {
        entry: isCSSBuild ? "./src/scss/index.scss" : "./src/js/main.js",
        name: isCSSBuild ? "abstract_css" : "abstract_css_js",
        fileName: (format) => `abstract_css.${isCSSBuild ? "css" : "js"}`,
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
