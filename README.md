# ESLint Config

Shareable code style config for my own pet projects.

## Install

For JavaScript:

```sh
pnpm add --save-dev github:a-sokolova-dev/eslint-config eslint
```

For TypeScript:

```sh
pnpm add --save-dev github:a-sokolova-dev/eslint-config eslint
```

## Usage

Create `eslint.config.js` config file with the following content:

For JavaScript:

```js
import customJsConfig from "eslint-config";

/** @type {import('eslint').Linter.Config[]} */
export default [...customJsConfig];
```

For TypeScript:

```js
import customTsConfig from "eslint-config/ts";

/** @type {import('eslint').Linter.Config[]} */
export default [...customTsConfig];
```
