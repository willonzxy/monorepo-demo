const path = require("path");
module.exports = {
  presets: [
    // ["@babel/preset-typescript"],
    [
      "@babel/preset-env",
      {
        // 可以entry或者usage
        useBuiltIns: "entry",
        corejs: 3
      }
    ]
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: false,
        version: require("@babel/runtime-corejs3/package.json").version,
        absoluteRuntime: path.dirname(
          require.resolve("@babel/runtime-corejs3/package.json")
        )
      }
    ]
  ]
};
