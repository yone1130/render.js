# render.js

[> 日本語で読む](./README_JP.md)

## Overview

**render.js** is a library of rendering HTML elements for TypeScript and JavaScript.

## Usage

### 1. import from CDN

URL: https://cdn.yoneyo.com/scripts/render/render-v1.0.0.mjs

```js
import { Render } from 'https://cdn.yoneyo.com/scripts/render/render-v1.0.0.mjs';
```

or

```html
<script src="https://cdn.yoneyo.com/scripts/render/render-v1.0.0.mjs"></script>
```

### 2. Use

A sample code:
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

### More Resources

- **Documents: https://render-js.yoneyo.com/ .**
- **Demos: https://render-js.yoneyo.com/examples/ .**
- **Example codes: [examples/](./examples/).**

## Build

### 1. Install TypeScript

```bash
npm install typescript
```

### 2. Compile to JavaScript

```bash
npx tsc
```

Emitted JavaScript files will be output to the `dist/` directory.

## License

Licensed under the MIT License.

Copyright (C) 2025 よね/Yone
