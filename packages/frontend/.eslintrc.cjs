module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "_overrides": [],
    get "overrides"() {
        return this["_overrides"];
    },
    set "overrides"(value) {
        this["_overrides"] = value;
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        tsconfigRootDir: __dirname,
        project: ['tsconfig.eslint.json'],
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
    }
}
