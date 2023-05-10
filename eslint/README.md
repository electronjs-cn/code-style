# EsLint code-style

## JavaScript project

### Install

```bash
pnpm add eslint -D
pnpm add @electronjs-cn/eslint-config-basic -D
```

## Configuring

### Create .eslintrc.js file

```js
module.exports = {
    extends: [
        "@electronjs-cn/eslint-config-basic",
    ],
};
```

## TypeScript Project

### Install

```bash
pnpm add eslint typescript -D
pnpm add @electronjs-cn/eslint-config-ts -D

# If is node project, please execute the following command
pnpm add @types/node -D
```

### Create .eslintrc.js file

```js
module.exports = {
    parserOptions: {
        project: "./tsconfig.json",
    },

    extends: [
        "@electronjs-cn/eslint-config-ts",
    ],
};
```

## React Project

### Install

```bash
pnpm add eslint typescript -D
pnpm add @electronjs-cn/eslint-config-react -D
```

### Create .eslintrc.js file

```js
module.exports = {
    parserOptions: {
        project: "./tsconfig.json",
    },

    extends: [
        "@electronjs-cn/eslint-config-react",
    ],
};
```
