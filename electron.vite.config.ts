import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import { resolve } from "node:path";

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    build: {
      outDir: "dist/main",
      lib: { entry: "src/main.ts" },
      rollupOptions: { external: ["better-sqlite3"] },
    },
    resolve: {
      alias: {
        "@src": resolve(__dirname, "src/"),
        "@shared": resolve(__dirname, "src/shared/"),
        "@components": resolve(__dirname, "src/web/components/"),
        "@assets": resolve(__dirname, "src/assets/"),
        "@pages": resolve(__dirname, "src/web/pages"),
      },
    },
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
    build: {
      outDir: "dist/preload",
      // tell electron-vite where to look for your preload file
      lib: { entry: "src/preload.ts" },
    },
  },
  renderer: {
    // tell electron-vite where your web entry point is
    root: "src/web/",
    resolve: {
      // path aliases
      alias: {
        "@src": resolve(__dirname, "src/"),
        "@shared": resolve(__dirname, "src/shared/"),
        "@components": resolve(__dirname, "src/web/components/"),
        "@assets": resolve(__dirname, "src/assets/"),
        "@pages": resolve(__dirname, "src/web/pages"),
      },
    },
    plugins: [
      react(),
      TanStackRouterVite({
        routesDirectory: "./src/web/routes",
        generatedRouteTree: "./src/web/routeTree.gen.ts",
        routeFileIgnorePrefix: "-",
        quoteStyle: "single"
      }),
    ],
    // where to output your web files
    build: {
      outDir: "dist/renderer",
      rollupOptions: {
        input: "./src/web/index.html",
      },
    },
  },
});