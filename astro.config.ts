import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/static";
import expressiveCode from "astro-expressive-code";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    expressiveCode({
      themes: ["one-dark-pro"],
    }),
    mdx(),
    react(),
  ],
  adapter: vercel({ webAnalytics: { enabled: true } }),
});
