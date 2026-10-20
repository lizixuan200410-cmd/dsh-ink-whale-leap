# 水墨鲸跃 · Ink Whale Leap

一个 DeepSeek Harness（DSH）插件：网页加载时，在界面上播放一段水墨风的开场动画——鲸鱼从静墨中跃出水面，随后自行淡出。

![水墨鲸跃](assets/launch.png)

[English](README.md)

## 画面

整窗覆盖的一层水墨宣纸：鲸鱼从水面下升起，三圈墨痕从水线荡开，几点墨滴向上散落，`DeepSeek Harness` 字标与红色「鲸」印落定，下面一行「鲸跃 · 与你同游」。

- 页面加载 3.95 秒后开始淡出，4.75 秒时从 DOM 移除。
- 按 `Esc` 可立即关闭。
- 系统开启「减少动态效果」（`prefers-reduced-motion: reduce`）时，动画关闭。
- 若加载时标签页处于后台，会等标签页可见后再播（最多等 15 秒）。
- 纯装饰层：`aria-hidden="true"`、`pointer-events: none`，不接收点击，也不抢占键盘焦点。

![墨痕从水线荡开](assets/rings.png)

## 安装

插件在 DSH 插件市场上架后，可在「设置 → 插件」中安装。命令行：

```
dsh plugin add dsh-ink-whale-leap
```

包里声明了 `dsh.bundle.patch`，安装时只会新增一行 loader 记录，没有需要批准的前端包。

## 不安装也能看

用浏览器打开本仓库里的 `preview.html`，它会加载 `splash.js`，在空白页上直接播放这段动画。

## 实现方式

这是一个纯宿主（host）插件：监听 `webserver/index-inject` 事件，往里推一行内联 `<script>`；同时通过 `webServer` 服务在 `/ink-whale/splash.js` 提供动画源码。

它刻意没有客户端入口：在 DSH 里，前端包激活失败会中断网页启动，一个开场动画不值得冒这个风险。激活过程的每一步都包在 `try/catch` 里——服务缺失或注入失败时，应用照常运行，而不是被一个装饰插件拖垮。

动画本身是一个自包含的 IIFE（`splash.js`），CSS 与 SVG 全部内联，不发任何网络请求，不依赖字体或图片。

## 配置

无。没有设置页，也没有选项。

## 卸载

与其他插件相同：在市场里卸载，或执行 `dsh plugin remove dsh-ink-whale-leap`。

## 说明

- 每次页面加载播放一次，每个加载了网页的窗口各播一次——它不是「仅首次安装」的欢迎页。
- 只在网页层之上作画，不改变桌面窗口本身。

## 许可证

MIT
