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

import { Render } from '../../src/render.mjs';


const render = new Render();
const root = document.getElementById("root");


const app = () => {
    let title = "render.js";

    return [
        render.$div({
            id: "app",
            children: [
                render.$h1({
                    id: "title",
                    innerText: title,
                }),
                render.$p({
                    id: "about",
                    innerText: "Welcome to render.js Documents! reder.js is a library of rendering HTML elements for JavaScript.",
                }),
            ],
        }),
    ];
};


render.build({
    target: root,
    children: app(),
});
