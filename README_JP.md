# render.js

[> Read in English](./README.md)

## Overview

**render.js** は、TypeScript と JavaScript で利用できるHTMLレンダリングライブラリです。

## 利用方法

### 1. CDNからインポートする

URL: https://cdn.yoneyo.com/scripts/render/render-v1.0.0.mjs

```js
import { Render } from 'https://cdn.yoneyo.com/scripts/render/render-v1.0.0.mjs';
```

または

```html
<script src="https://cdn.yoneyo.com/scripts/render/render-v1.0.0.mjs"></script>
```

### 2. 使う

サンプルコード:
```js
const render = new Render();
const root = document.getElementById("root");

const app = () => {
    let title = "render.js";
    let message = "Hello World";

    return [
        render.$div({
            id: "app",
            children: [
                render.$h1({
                    id: "title",
                    textContent: title,
                }),
                render.$p({
                    id: "message",
                    textContent: message,
                }),
            ],
        }),
    ];
};

render.build({
    target: root,
    children: app(),
});
```

### リソース

- **ドキュメント: https://render-js.yoneyo.com/ .**
- **ウェブデモ: https://render-js.yoneyo.com/examples/ .**
- **サンプルコード: [examples/](./examples/).**

## ビルド

### 1. TypeScript をインストールする

```bash
npm install typescript
```

### 2. JavaScript にコンパイルする

```bash
npx tsc
```

コンパイルされたJavaScriptファイルが `dist/` ディレクトリに出力されます。

## License

[MIT License](./LICENSE) のもとでライセンスされます。

Copyright (C) 2025 よね/Yone
