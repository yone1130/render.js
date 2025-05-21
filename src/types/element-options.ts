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

export interface ElementOptions {
    id?: string;
    className?: string;
    href?: string | URL;
    src?: string | URL;
    alt?: string;
    width?: number;
    height?: number;
    onClick?: (this: HTMLElement, ev: MouseEvent) => void;
    textContent?: string;
    children?: Array<HTMLElement>;
    innerHTML?: string;
}
