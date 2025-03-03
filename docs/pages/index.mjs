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

import { Render } from 'https://cdn.yoneyo.com/scripts/render-v1.0.0.mjs';


const render = new Render();
const root = document.getElementById("root");


const page = () => {
    let title = "render.js";

    return [
        render.$div({
            id: "page",
            className: "page",
            children: [
                render.$section({
                    className: "section",
                    children: [
                        render.$h1({
                            id: "title",
                            className: "title section__title",
                            innerText: title,
                        }),
                        render.$p({
                            id: "about",
                            className: "about",
                            innerText: "Welcome to render.js Documents!\nreder.js is a library of rendering HTML elements for JavaScript.",
                        }),
                    ]
                }),
                render.$section({
                    className: "section",
                    children: [
                        /* render.$h2({
                            className: "title section__title",
                            innerText: title,
                        }),*/
                        render.$p({
                            className: "description",
                            innerText: "In preparation, Comming soon.",
                        }),
                    ]
                }),
            ],
        }),
    ];
};


render.build({
    target: root,
    children: page(),
});
