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

import { RenderApp } from '../../../../../dist/render.js';
import { HelloWorld } from '../hello-world/components/hello-world.js';

export class App extends RenderApp {
    constructor() {
        super();
    }

    build() {
        return super.build({
            children: [
                new HelloWorld(),
            ]
        });
    }
}
