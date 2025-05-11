import { defineConfig } from "tsup";
import fs from "fs/promises";

process.on("beforeExit", async () => {
  await fs.copyFile("./package.json", "./dist/package.json");
  const packageJson = await fs.readFile("./dist/package.json", "utf-8");
  const json = JSON.parse(packageJson);
  json.main = "./index.js";
  json.module = "./index.js";
  json.types = "./index.d.ts";


  await fs.writeFile("./dist/package.json", JSON.stringify(json, null, 2));
  process.exit(0);
});

export default defineConfig({
  format: ["cjs", "esm"],
  entry: ["./index.ts"],
  dts: true,
  clean: true,
  outDir: "./dist",
  treeshake: true,
  skipNodeModulesBundle: true,
  minify: true,
  minifySyntax: true,
  minifyWhitespace: true,

  // watch: true,
});
