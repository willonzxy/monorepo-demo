module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: "@typescript-eslint/parser",
  extends: ["plugin:@typescript-eslint/recommended"],
  // parserOptions: {
  //   // sourceType: "es5"
  // },
  plugins: ["@typescript-eslint", "eslint-plugin-prettier"],
  rules: {
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-this-alias": 0,
    "@typescript-eslint/no-unused-vars": 2,
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto"
      }
    ]
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};
