import { defineConfig } from "vite";
import { obfuscator } from "rollup-obfuscator";

export default defineConfig({
  build: {
    rollupOptions: {
      input: "./main.js",
      output: {
        entryFileNames: "widget_club_wonder.min.js",
      },
      plugins: [
        obfuscator({
          transformObjectKeys: true,
          unicodeEscapeSequence: true,
          numbersToExpressions: true,
          shuffleStringArray: true,
          splitStrings: true,
          stringArrayThreshold: 1,
          identifierNamesGenerator: "hexadecimal",
        }),
      ],
    },
  },
});
