# render.js

[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/yone1130/render.js)

[> 日本語で読む](./README_JP.md)

## Overview

**render.js** is a library of rendering HTML elements for TypeScript and JavaScript.

## Usage

Example code (with App Creator):
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

or just rendering (with Builder):
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

### Example codes

- **Example codes: [examples/](./examples/).**

### Resources

- **Documents: https://render-js.yoneyo.com/ .**
- **Demos: https://render-js.yoneyo.com/examples/ .**

## Development

### 1. Install Packages

```bash
npm install
```

### 2. Build

Compile to JavaScript.

```bash
npm run build
```

Emitted JavaScript files will be output to the `dist/` directory.

## License

Licensed under the [MIT License](./LICENSE).

Copyright &copy; 2025 よね/Yone
