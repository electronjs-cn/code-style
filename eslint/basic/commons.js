module.exports = {
    rules: {
        /**
         * https://eslint.org/docs/latest/rules/constructor-super
         */
        "constructor-super": "error",

        /**
         * https://eslint.org/docs/latest/rules/getter-return
         */
        "getter-return": ["error", {
            allowImplicit: true,
        }],

        /**
         * https://eslint.org/docs/latest/rules/no-async-promise-executor
         */
        "no-async-promise-executor": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-class-assign
         */
        "no-class-assign": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-compare-neg-zero
         */
        "no-compare-neg-zero": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-cond-assign
         */
        "no-cond-assign": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-const-assign
         */
        "no-const-assign": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-constant-binary-expression
         */
        "no-constant-binary-expression": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-constant-condition
         */
        "no-constant-condition": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-constructor-return
         */
        "no-constructor-return": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-debugger
         */
        "no-debugger": "warn",

        /**
         * https://eslint.org/docs/latest/rules/no-dupe-args
         */
        "no-dupe-args": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-dupe-class-members
         */
        "no-dupe-class-members": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-dupe-else-if
         */
        "no-dupe-else-if": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-dupe-keys
         */
        "no-dupe-keys": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-duplicate-case
         */
        "no-duplicate-case": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-duplicate-imports
         */
        "no-duplicate-imports": "off",

        /**
         * https://eslint.org/docs/latest/rules/no-empty-character-class
         */
        "no-empty-character-class": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-empty-pattern
         */
        "no-empty-pattern": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-ex-assign
         */
        "no-ex-assign": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-fallthrough
         */
        "no-fallthrough": ["error", {
            allowEmptyCase: true,
        }],

        /**
         * https://eslint.org/docs/latest/rules/no-func-assign
         */
        "no-func-assign": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-import-assign
         */
        "no-import-assign": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-inner-declarations
         */
        "no-inner-declarations": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-invalid-regexp
         */
        "no-invalid-regexp": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-irregular-whitespace
         */
        "no-irregular-whitespace": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-loss-of-precision
         */
        "no-loss-of-precision": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-new-symbol
         */
        "no-new-symbol": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-obj-calls
         */
        "no-obj-calls": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-prototype-builtins
         */
        "no-prototype-builtins": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-self-assign
         */
        "no-self-assign": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-self-compare
         */
        "no-self-compare": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-setter-return
         */
        "no-setter-return": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-sparse-arrays
         */
        "no-sparse-arrays": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-this-before-super
         */
        "no-this-before-super": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-undef
         */
        "no-undef": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-unexpected-multiline
         */
        "no-unexpected-multiline": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-unreachable
         */
        "no-unreachable": "warn",

        /**
         * https://eslint.org/docs/latest/rules/no-unsafe-finally
         */
        "no-unsafe-finally": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-unsafe-negation
         */
        "no-unsafe-negation": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
         */
        "no-unsafe-optional-chaining": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-unused-private-class-members
         */
        "no-unused-private-class-members": "warn",

        /**
         * https://eslint.org/docs/latest/rules/no-unused-vars
         */
        "no-unused-vars": ["error", {
            args: "after-used",
            ignoreRestSiblings: true,
            argsIgnorePattern: "^_",
            destructuredArrayIgnorePattern: "^_",
            caughtErrors: "all",
            caughtErrorsIgnorePattern: "^_",
        }],

        /**
         * https://eslint.org/docs/latest/rules/use-isnan
         */
        "use-isnan": "error",

        /**
         * https://eslint.org/docs/latest/rules/valid-typeof
         */
        "valid-typeof": "error",

        /**
         * https://eslint.org/docs/latest/rules/capitalized-comments
         */
        "capitalized-comments": ["off"],

        /**
         * https://eslint.org/docs/latest/rules/curly
         */
        "curly": ["error", "all"],

        /**
         * https://eslint.org/docs/latest/rules/default-param-last
         */
        "default-param-last": ["error"],

        /**
         * https://eslint.org/docs/latest/rules/eqeqeq
         */
        "eqeqeq": ["error", "always", {
            null: "ignore",
        }],

        /**
         * https://eslint.org/docs/latest/rules/func-names
         */
        "func-names": ["error", "always"],

        /**
         * https://eslint.org/docs/latest/rules/grouped-accessor-pairs
         */
        "grouped-accessor-pairs": ["error", "anyOrder"],

        /**
         * https://eslint.org/docs/latest/rules/max-nested-callbacks
         */
        "max-nested-callbacks": ["error", {
            max: 10,
        }],

        /**
         * https://eslint.org/docs/latest/rules/no-alert
         */
        "no-alert": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-caller
         */
        "no-caller": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-console
         */
        "no-console": "off",

        /**
         * https://eslint.org/docs/latest/rules/no-empty
         */
        "no-empty": "warn",

        /**
         * https://eslint.org/docs/latest/rules/no-empty-function
         */
        "no-empty-function": "warn",

        /**
         * https://eslint.org/docs/latest/rules/no-eval
         */
        "no-eval": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-extra-boolean-cast
         */
        "no-extra-boolean-cast": ["error", {
            enforceForLogicalOperands: true,
        }],

        /**
         * https://eslint.org/docs/latest/rules/no-extra-semi
         */
        "no-extra-semi": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-global-assign
         */
        "no-global-assign": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-implicit-coercion
         */
        "no-implicit-coercion": ["error", {
            allow: ["!!"],
        }],

        /**
         * https://eslint.org/docs/latest/rules/no-implied-eval
         */
        "no-implied-eval": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-labels
         */
        "no-labels": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-new
         */
        "no-new": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-new-func
         */
        "no-new-func": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
         */
        "no-nonoctal-decimal-escape": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-octal
         */
        "no-octal": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-proto
         */
        "no-proto": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-return-assign
         */
        "no-return-assign": ["error", "always"],

        /**
         * https://eslint.org/docs/latest/rules/no-shadow-restricted-names
         */
        "no-shadow-restricted-names": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-useless-escape
         */
        "no-useless-escape": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-var
         */
        "no-var": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-with
         */
        "no-with": "error",

        /**
         * https://eslint.org/docs/latest/rules/prefer-const
         */
        "prefer-const": "error",

        /**
         * https://eslint.org/docs/latest/rules/prefer-object-has-own
         */
        "prefer-object-has-own": "error",

        /**
         * https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
         */
        "prefer-promise-reject-errors": "error",

        /**
         * https://eslint.org/docs/latest/rules/prefer-rest-params
         */
        "prefer-rest-params": "error",

        /**
         * https://eslint.org/docs/latest/rules/prefer-template
         */
        "prefer-template": "error",

        /**
         * https://eslint.org/docs/latest/rules/require-await
         */
        "require-await": "error",

        /**
         * https://eslint.org/docs/latest/rules/require-yield
         */
        "require-yield": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-multi-str
         */
        "no-multi-str": "error",

        /**
         * https://eslint.org/docs/latest/rules/spaced-comment
         */
        "spaced-comment": ["error", "always", {
            line: {
                exceptions: ["-+"],
            },
            block: {
                exceptions: ["*"],
            },
        }],

        /**
         * https://eslint.org/docs/latest/rules/symbol-description
         */
        "symbol-description": "error",

        /**
         * https://eslint.org/docs/latest/rules/arrow-parens
         */
        "arrow-parens": "error",

        /**
         * https://eslint.org/docs/latest/rules/arrow-spacing
         */
        "arrow-spacing": ["error", {
            "before": true,
            "after": true,
        }],

        /**
         * https://eslint.org/docs/latest/rules/brace-style
         */
        "brace-style": "error",

        /**
         * https://eslint.org/docs/latest/rules/comma-dangle
         */
        "comma-dangle": ["error", "always-multiline"],

        /**
         * https://eslint.org/docs/latest/rules/comma-spacing
         */
        "comma-spacing": "error",

        /**
         * https://eslint.org/docs/latest/rules/comma-style
         */
        "comma-style": "error",

        /**
         * https://eslint.org/docs/latest/rules/computed-property-spacing
         */
        "computed-property-spacing": "error",

        /**
         * https://eslint.org/docs/latest/rules/dot-location
         */
        "dot-location": ["error", "property"],

        /**
         * https://eslint.org/docs/latest/rules/eol-last
         */
        "eol-last": "error",

        /**
         * https://eslint.org/docs/latest/rules/func-call-spacing
         */
        "func-call-spacing": "error",

        /**
         * https://eslint.org/docs/latest/rules/function-call-argument-newline
         */
        "function-call-argument-newline": ["error", "consistent"],

        /**
         * https://eslint.org/docs/latest/rules/indent
         */
        "indent": ["error", 4, {
            SwitchCase: 1,
            offsetTernaryExpressions: true,
        }],

        /**
         * https://eslint.org/docs/latest/rules/jsx-quotes
         */
        "jsx-quotes": "error",

        /**
         * https://eslint.org/docs/latest/rules/key-spacing
         */
        "key-spacing": "error",

        /**
         * https://eslint.org/docs/latest/rules/keyword-spacing
         */
        "keyword-spacing": "error",

        /**
         * https://eslint.org/docs/latest/rules/line-comment-position
         */
        "line-comment-position": "error",

        /**
         * https://eslint.org/docs/latest/rules/linebreak-style
         */
        "linebreak-style": ["error", "unix"],

        /**
         * https://eslint.org/docs/latest/rules/lines-around-comment
         */
        "lines-around-comment": ["off"],

        /**
         * https://eslint.org/docs/latest/rules/lines-between-class-members
         */
        "lines-between-class-members": "off",

        /**
         * https://eslint.org/docs/latest/rules/max-lines
         */
        "max-len": ["error", 180],

        /**
         * https://eslint.org/docs/latest/rules/max-statements-per-line
         */
        "max-statements-per-line": ["error", {
            max: 1,
        }],

        /**
         * https://eslint.org/docs/latest/rules/new-parens
         */
        "new-parens": "error",

        /**
         * https://eslint.org/docs/latest/rules/newline-per-chained-call
         */
        "newline-per-chained-call": ["error", {
            ignoreChainWithDepth: 3,
        }],

        /**
         * https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs
         */
        "no-mixed-spaces-and-tabs": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-multi-spaces
         */
        "no-multi-spaces": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-multiple-empty-lines
         */
        "no-multiple-empty-lines": ["error", {
            max: 2,
        }],

        /**
         * https://eslint.org/docs/latest/rules/no-tabs
         */
        "no-tabs": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-whitespace-before-property
         */
        "no-whitespace-before-property": "error",

        /**
         * https://eslint.org/docs/latest/rules/quotes
         */
        "quotes": "error",

        /**
         * https://eslint.org/docs/latest/rules/rest-spread-spacing
         */
        "rest-spread-spacing": ["error", "never"],

        /**
         * https://eslint.org/docs/latest/rules/semi
         */
        "semi": "error",

        /**
         * https://eslint.org/docs/latest/rules/semi-style
         */
        "semi-style": ["error", "last"],

        /**
         * https://eslint.org/docs/latest/rules/space-before-blocks
         */
        "space-before-blocks": "error",

        /**
         * https://eslint.org/docs/latest/rules/space-before-function-paren
         */
        "space-before-function-paren": ["off"],

        /**
         * https://eslint.org/docs/latest/rules/space-in-parens
         */
        "space-in-parens": "error",

        /**
         * https://eslint.org/docs/latest/rules/no-trailing-spaces
         */
        "no-trailing-spaces": "error",

        /**
         * https://eslint.org/docs/latest/rules/object-curly-newline
         */
        "object-curly-newline": ["error", {
            ObjectExpression: {
                minProperties: 12,
                multiline: true,
                consistent: true,
            },
            ObjectPattern: {
                minProperties: 12,
                multiline: true,
                consistent: true,
            },
            ImportDeclaration: {
                minProperties: 100,
                multiline: true,
                consistent: true,
            },
            ExportDeclaration: {
                minProperties: 5,
                multiline: true,
                consistent: true,
            },
        }],

        /**
         * https://eslint.org/docs/latest/rules/object-property-newline
         */
        "object-property-newline": ["off"],

        /**
         * https://eslint.org/docs/latest/rules/object-curly-spacing
         */
        "object-curly-spacing": ["error", "always"],

        /**
         * https://eslint.org/docs/latest/rules/operator-linebreak
         */
        "operator-linebreak": ["error", "before"],
    },
};
