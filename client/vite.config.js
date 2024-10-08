import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {},
  server: {
    // port: 3003,
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:7001",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
