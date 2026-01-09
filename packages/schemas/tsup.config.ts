import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  outDir: "dist",
  shims: true,
  skipNodeModulesBundle: true,
  dts: true,
  clean: true,
});
