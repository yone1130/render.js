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

import { Render } from 'https://cdn.yoneyo.com/scripts/render/render-v1.0.0.mjs';

const render = new Render();
const root = document.getElementById("root");

class State {
    constructor(initialState, dispatchState) {
        this.#state = initialState;
        this.#dispatchState = dispatchState;
    }

    get state() {
        return this.#state;
    }

    #state;
    #dispatchState;

    setState(newState) {
        this.#state = newState;
        this.#dispatchState(this.#state);
    }
}

class CounterPage {
    constructor({ render }) {
        this.render = render;
        this.count = new State(0, (count) => {
            this.render.build({
                target: root,
                children: this.build(count),
            });
        });
    }

    build() {
        const countValue = this.count.state;

        return [
            this.render.$div({
                textContent: `Count: ${countValue}`,
                children: [
                    this.render.$button({
                        textContent: "Increment",
                        onClick: () => this.count.setState(countValue + 1),
                    }),
                    this.render.$button({
                        textContent: "Decrement",
                        onClick: () => this.count.setState(countValue - 1),
                    }),
                ],
            })
        ];
    }
}

const counter = new CounterPage({ render });

render.build({
    target: root,
    children: counter.build(),
});
