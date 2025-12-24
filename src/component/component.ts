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

    rendering(): void {
        if (!this.element) {
            return;
        }

        const currentChildren = this.renderChildren || [];

        const newChildren = this.build({
            children: currentChildren,
            ref: {
                nowrapper: true,
            },
        });

        this.render.build({
            target: this.element,
            children: newChildren,
        });
    }

    build({ children, ref }: { children: Array<HTMLElement>, ref?: { nowrapper?: boolean } }): Array<HTMLElement> {
        if (children !== undefined) {
            this.renderChildren = children;
        }

        let builtChildren: Array<HTMLElement> = [];

        children.forEach((child) => {
            if (this.element && (child === this.element || child.contains(this.element))) {
                console.warn("Circular reference detected and skipped.");
                return;
            }

            if (child instanceof RenderComponent) {
                builtChildren.push(...child.build({ children: [], ref: { nowrapper: ref?.nowrapper } }));
                return;
            }

            builtChildren.push(child);
        });

        if (ref?.nowrapper) {
            return builtChildren;
        }

        return [
            new RenderElement({
                id: this.id,
                children: builtChildren,
            })._createCustomElement("render-component"),
        ];
    };

    private renderChildren: Array<HTMLElement> = [];

    private get element(): HTMLElement | null {
        return document.getElementById(this.id);
    }
}