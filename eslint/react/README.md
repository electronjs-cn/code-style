# ESLint code-style

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
