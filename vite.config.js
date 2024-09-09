import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: "./main.js",
      output: {
        entryFileNames: "widget_club_wonder.min.js",
      },
    },
  },
});
