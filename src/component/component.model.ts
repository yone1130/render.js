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

import { Render } from "../render.js";

export interface RenderComponentModel {
    id: string;
    render: Render;
    build({ children }: { children: Array<HTMLElement> }): Array<HTMLElement>;
}