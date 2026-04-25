# Shockwave Technical Documentation

## 1. Overview

**Project Name:** Shockwave  
**Package Name:** `@apicenterlabs/shockwave`  
**Version:** `0.0.1`  
**Type:** React UI component library  
**Maintainer:** APICenter Labs

Shockwave is a reusable React component library built for distribution as an npm package. The current implementation exposes a `Button` component, includes Storybook-based component documentation, and produces distributable ESM and CommonJS builds with packaged CSS.

This document is intended for Confluence and covers:

- project purpose
- architecture
- repository structure
- build and packaging flow
- local development commands
- publishing workflow
- consumption in external apps
- troubleshooting guidance

## 2. Objectives

The main goals of Shockwave are:

- provide reusable UI primitives for React applications
- package components for reuse across multiple projects
- support both ESM and CommonJS consumers
- keep styling simple through generated CSS
- support developer documentation and visual review through Storybook

## 3. Technology Stack

- React
- Vite
- Storybook
- Vitest integration through Storybook addon
- npm package distribution

## 4. Current Functional Scope

Current public export:

- `Button`

The library is currently in an early stage and exposes a small public surface area. The present implementation validates the packaging, styling, Storybook, and consumer-app integration model that future components will follow.

## 5. Repository Structure

```text
shockwave/
├── .storybook/
│   ├── main.js
│   └── preview.js
├── docs/
│   └── confluence-shockwave-technical-document.md
├── scripts/
│   └── postbuild.mjs
├── src/
│   ├── components/
│   │   └── Button/
│   │       ├── Button.css
│   │       ├── Button.jsx
│   │       ├── Button.stories.jsx
│   │       └── index.jsx
│   └── index.js
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## 6. Architecture Summary

Shockwave follows a standard component-library architecture:

1. Source components live under `src/components`.
2. `src/index.js` acts as the package entry barrel.
3. Vite builds the library into `dist/`.
4. Output is generated in both ESM and CommonJS formats.
5. CSS is emitted as a separate file and then auto-imported into the built entry files through a postbuild step.
6. `package.json` exports define how consuming applications resolve JS and CSS.

## 7. Component Architecture

Shockwave uses a folder-based component structure.

Each component is expected to follow this layout:

```text
src/components/<ComponentName>/
├── <ComponentName>.jsx
├── <ComponentName>.css
├── <ComponentName>.stories.jsx
└── index.jsx
```

General responsibilities of this structure:

- `<ComponentName>.jsx` contains the component implementation
- `<ComponentName>.css` contains component-level styling
- `<ComponentName>.stories.jsx` provides Storybook examples and documentation coverage
- `index.jsx` re-exports the component for clean imports

This pattern keeps implementation, styles, and stories colocated and makes it easier to scale the library as more components are added.

## 8. Build and Packaging Flow

### 8.1 Build Entry

Library entry file:

- `src/index.js`

This file exports all public components from the package. At present it re-exports the `Button` component.

### 8.2 Vite Library Build

Build configuration file:

- `vite.config.js`

The build is configured to:

- use `src/index.js` as the library entry
- output both ESM and CommonJS builds
- generate:
  - `dist/shockwave.js`
  - `dist/shockwave.cjs`
  - `dist/shockwave.css`
- externalize:
  - `react`
  - `react-dom`
  - `react/jsx-runtime`

This ensures React is not bundled into the library output.

### 8.3 Postbuild Auto-Style Injection

Postbuild script:

- `scripts/postbuild.mjs`

Purpose:

- prepend `import "./shockwave.css";` to the ESM bundle
- prepend a guarded `require("./shockwave.css")` to the CommonJS bundle

This allows consumer apps to import the package without separately importing CSS in typical bundler-based environments.

### 8.4 Package Exports

The published package exposes:

- main CommonJS entry: `./dist/shockwave.cjs`
- module ESM entry: `./dist/shockwave.js`
- CSS entry: `./dist/shockwave.css`

Export map:

```json
"exports": {
  ".": {
    "import": "./dist/shockwave.js",
    "require": "./dist/shockwave.cjs"
  },
  "./style.css": "./dist/shockwave.css"
}
```

## 9. Dependency Model

### 9.1 Peer Dependencies

Shockwave expects the consuming application to provide:

- `react`
- `react-dom`

Supported versions:

- `^18 || ^19`

### 9.2 Dev Dependencies

Dev dependencies are used only for local development, Storybook, build tooling, linting, and test integration.

Notable tooling packages:

- `vite`
- `@vitejs/plugin-react`
- `storybook`
- `@storybook/react-vite`
- `@storybook/addon-docs`
- `@storybook/addon-a11y`
- `@storybook/addon-vitest`
- `vitest`
- `eslint`

## 10. Local Development Commands

### 10.1 Install Dependencies

```bash
npm install
```

### 10.2 Run Storybook Locally

```bash
npm run storybook
```

Default Storybook port:

```bash
http://localhost:6006
```

### 10.3 Build the Library

```bash
npm run build
```

This performs:

1. Vite library build
2. postbuild CSS auto-import injection

### 10.4 Build Storybook Static Output

```bash
npm run build-storybook
```

### 10.5 Dry-Run the npm Package

```bash
npm pack --dry-run
```

### 10.6 Create a Local Tarball

```bash
npm pack
```

### 10.7 Install the Tarball into Another App

From a consumer project:

```bash
npm install /absolute/path/to/apicenterlabs-shockwave-0.0.1.tgz
```

## 11. Consumer Usage

### 11.1 Install from npm

```bash
npm install @apicenterlabs/shockwave
```

### 11.2 Import and Use the Button

```jsx
import { Button } from "@apicenterlabs/shockwave";

export default function App() {
  return <Button variant="primary">Click Me</Button>;
}
```

### 11.3 Explicit CSS Import Fallback

If a consuming framework requires explicit CSS control, use:

```jsx
import "@apicenterlabs/shockwave/style.css";
import { Button } from "@apicenterlabs/shockwave";
```

## 12. Release and Publish Workflow

### 12.1 Recommended Pre-Publish Steps

```bash
npm install
npm run build
npm pack --dry-run
```

### 12.2 Update Version

Patch release:

```bash
npm version patch
```

Minor release:

```bash
npm version minor
```

Major release:

```bash
npm version major
```

### 12.3 Publish to npm

For a public scoped package:

```bash
npm publish --access public
```

Note:

- `prepack` runs `npm run build` automatically before packaging
- ensure npm authentication is active before publishing

## 13. Storybook Configuration

Storybook configuration lives in:

- `.storybook/main.js`
- `.storybook/preview.js`

Configured features:

- React + Vite integration
- docs addon
- accessibility addon
- Vitest addon
- Chromatic addon

Preview configuration enables:

- automatic controls for color/date props
- accessibility test mode set to `todo`

## 14. Testing Approach

Current testing is Storybook-centered.

The repo includes Vitest integration through Storybook's addon configuration in `vite.config.js`. This is prepared for browser-based story testing with Playwright-backed execution.

Current practical validation flow:

- run Storybook locally
- inspect stories visually
- run production build
- run `npm pack --dry-run`
- optionally test the packed tarball in a separate app

## 15. Known Constraints

- component coverage is currently limited to `Button`
- there is no standalone unit test suite beyond Storybook/Vitest integration
- CSS auto-loading works well in bundler-based consumers, but some frameworks may still prefer explicit CSS import
- package API is intentionally minimal at this stage

## 16. Troubleshooting

### 16.1 Styles Not Appearing in Consumer App

Possible causes:

- consumer app cached an older package version
- stale tarball was installed locally
- consuming framework requires explicit CSS import

Recommended resolution:

```bash
npm run build
npm pack
```

Then reinstall the latest tarball in the consumer app. If required, import:

```jsx
import "@apicenterlabs/shockwave/style.css";
```

### 16.2 Package Imports Fail in Consumer App

Check:

- package was built before packing
- tarball is fresh
- consuming project has compatible React and React DOM versions

Useful commands:

```bash
npm run build
npm pack --dry-run
```

### 16.3 Storybook Does Not Start

Try:

```bash
npm install
npm run storybook
```

If dependency state is inconsistent:

```bash
rm -rf node_modules package-lock.json
npm install
```

## 17. Extension Guidelines

To add a new component:

1. create a new component folder under `src/components`
2. add the component implementation file
3. add a CSS file if needed
4. add an `index.jsx` re-export
5. add a Storybook story file
6. export the component from `src/index.js`
7. verify build and package commands

Recommended verification:

```bash
npm run build
npm run storybook
npm pack --dry-run
```

## 18. Operational Command Reference

### Development

```bash
npm install
npm run storybook
npm run build
npm run build-storybook
```

### Packaging

```bash
npm pack --dry-run
npm pack
```

### Versioning and Publishing

```bash
npm version patch
npm publish --access public
```

### Consumer Validation

```bash
npm install /absolute/path/to/apicenterlabs-shockwave-0.0.1.tgz
```

## 19. Summary

Shockwave is currently a lightweight React component library with a clean packaging pipeline, Storybook-driven documentation, and npm-ready distribution. The project is set up to scale by adding more components under the same build and export model.

Its current strengths are:

- simple architecture
- predictable packaging
- dual-format JS output
- reusable CSS packaging
- Storybook-based component documentation

The recommended next steps are:

- add more components
- introduce formal automated tests beyond story-driven validation
- define contribution and release conventions as the library grows
