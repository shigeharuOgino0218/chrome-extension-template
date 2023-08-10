// manifest.config.ts
import { defineManifest } from "@crxjs/vite-plugin";

export const manifest = defineManifest({
  manifest_version: 3,
  name: "chrome-extension-sample",
  description: "chrome-extension-sample",
  version: "0.0.1",
  action: {
    default_popup: "index.html",
  },
});
