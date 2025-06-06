# render.js

[![DeepWiki に質問する](https://deepwiki.com/badge.svg)](https://deepwiki.com/yone1130/render.js)

[> Read in English](./README.md)

## Overview

**render.js** は、TypeScript と JavaScript で利用できるHTMLレンダリングライブラリです。

## 利用方法

コード例 (App Creator):
```js
import { Render, RenderApp, RenderComponent } from 'https://cdn.yoneyo.com/scripts/render@1.0.0/render.js';

class Greeting extends RenderComponent {
    constructor() {
        super();
        this.title = "render.js";
        this.message = "Hello World";
    }

    build() {
        const { $h1, $p } = this.render;

        return super.build({
            children: [
                $h1({
                    id: "title",
                    textContent: this.title,
                }),
                $p({
                    id: "message",
                    textContent: this.message,
                }),
            ]
        });
    }
}

class MyApp extends RenderApp {
    constructor() { super(); }

    build() {
        return super.build({
            children: [
                new Greeting(),
            ]
        });
    }
}

const render = new Render();

render.runApp({
    root: document.body,
    app: new MyApp(),
});
```

またはレンダリングのみ (Builder):
```js
import { Render } from 'https://cdn.yoneyo.com/scripts/render@1.0.0/render.js';

const render = new Render();
const root = document.getElementById("root");

function app() {
    const title = "render.js";
    const message = "Hello World";

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

### サンプルコード

- **サンプルコード: [examples/](./examples/).**

### リソース

- **ドキュメント: https://render-js.yoneyo.com/ .**
- **ウェブデモ: https://render-js.yoneyo.com/examples/ .**

## 開発

### 1. パッケージをインストールする

```bash
npm install
```

### 2. ビルド

JavaScript にコンパイルします。

```bash
npm run build
```

コンパイルされたJavaScriptファイルが `dist/` ディレクトリに出力されます。

## License

[MIT License](./LICENSE) のもとでライセンスされます。

Copyright &copy; 2025 よね/Yone
