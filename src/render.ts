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

import { RenderElement } from "./element.js";
import { ElementOptions } from "./types/element-options.js";
import { RenderArguments } from "./types/render-arguments.js";
import { Version } from "version";

import {
    A,
    Button,
    Div,
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    Image,
    Li,
    Nav,
    P,
    Section,
    Span,
    Ul,
} from "./elements/elements.js";

export class Render {
    version: Version;

    constructor() {
        this.version = new Version(1, 0, 0, Version.levels.dev);
    }

    build({ target, children }: RenderArguments): void {
        target.innerHTML = "";
        target.append(...children);
    }

    $a(options: ElementOptions): HTMLElement {
        return new A(options).create();
    }

    $button(options: ElementOptions): HTMLElement {
        return new Button(options).create();
    }

    $div(options: ElementOptions): HTMLElement {
        return new Div(options).create();
    }

    $h1(options: ElementOptions): HTMLElement {
        return new H1(options).create();
    }

    $h2(options: ElementOptions): HTMLElement {
        return new H2(options).create();
    }

    $h3(options: ElementOptions): HTMLElement {
        return new H3(options).create();
    }

    $h4(options: ElementOptions): HTMLElement {
        return new H4(options).create();
    }

    $h5(options: ElementOptions): HTMLElement {
        return new H5(options).create();
    }

    $h6(options: ElementOptions): HTMLElement {
        return new H6(options).create();
    }

    $img(options: ElementOptions): HTMLElement {
        return new Image(options).create();
    }

    $li(options: ElementOptions): HTMLElement {
        return new Li(options).create();
    }

    $nav(options: ElementOptions): HTMLElement {
        return new Nav(options).create();
    }

    $p(options: ElementOptions): HTMLElement {
        return new P(options).create();
    }

    $section(options: ElementOptions): HTMLElement {
        return new Section(options).create();
    }

    $span(options: ElementOptions): HTMLElement {
        return new Span(options).create();
    }

    $ul(options: ElementOptions): HTMLElement {
        return new Ul(options).create();
    }
}
