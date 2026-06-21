// @ts-check
import { defineConfig } from 'astro/config';

// Deployed to GitHub Pages at https://<user>.github.io/claude-code-/
// `base` is the repo name. If you move this to its own repo or to
// Vercel/Netlify (served at the domain root), set base back to '/'.
// https://astro.build/config
export default defineConfig({
  site: 'https://muddasiii.github.io',
  base: '/claude-code-/',
});
