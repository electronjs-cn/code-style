module.exports = {
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },

    settings: {
        react: {
            version: "detect",
        },
    },

    extends: [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "@electronjs-cn/eslint-config-ts",
    ],

    rules: {
        /**
         * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
         */
        "react/react-in-jsx-scope": "off",
    },
};
