import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import path from "path";
export default {
  input: path.resolve(__dirname, "./packages/shared/pkg/src/index.js"),
  output: {
    file: "bundle.js",
    format: "iife",
    name: "Test"
  },
  plugins: [
    resolve({
      moduleDirectories: ["../../../node_modules"]
    }),
    commonjs(),
    babel({
      configFile: path.resolve(__dirname, "babel.config.js"),
      exclude: "node_modules/**",
      babelHelpers: "runtime"
    })
  ]
};
