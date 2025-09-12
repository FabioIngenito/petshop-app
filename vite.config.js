import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// "proxy" para evitar erro de CORS - cross-origin resource sharing
// "port" para mudar a 5173 modificada para 3001
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/pf-api": {
        target: "https://api.petfinder.com/v2",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/pf-api/, ""),
      },
    },
    port: 3001,
  },
});
