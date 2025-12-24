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
        super();
    }

    build() {
        const { $p } = this.render;

        return super.build({
            children: [
                $p({
                    textContent: "Hello World!",
                })
            ]
        });
    }
}
