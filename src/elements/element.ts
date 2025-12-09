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

import { ElementOptions } from "../types/element-options.js";

export class RenderElement {
    options: ElementOptions;
    element?: HTMLElement;

    constructor(options: ElementOptions) {
        this.options = options;
    }

    _create(tagName: keyof HTMLElementTagNameMap): HTMLElement {
        this.element = document.createElement(tagName);

        if (typeof this.options.innerHTML === "string") {
            const html = document.createRange().createContextualFragment(this.options.innerHTML);
            this.element.appendChild(html);
            return this.element;
        }

        if (typeof this.options.id === "string") {
            this.element.id = this.options.id;
        }

        if (typeof this.options.className === "string") {
            this.element.className = this.options.className;
        }

        if (typeof this.options.textContent === "string") {
            this.element.textContent = this.options.textContent;
        }

        if (this.element instanceof HTMLAnchorElement && typeof this.options.href === "string") {
            this.element.href = this.options.href;
        }

        if (this.element instanceof HTMLImageElement && typeof this.options.src === "string") {
            this.element.src = this.options.src;
        }

        if (this.element instanceof HTMLImageElement && typeof this.options.alt === "string") {
            this.element.alt = this.options.alt;
        }

        if (this.element instanceof HTMLImageElement && typeof this.options.width === "number") {
            this.element.width = this.options.width;
        }

        if (this.element instanceof HTMLImageElement && typeof this.options.height === "number") {
            this.element.height = this.options.height;
        }

        if (this.options.onClick) {
            this.element.addEventListener("click", this.options.onClick);
        }

        if (Array.isArray(this.options.children) && this.options.children.every(child => child instanceof HTMLElement)) {
            this.element.append(...this.options.children);
        }

        return this.element;
    }

    _createCustomElement(tagName: string): HTMLElement {
        this.element = document.createElement(tagName);

        if (typeof this.options.id === "string") {
            this.element.id = this.options.id;
        }

        if (typeof this.options.className === "string") {
            this.element.className = `render-element ${this.options.className}`;
        } else {
            this.element.className = "render-element";
        }

        if (Array.isArray(this.options.children) && this.options.children.every(child => child instanceof HTMLElement)) {
            this.element.append(...this.options.children);
        }

        return this.element;
    }
}
