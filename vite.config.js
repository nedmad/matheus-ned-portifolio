import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
  plugins: [react(),reactRefresh()],
  base: "/matheus-ned-portifolio/",
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  build: {
    outDir: "docs",
    assetsDir: ".",
  },
});
