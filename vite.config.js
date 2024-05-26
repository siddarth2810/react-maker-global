import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  version: "3.2.2",
  plugins: [react()],
  server: {
    host: true,
  },
});
