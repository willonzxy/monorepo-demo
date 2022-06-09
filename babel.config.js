const path = require("path");
module.exports = {
  presets: [
    // ["@babel/preset-typescript"],
    [
      "@babel/preset-env",
      {
        // 可以entry或者usage
        useBuiltIns: "usage",
        corejs: 3
      }
    ]
  ],
  plugins: [["@babel/plugin-transform-runtime"]]
};
