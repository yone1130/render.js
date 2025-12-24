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

class CounterPage extends RenderComponent {
    constructor() {
        super("counter");
    }

    get count() {
        return this.#count;
    }

    set count(newCount) {
        this.#count = newCount;
        this.rendering();
    }

    build({ ref }) {
        const { $div, $p, $button } = this.render;

        return super.build({
            ref: ref,
            children: [
                $p({
                    className: "result",
                    textContent: `Count: ${this.count}`,
                }),
                $div({
                    className: "button-container",
                    children: [
                        $button({
                            className: "increment-button button",
                            textContent: "＋",
                            onClick: () => this.#incrementCount(),
                        }),
                        $button({
                            className: "decrement-button button",
                            textContent: "－",
                            onClick: () => this.#decrementCount(),
                        }),
                    ],
                }),
            ],
        });
    }

    #count = 0;

    #incrementCount() {
        this.count++;
    }

    #decrementCount() {
        this.count--;
    }
}

class CounterApp extends RenderApp {
    constructor() {
        super();
    }

    build({ ref }) {
        return super.build({
            ref: ref,
            children: [
                new CounterPage(),
            ]
        });
    }
}

const render = new Render();

render.runApp({
    root: document.body,
    app: new CounterApp(),
});
