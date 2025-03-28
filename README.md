<p align="center">
  <a href="https://www.npmjs.org/package/nuxt-eruda">
    <img src="https://img.shields.io/npm/v/nuxt-eruda.svg">
  </a>
  <a href="https://npmcharts.com/compare/nuxt-eruda?minimal=true">
    <img src="https://img.shields.io/npm/dm/nuxt-eruda.svg">
  </a>
  <br>
</p>

# nuxt-eruda

> A Nuxt(3) module for mobile devtools via [eruda](https://github.com/liriliri/eruda) 

- [✨ &nbsp;Release Notes](/CHANGELOG.md)


## Features

- Powered by [eruda](https://github.com/liriliri/eruda).


## Quick Setup

1. Add `nuxt-eruda` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-eruda

# Using yarn
yarn add --dev nuxt-eruda

# Using npm
npm install --save-dev nuxt-eruda
```

2. Add `nuxt-eruda` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-eruda'
  ],
  // custom nuxt-eruda options
  eruda: {
    enabled: true
    // ...
  }
})
```

That's it! You can now use **nuxt-eruda** in your Nuxt app ✨


## Options

| Key | Default Value | Description |
| :---: | :---: | :---: |
| `enabled` | `false` | Whether to enable **eruda** |
| `initOptions` | - | Define init options of **eruda** |
| `plugins` | `['eruda-vue']` | Define init plugins of **eruda** |


## Development

```bash
# Install dependencies
pnpm install

# Generate type stubs
pnpm dev:prepare

# Develop with the playground
pnpm dev

# Build the playground
pnpm dev:build

# Run ESLint
pnpm lint

# Run Vitest
pnpm test
pnpm test:watch

# Release new version
npm run release
```
