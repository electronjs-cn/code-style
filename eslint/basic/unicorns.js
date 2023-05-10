module.exports = {
    plugins: [
        "unicorn",
    ],
    "rules": {
        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/better-regex.md
         */
        "unicorn/better-regex": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/catch-error-name.md
         */
        "unicorn/catch-error-name": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-destructuring.md
         */
        "unicorn/consistent-destructuring": "off",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/custom-error-definition.md
         */
        "unicorn/custom-error-definition": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/empty-brace-spaces.md
         */
        "unicorn/empty-brace-spaces": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/error-message.md
         */
        "unicorn/error-message": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/escape-case.md
         */
        "unicorn/escape-case": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-abusive-eslint-disable.md
         */
        "unicorn/no-abusive-eslint-disable": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-callback-reference.md
         */
        "unicorn/no-array-callback-reference": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-for-each.md
         */
        "unicorn/no-array-for-each": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-method-this-argument.md
         */
        "unicorn/no-array-method-this-argument": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-await-expression-member.md
         */
        "unicorn/no-await-expression-member": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-for-loop.md
         */
        "unicorn/no-for-loop": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-instanceof-array.md
         */
        "unicorn/no-instanceof-array": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-remove-event-listener.md
         */
        "unicorn/no-invalid-remove-event-listener": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-new-array.md
         */
        "unicorn/no-new-array": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-new-buffer.md
         */
        "unicorn/no-new-buffer": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-typeof-undefined.md
         */
        "unicorn/no-typeof-undefined": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-fallback-in-spread.md
         */
        "unicorn/no-useless-fallback-in-spread": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-promise-resolve-reject.md
         */
        "unicorn/no-useless-promise-resolve-reject": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-spread.md
         */
        "unicorn/no-useless-spread": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-switch-case.md
         */
        "unicorn/no-useless-switch-case": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-zero-fractions.md
         */
        "unicorn/no-zero-fractions": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/number-literal-case.md
         */
        "unicorn/number-literal-case": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/numeric-separators-style.md
         */
        "unicorn/numeric-separators-style": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-find.md
         */
        "unicorn/prefer-array-find": ["error", {
            checkFromLast: true,
        }],

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat.md
         */
        "unicorn/prefer-array-flat": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat-map.md
         */
        "unicorn/prefer-array-flat-map": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-some.md
         */
        "unicorn/prefer-array-some": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-at.md
         */
        "unicorn/prefer-at": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-code-point.md
         */
        "unicorn/prefer-code-point": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-date-now.md
         */
        "unicorn/prefer-date-now": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-default-parameters.md
         */
        "unicorn/prefer-default-parameters": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-append.md
         */
        "unicorn/prefer-dom-node-append": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-dataset.md
         */
        "unicorn/prefer-dom-node-dataset": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-remove.md
         */
        "unicorn/prefer-dom-node-remove": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-text-content.md
         */
        "unicorn/prefer-dom-node-text-content": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-export-from.md
         */
        "unicorn/prefer-export-from": ["error", {
            ignoreUsedVariables: true,
        }],

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-includes.md
         */
        "unicorn/prefer-includes": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-keyboard-event-key.md
         */
        "unicorn/prefer-keyboard-event-key": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-logical-operator-over-ternary.md
         */
        "unicorn/prefer-logical-operator-over-ternary": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-math-trunc.md
         */
        "unicorn/prefer-math-trunc": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-modern-dom-apis.md
         */
        "unicorn/prefer-modern-dom-apis": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-modern-math-apis.md
         */
        "unicorn/prefer-modern-math-apis": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-negative-index.md
         */
        "unicorn/prefer-negative-index": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-protocol.md
         */
        "unicorn/prefer-node-protocol": "off",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-number-properties.md
         */
        "unicorn/prefer-number-properties": ["error", {
            checkInfinity: false,
        }],

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-spread.md
         */
        "unicorn/prefer-spread": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-starts-ends-with.md
         */
        "unicorn/prefer-string-starts-ends-with": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-trim-start-end.md
         */
        "unicorn/prefer-string-trim-start-end": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-switch.md
         */
        "unicorn/prefer-switch": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/switch-case-braces.md
         */
        "unicorn/switch-case-braces": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/text-encoding-identifier-case.md
         */
        "unicorn/text-encoding-identifier-case": "error",

        /**
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/throw-new-error.md
         */
        "unicorn/throw-new-error": "error",
    },
};
