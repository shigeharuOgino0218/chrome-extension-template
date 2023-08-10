import { crx } from "@crxjs/vite-plugin";
import { defineConfig } from "vite";
import { manifest } from "./manifest.config";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), crx({ manifest })],
});
