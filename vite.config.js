import { defineConfig } from "vite";

// Separate builds for CSS and JavaScript
export default defineConfig(({ mode }) => {
  const isCSSBuild = mode === "css";
  return {
    build: {
      lib: {
        entry: isCSSBuild ? "./src/scss/index.scss" : "./src/js/main.js", // Separate entry points
        name: isCSSBuild ? "ui_library_css" : "ui_library_js",
        fileName: (format) => `ui_library.${isCSSBuild ? "css" : "js"}`,
        formats: isCSSBuild ? ["es"] : ["es", "umd"], // UMD only for JavaScript
      },
      rollupOptions: {
        output: {
          assetFileNames: "[name].[ext]", // Ensure CSS is named properly
        },
      },
    },
    css: {
      //   preprocessorOptions: {
      //     scss: {
      //       additionalData: '@use "variables.scss" as *;',
      //     },
      //   },
      postcss: "./postcss.config.js",
    },
  };
});
