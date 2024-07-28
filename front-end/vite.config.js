import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["react", "react-dom"],
      onwarn(warning, warn) {
        // Filter out specific warnings or handle them differently
        if (warning.code === "THIS_IS_UNDEFINED") {
          return;
        }
        warn(warning);
      },
    },
  },
});
