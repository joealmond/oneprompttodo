# Angular 21 + Tailwind v4: Use `postcss.config.json`, not `.js`

**Learned:** 2026-02-22  
**Context:** Setting up Tailwind CSS v4 with Angular 21 (`@angular/build:application`)

## The Problem

Creating a `postcss.config.js` file (the standard approach) did nothing — Angular's esbuild pipeline
silently ignored it and Tailwind generated zero utility classes (only theme vars were output, ~21 kB).
No warning is emitted; the build succeeds but CSS is unstyled.

## The Solution

Angular 21's `@angular/build` only reads **JSON** PostCSS config files:
- `postcss.config.json` ✅
- `.postcssrc.json` ✅
- `postcss.config.js` ❌ (silently ignored)

Create `frontend/postcss.config.json`:

```json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

Then use `@import "tailwindcss";` in `src/styles.css`. Auto-detection finds `.ts` templates automatically.

Source: `node_modules/@angular/build/src/utils/postcss-configuration.js` — the `postcssConfigurationFiles` array only includes JSON variants.

## Key Takeaway

Angular 21's esbuild builder only loads PostCSS config from JSON files — always use `postcss.config.json` instead of `postcss.config.js`.
