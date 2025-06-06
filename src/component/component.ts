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

import { Render, RenderElement } from "../render.js";
import { RenderComponentModel } from "./component.model.js";

export abstract class RenderComponent implements RenderComponentModel {
    constructor(id: string) {
        this.id = id;
        this.render = new Render();
    }

    id: string;
    render: Render;

    build({ children }: { children: Array<HTMLElement> }): Array<HTMLElement> {
        let builtChildren: Array<HTMLElement> = [];

        children.forEach((child) => {
            if (child instanceof RenderComponent) {
                builtChildren.push(...child.build({ children: [] }));
                return;
            }

            builtChildren.push(child);
        });

        return [
            new RenderElement({
                id: this.id,
                children: builtChildren,
            })._createCustomElement("render-component"),
        ]
    };
}