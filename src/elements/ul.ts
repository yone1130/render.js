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

import { RenderElement } from "../element.js";
import { ElementOptions } from "../types/element-options.js";

export class Ul extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }

    create(): HTMLElement {
        const element: HTMLElement = this._create("ul");
        return element;
    }
}