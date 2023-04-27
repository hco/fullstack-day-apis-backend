import { defineConfig } from "orval";

module.exports = defineConfig({
  autobahnen: {
    input: "./autobahnen.yaml",
    output: {
      target: "./api",
      override: {
        mutator: {
          path: "./axios.ts",
          name: "customInstance",
        },
      },
    },
  },
});
