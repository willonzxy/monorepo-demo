#!/usr/bin/env node

const axios = require("axios");

const path = require("path");

const pkgPath = process.cwd();

const pkg = require(resolvePkgPath("package.json"));

function resolvePkgPath(...relativePath) {
  return path.join(pkgPath, ...relativePath);
}

axios.post(
  "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=620914a1-264c-4795-8880-26bf7cda9504",
  {
    msgtype: "text",
    text: {
      content: `好消息好消息，有组件更新啦\n[组件]:${pkg.name}\n[版本]:${pkg.version}\n[作者]:${pkg.author}\n[描述]:${pkg.description}`
    }
  }
);
