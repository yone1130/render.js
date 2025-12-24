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

import { RenderComponent } from "../component/component.js";
import { Render } from "../render.js";

export interface RenderAppModel {
    id?: string | null;
    render: Render;
    build({ children }: { children: Array<HTMLElement | RenderComponent> }): Array<HTMLElement>;
}