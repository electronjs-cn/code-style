module.exports = {
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        extraFileExtensions: [".json"]
    },

    parser: "@typescript-eslint/parser",

    extends: [
        "@electronjs-cn/eslint-config-basic",
    ],

    plugins: [
        "@typescript-eslint",
    ],

    overrides: [
        {
            files: ["*.test.ts", "*.test.js", "*.spec.ts", "*.spec.js"],
            rules: {
                "@typescript-eslint/no-unsafe-call": "off",
                "@typescript-eslint/no-unsafe-member-access": "off",
                "@typescript-eslint/no-this-alias": "off",
                "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
            },
        },
        {
            "files": ["*.ts", "*.mts", "*.cts", "*.tsx"],
            "rules": {
                "@typescript-eslint/explicit-member-accessibility": ["error", {
                    overrides: {
                        accessors: "explicit",
                        constructors: "explicit",
                        methods: "explicit",
                        properties: "explicit",
                        parameterProperties: "explicit",
                    },
                }],
                "@typescript-eslint/explicit-module-boundary-types": "error",
            },
        },
        {
            "files": ["*.json", "*.json5"],
            "rules": {
                "@typescript-eslint/indent": "off",
            }
        }
    ],

    rules: {
        /**
         * https://typescript-eslint.io/rules/adjacent-overload-signatures/
         */
        "@typescript-eslint/adjacent-overload-signatures": "error",

        /**
         * https://typescript-eslint.io/rules/await-thenable/
         */
        "@typescript-eslint/await-thenable": "error",

        /**
         * https://typescript-eslint.io/rules/ban-ts-comment/
         */
        "@typescript-eslint/ban-ts-comment": "off",

        /**
         * https://typescript-eslint.io/rules/ban-types/
         * https://github.com/typescript-eslint/typescript-eslint/issues/2063#issuecomment-675156492
         */
        "@typescript-eslint/ban-types": ["error", {
            extendDefaults: true,
            types: {
                "{}": false
            }
        }],

        /**
         * https://typescript-eslint.io/rules/no-empty-interface/
         */
        "@typescript-eslint/no-empty-interface": "off",

        /**
         * https://typescript-eslint.io/rules/no-explicit-any/
         */
        "@typescript-eslint/no-explicit-any": ["error", {
            ignoreRestArgs: true,
        }],

        /**
         * https://typescript-eslint.io/rules/no-extra-non-null-assertion/
         */
        "@typescript-eslint/no-extra-non-null-assertion": "error",

        /**
         * https://typescript-eslint.io/rules/no-floating-promises/
         */
        "@typescript-eslint/no-floating-promises": "error",

        /**
         * https://typescript-eslint.io/rules/no-for-in-array/
         */
        "@typescript-eslint/no-for-in-array": "error",

        /**
         * https://typescript-eslint.io/rules/no-inferrable-types/
         */
        "@typescript-eslint/no-inferrable-types": "error",

        /**
         * https://typescript-eslint.io/rules/no-misused-new/
         */
        "@typescript-eslint/no-misused-new": "error",

        /**
         * https://typescript-eslint.io/rules/no-misused-promises/
         */
        "@typescript-eslint/no-misused-promises": ["error", {
            checksVoidReturn: {
                arguments: false,
            },
        }],

        /**
         * https://typescript-eslint.io/rules/no-namespace/
         */
        "@typescript-eslint/no-namespace": "error",

        /**
         * https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain/
         */
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",

        /**
         * https://typescript-eslint.io/rules/no-non-null-assertion/
         */
        "@typescript-eslint/no-non-null-assertion": "off",

        /**
         * https://typescript-eslint.io/rules/no-unnecessary-type-assertion/
         */
        "@typescript-eslint/no-unnecessary-type-assertion": "error",

        /**
         * https://typescript-eslint.io/rules/no-unnecessary-type-constraint/
         */
        "@typescript-eslint/no-unnecessary-type-constraint": "error",

        /**
         * https://typescript-eslint.io/rules/no-unsafe-argument/
         */
        "@typescript-eslint/no-unsafe-argument": "off",

        /**
         * https://typescript-eslint.io/rules/no-unsafe-assignment/
         */
        "@typescript-eslint/no-unsafe-assignment": "off",

        /**
         * https://typescript-eslint.io/rules/no-unsafe-call/
         */
        "@typescript-eslint/no-unsafe-call": "off",

        /**
         * https://typescript-eslint.io/rules/no-unsafe-member-access/
         */
        "@typescript-eslint/no-unsafe-member-access": "off",

        /**
         * https://typescript-eslint.io/rules/no-unsafe-return/
         */
        "@typescript-eslint/no-unsafe-return": "off",

        /**
         * https://typescript-eslint.io/rules/prefer-as-const/
         */
        "@typescript-eslint/prefer-as-const": "error",

        /**
         * https://typescript-eslint.io/rules/restrict-plus-operands/
         */
        "@typescript-eslint/restrict-plus-operands": "error",

        /**
         * https://typescript-eslint.io/rules/restrict-template-expressions/
         */
        "@typescript-eslint/restrict-template-expressions": ["error", {
            allowNumber: true,
            allowBoolean: true,
            allowAny: true,
            allowNullish: true,
            allowRegExp: true,
        }],

        /**
         * https://typescript-eslint.io/rules/unbound-method/
         */
        "@typescript-eslint/unbound-method": "error",

        /**
         * https://typescript-eslint.io/rules/consistent-type-exports/
         */
        "@typescript-eslint/consistent-type-exports": "error",

        /**
         * https://typescript-eslint.io/rules/consistent-type-imports/
         */
        "@typescript-eslint/consistent-type-imports": "error",

        /**
         * https://typescript-eslint.io/rules/explicit-function-return-type/
         */
        "@typescript-eslint/explicit-function-return-type": "off",

        /**
         * https://typescript-eslint.io/rules/explicit-member-accessibility/
         */
        "@typescript-eslint/explicit-member-accessibility": "off",

        /**
         * https://typescript-eslint.io/rules/explicit-module-boundary-types/
         */
        "@typescript-eslint/explicit-module-boundary-types": "off",

        /**
         * https://typescript-eslint.io/rules/no-duplicate-enum-values/
         */
        "@typescript-eslint/no-duplicate-enum-values": "error",

        /**
         * https://typescript-eslint.io/rules/no-array-constructor/
         */
        "no-array-constructor": "off",
        "@typescript-eslint/no-array-constructor": "error",

        /**
         * https://typescript-eslint.io/rules/no-empty-function/
         */
        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": ["warn", {
            "allow": [
                "private-constructors",
                "protected-constructors",
                "decoratedFunctions",
                "overrideMethods",
            ],
        }],

        /**
         * https://typescript-eslint.io/rules/no-extra-semi/
         */
        "no-extra-semi": "off",
        "@typescript-eslint/no-extra-semi": "error",

        /**
         * https://typescript-eslint.io/rules/no-implied-eval/
         */
        "no-implied-eval": "off",
        "@typescript-eslint/no-implied-eval": "error",

        /**
         * https://typescript-eslint.io/rules/no-loss-of-precision/
         */
        "no-loss-of-precision": "off",
        "@typescript-eslint/no-loss-of-precision": "error",

        /**
         * https://typescript-eslint.io/rules/no-unused-vars/
         */
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error", {
            args: "after-used",
            ignoreRestSiblings: true,
            argsIgnorePattern: "^_",
            destructuredArrayIgnorePattern: "^_",
            caughtErrors: "all",
            caughtErrorsIgnorePattern: "^_",
        }],

        /**
         * https://typescript-eslint.io/rules/require-await/
         */
        "require-await": "off",
        "@typescript-eslint/require-await": "error",

        /**
         * https://typescript-eslint.io/rules/default-param-last/
         */
        "default-param-last": "off",
        "@typescript-eslint/default-param-last": "error",

        /**
         * https://typescript-eslint.io/rules/no-dupe-class-members/
         */
        "no-dupe-class-members": "off",
        "@typescript-eslint/no-dupe-class-members": "error",

        /**
         * https://typescript-eslint.io/rules/no-use-before-define/
         */
        "@typescript-eslint/no-use-before-define": "off",

        // https://github.com/antfu/eslint-config/blob/main/packages/typescript/index.js#L78
        "indent": "off",
        "@typescript-eslint/indent": ["error", 4, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            MemberExpression: 1,
            FunctionDeclaration: { parameters: 1, body: 1 },
            FunctionExpression: { parameters: 1, body: 1 },
            CallExpression: { arguments: 1 },
            ArrayExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            flatTernaryExpressions: false,
            ignoreComments: false,
            ignoredNodes: [
              "TemplateLiteral *",
              "JSXElement",
              "JSXElement > *",
              "JSXAttribute",
              "JSXIdentifier",
              "JSXNamespacedName",
              "JSXMemberExpression",
              "JSXSpreadAttribute",
              "JSXExpressionContainer",
              "JSXOpeningElement",
              "JSXClosingElement",
              "JSXFragment",
              "JSXOpeningFragment",
              "JSXClosingFragment",
              "JSXText",
              "JSXEmptyExpression",
              "JSXSpreadChild",
              "TSTypeParameterInstantiation",
              "FunctionExpression > .params[decorators.length > 0]",
              "FunctionExpression > .params > :matches(Decorator, :not(:first-child))",
              "ClassBody.body > PropertyDefinition[decorators.length > 0] > .key",
            ],
            offsetTernaryExpressions: true,
          }],
    },
};
