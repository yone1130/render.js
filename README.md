# render.js

## Overview

A library of rendering HTML elements for JavaScript.

## Usage

### 1. import from CDN

URL: https://cdn.yoneyo.com/scripts/render-v1.0.0.mjs

```js
import { Render } from 'https://cdn.yoneyo.com/scripts/render-v1.0.0.mjs';
```

or

```html
<script src="https://cdn.yoneyo.com/scripts/render-v1.0.0.mjs"></script>
```

### 2. Use

```js
const render = new Render();
const root = document.getElementById("root");

const app = () => {
    let title = "render.js";
    let message = "Hello World";

    return render.$div({
        id: "app",
        children: [
            render.$h1({
                id: "title",
                innerText: title,
            }),
            render.$p({
                id: "message",
                innerText: message,
            });
        ]
    });
};

render.build({
    target: root,
    children: app(),
});
```

**More example codes is in [examples/](./examples/).**

## License

Licensed under the MIT License.

Copyright (C) 2025 よね/Yone
