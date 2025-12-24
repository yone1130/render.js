/**!
 * 
 * render.js
 * 
 * Copyright (C) 2025 よね/Yone
 * 
 * Licensed under the MIT License.
 * 
 * https://github.com/yone1130/render.js
 * 
 */

import { Render } from 'https://cdn.yoneyo.com/scripts/render@1.0.0/render.js';

function app({ title, message }) {
    const { $div, $h1, $p } = render;

    return [
        $div({
            id: "app",
            className: "app",
            children: [
                $h1({
                    id: "title",
                    textContent: title,
                }),
                $p({
                    id: "message",
                    textContent: message,
                }),
            ],
        }),
    ];
};

const render = new Render();

render.build({
    target: document.body,
    children: app({
        title: "render.js",
        message: "Hello World!",
    }),
});
