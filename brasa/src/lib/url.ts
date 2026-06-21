// Builds base-aware URLs so internal links work under GitHub Pages' sub-path
// (e.g. /claude-code-/menu). External links and anchors pass through untouched.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, ""); // "" or "/claude-code-"

export function url(path = "/"): string {
  if (/^(https?:|tel:|mailto:|#)/.test(path)) return path;
  if (path === "/") return BASE + "/";
  return BASE + "/" + path.replace(/^\//, "");
}
