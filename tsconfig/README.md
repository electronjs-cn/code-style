# TSConfig code-style

## Install

```bash
pnpm add typescript -D
pnpm add @electronjs-cn/tsconfig -D
```

## Configuring

### Node Project

tsconfig.json:

```json
{
    "extends": "@electronjs-cn/tsconfig/tsconfig.node.json"
}
```

### React Project

tsconfig.json:

```json
{
    "extends": "@electronjs-cn/tsconfig/tsconfig.react.json"
}
```

### Electron Project

tsconfig.json:

```json
{
    "extends": "@electronjs-cn/tsconfig/tsconfig.electron.json"
}
```
