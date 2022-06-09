# Snowball 前端组件库

基于 pnpm workspace 搭建的 monorepo 仓库，用于存放小而精的组件资源。

此仓库命令为 snowball 雪球，憧憬着此组件库能像滚雪球一样越滚越大

## 分包

packages 分包

- ui
  - 含静态资源的宣发组件
- shared
  - 放共用的工具函数库

## 技术要求

- 使用 ts 去编写组件库
- 使用 CSS Module,引入样式 class,避免样式冲突
- 如果使用了 es6 及以上的语法，需在入口文件加入以下代码，做兼容性处理

  - 因为 babel 的按需引入 polyfill 有点问题，之后再优化

    ```js
    import "core-js";
    ```

## 组件（包）编写步骤

以 packages/ui/tianti-login 为例

- 新建 tianti-login 文件夹
- pnpm init
- 修改 package.json
  - name 设置为 @ui/tianti-login ( 内网包标识@ + 所处父目录文件夹 ui,以小横杠-和小写英文作为包的命令)（必填）
  - main ，module，files ,scripts 字段内容可以照葫芦画瓢 （必填）
  - buildOptions 为自定义字段
    - buildOptions.name （必填）对应着组件在浏览器环境挂载到全局的变量名
- 包编译入口必须为 src/index.ts

## 增量部署

- 推送 release 分支，
- 此操作会将组件以 npm 包的形式发布到源，
- 也会构建出组件的浏览器执行版本，然后部署到 10.17.2.212 机器上
- 同时也可以拿到ftp发版链接，之后线上发版到 op 走 tianti-events 前端发版流程

## 资源引用

- script 标签引入
  - 资源在 resource.172tt.com/snowball/下
  - 如 tianti-login 这个组件
  - ```html
    <script src="//resource.172tt.com/snowball/ui/tianti-login-2.2.0/tianti-login.global.js"></script>
    ```
- 非本仓库以工程化方式引入 npm 包资源

  - 方式 1：切换内网镜像源下载，步骤如下：
    - 安装 nrm,切换 npm 镜像源到内网
      - ```bash
        npm i nrm -g
        nrm add snowballnpm http://repo.bt/repository/npm-local/
        nrm use snowballnpm
        ```
    - 安装包
      - ```bash
        npm install <pkg-name>
        npm install @ui/tianti-login
        ```
  - 方式 2：npm link

- 在本仓库内相互引用
  - 打开项目根目录
  - ```bash
    #以tianti-login添加 @shared/util 依赖为例
    pnpm add @shared/util -F @ui/tianti-login
    ```
