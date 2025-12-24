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

import { RenderComponent } from '../../../../../../dist/render.js';

export class HelloWorld extends RenderComponent {
    constructor() {
        super("HelloWorld");
    }

    get count() {
        return this.#count;
    }

    set count(newCount) {
        this.#count = newCount;
        this.rendering();
    }

    build({ ref }) {
        const { $p, $span, $button, $style } = this.render;

        return super.build({
            ref: ref,
            children: [
                $style({
                    textContent: (`
                        #button {
                            padding: 1rem;
                        }
                    `),
                }),
                $p({
                    children: [
                        $span({
                            textContent: `Count: ${this.#count}`,
                        }),
                    ],
                }),
                $button({
                    id: "button",
                    textContent: "＋",
                    onClick: () => this.count++,
                }),
            ],
        });
    }

    #count = 0;
}

