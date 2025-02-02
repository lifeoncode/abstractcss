import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.js"),
      name: "AbstractCSS",
      fileName: "abstractcss",
      formats: ["es", "umd"],
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "abstractcss.css";
          return assetInfo.name;
        },
      },
    },
  },
});
