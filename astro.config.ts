import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/static";
import expressiveCode from "astro-expressive-code";
import { defineConfig } from "astro/config";
import AtomOneDark from "./AtomOneDark.json";

// https://astro.build/config
export default defineConfig({
  integrations: [
    expressiveCode({
      themes: [AtomOneDark, "nord"],
      styleOverrides: {
        codeFontFamily: "Fira Code Variable, sans-serif;",
      },
    }),
    mdx(),
    react(),
  ],
  adapter: vercel({ webAnalytics: { enabled: true } }),
});
