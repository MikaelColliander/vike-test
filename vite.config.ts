import vercel from "vite-plugin-vercel";
import {telefunc} from "telefunc/vite";
import ssr from "vike/plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { cjsInterop } from "vite-plugin-cjs-interop";

export default defineConfig({
  plugins: [react({}), ssr({
    prerender: true,
  }), telefunc(), vercel(),
  cjsInterop({
    dependencies: [
      // Add problematic npm package here
      "@mui/material/**",
    ]
  })
],
ssr: {
  noExternal: true
}
});