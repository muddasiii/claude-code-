// @ts-check
import { defineConfig } from 'astro/config';

// Tailwind v4 is wired via PostCSS (postcss.config.mjs) rather than the Vite
// plugin, to stay compatible with Astro 6's rolldown-based Vite.
// https://astro.build/config
export default defineConfig({
  site: 'https://brasamiami.com',
});
