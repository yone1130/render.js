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
import { Render, RenderElement } from "../render.js";
import { RenderAppModel } from "./app.model.js";

export abstract class RenderApp implements RenderAppModel {
    constructor({
        id,
    }: {
        id?: string | null;
    }) {
        this.id = id ?? null;
        this.render = new Render();
    }

    id: string | null;
    render: Render;

    build({ children }: { children: Array<HTMLElement | RenderComponent> }): Array<HTMLElement> {
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
            })._createCustomElement("render-app"),
        ]
    };
}