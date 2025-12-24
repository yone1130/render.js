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

import { Render, RenderApp, RenderComponent } from 'https://cdn.yoneyo.com/scripts/render@1.0.0/render.js';

class Greeting extends RenderComponent {
    constructor() {
        super({
            id: "greeting",
        });

        this.#title = "render.js";
        this.#message = "Hello World! with App Creator.";
    }

    /**
     * @param {{ ref: * }}
     * @returns {HTMLElement[]}
     */
    build({ ref }) {
        const { $h1, $p } = this.render;

        return super.build({
            ref: ref,
            children: [
                $h1({
                    id: "title",
                    textContent: this.#title,
                }),
                $p({
                    id: "message",
                    textContent: this.#message,
                }),
            ]
        });
    }

    /**
     * @type {string}
     */
    #title;

    /**
     * @type {string}
     */
    #message;
}

class MyApp extends RenderApp {
    constructor() {
        super();
    }

    /**
     * @param {{ ref: * }}
     * @returns {HTMLElement[]}
     */
    build({ ref }) {
        return super.build({
            ref: ref,
            children: [
                new Greeting(),
            ]
        });
    }
}

/**
 * @type {Render}
 */
const render = new Render();

render.runApp({
    root: document.body,
    app: new MyApp(),
});
