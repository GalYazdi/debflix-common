import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["packages/schemas/index.ts"],
    outDir: "dist/schemas",
    format: ["cjs", "esm"],
    shims: true,
    skipNodeModulesBundle: true,
    dts: true,
    clean: true,
  },
  {
    entry: ["packages/types/index.ts"],
    outDir: "dist/types",
    format: ["cjs", "esm"],
    shims: true,
    skipNodeModulesBundle: true,
    dts: true,
    clean: true,
  },
]);
