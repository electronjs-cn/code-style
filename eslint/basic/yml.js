module.exports = {
    extends: [
        "plugin:yml/recommended",
    ],
    overrides: [
        {
            files: ["*.yaml", "*.yml"],
            parser: "yaml-eslint-parser",
            rules: {
                /**
                 * https://ota-meshi.github.io/eslint-plugin-yml/rules/spaced-comment.html
                 */
                "spaced-comment": "off",
                "yml/spaced-comment": "error",
            },
        },
    ],
    rules: {
        /**
         * https://ota-meshi.github.io/eslint-plugin-yml/rules/quotes.html
         */
        "yml/quotes": ["error", {
            prefer: "double",
            avoidEscape: false,
        }],

        /**
         * https://ota-meshi.github.io/eslint-plugin-yml/rules/indent.html
         */
        "indent": "off",
        "yml/indent": ["error", 2],
    },
};
