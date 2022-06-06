import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve"; // 告诉 Rollup 如何查找外部模块
// import typescript from "@rollup/plugin-typescript";
// import buble from "@rollup/plugin-buble";
import { DEFAULT_EXTENSIONS } from "@babel/core";
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs"; // 用来将 CommonJS 转换成 ES2015 模块的
import postcss from "rollup-plugin-postcss";
import url from "@rollup/plugin-url";
// import assets from "postcss-assets";
import postcssURL from "postcss-url"; // 处理css里的静态资源，重命名及其路径问题
import path from "path";

const pkgPath = process.cwd();
const pkg = require(resolvePkgPath("package.json"));
console.log(pkg);
const pkgBuildOptions = pkg.buildOptions;
// @ui/pkg => pkg
const pkgName = /.+\/(.+)/.exec(pkg.name)[1];
const pkgCompilerEntry = resolvePkgPath("src/index.ts");
const pkgOutputDir = resolvePkgPath("dist");
// @ui/pkg => ui
const globalScopePath = /@(\w+?)\//.exec(pkg.name)[1];
const globalDistOutputDir = absoluteFilePath(
  "dist",
  globalScopePath,
  `${pkgName}-${pkg.version}`
);

function resolvePkgPath(...relativePath) {
  return path.join(pkgPath, ...relativePath);
}

function absoluteFilePath(...relativePath) {
  return path.join(__dirname, ...relativePath);
}

const multiBuildTask = [];

const sharedConfig = {
  external: ["jquery"]
};

const sharedOutputConfig = {
  globals: {
    jquery: "$"
  }
};

const sharedPlugins = ({ outputDir, tsCompilerOptions = {} }) => [
  resolve({
    moduleDirectories: ["node_modules"]
  }),
  commonjs(),
  typescript({
    useTsconfigDeclarationDir: false,
    tsconfig: absoluteFilePath("tsconfig.json"),
    tsconfigOverride: {
      // compilerOptions: {
      //   declaration,
      //   declarationDir: path.join(outputDir, "types")
      // },
      // include: [resolvePkgPath()],
      compilerOptions: tsCompilerOptions
    }
  }),
  postcss({
    modules: true,
    // extract: true,
    plugins: [
      postcssURL([
        {
          url: "inline",
          fallback: "copy",
          // 4kb
          maxSize: 4,
          assetsPath: path.join(outputDir, "img"),
          useHash: true,
          hashOptions: {
            // 末尾追加4hash值
            shrink: 4,
            append: true
          }
        },
        {
          url: asset => {
            return asset.url.replace(
              /(.+?)img/,
              `//resource.172tt.com/core/${globalScopePath}/${pkgName}-${pkg.version}/img`
            );
          },
          multi: true
        }
      ])
    ]
  }),
  url({
    // 4kb
    limit: 4 * 1024,
    fileName: "[dirname][name]_[hash][extname]",
    publicPath: `//resource.172tt.com/core/${globalScopePath}/${pkgName}-${pkg.version}/`
  })
];

const ESAndCJSTask = outputDir => ({
  input: pkgCompilerEntry,
  output: [
    {
      format: "cjs",
      file: path.join(outputDir, `${pkgName}.cjs.js`),
      ...sharedOutputConfig
    },
    {
      format: "es",
      file: path.join(outputDir, `${pkgName}.esm.js`),
      ...sharedOutputConfig
    }
  ],
  plugins: sharedPlugins({
    outputDir,
    tsCompilerOptions: {
      declaration: true,
      declarationDir: path.join(outputDir, "types")
    }
  }),
  ...sharedConfig
});

const IIFETask = outputDir => ({
  input: pkgCompilerEntry,
  output: [
    {
      format: "iife",
      file: path.join(outputDir, `${pkgName}.global.js`),
      name: pkgBuildOptions.name,
      ...sharedOutputConfig
    }
  ],
  plugins: sharedPlugins({
    outputDir
  }).concat([
    babel({
      // exclude: "node_modules/**",
      configFile: absoluteFilePath("babel.config.js"),
      babelHelpers: "runtime",
      // runtimeHelpers: true,
      extensions: [...DEFAULT_EXTENSIONS, ".ts"]
    })
  ]),
  ...sharedConfig
});

// 用于正式的npm包发布构建
if (process.env.NODE_ENV.includes("prod")) {
  multiBuildTask.push(ESAndCJSTask(pkgOutputDir));
  multiBuildTask.push(IIFETask(pkgOutputDir));
}

// 用户纯静态文件构建
// multiBuildTask.push(ESAndCJSTask(globalDistOutputDir));
multiBuildTask.push(IIFETask(globalDistOutputDir));

export default multiBuildTask;
