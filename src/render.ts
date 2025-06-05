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

import { ElementOptions } from "./types/element-options.js";
import { RenderArguments } from "./types/render-arguments.js";
import { RunappArguments } from "./types/runapp-arguments.js";
import { Version } from "version";

import { RenderApp } from "./app/app.js";
import { RenderComponent } from "./component/component.js";
import { RenderElement } from "./elements/element.js";
import { RenderElements } from "./elements/elements.js";

class Render {
    constructor() {
        this.version = new Version(1, 0, 0, Version.levels.dev);
    }

    version: Version;

    build({ target, children }: RenderArguments): void {
        target.innerHTML = "";
        target.append(...children);
    }

    runApp({ root, app }: RunappArguments): void {
        root.innerHTML = "";
        const children = app.build({ children: [] });
        root.append(...children);
    }

    // ---
    // Elements
    // ---

    $a(options: ElementOptions): HTMLElement {
        return new RenderElements.A(options).create();
    }

    $button(options: ElementOptions): HTMLElement {
        return new RenderElements.Button(options).create();
    }

    $div(options: ElementOptions): HTMLElement {
        return new RenderElements.Div(options).create();
    }

    $h1(options: ElementOptions): HTMLElement {
        return new RenderElements.H1(options).create();
    }

    $h2(options: ElementOptions): HTMLElement {
        return new RenderElements.H2(options).create();
    }

    $h3(options: ElementOptions): HTMLElement {
        return new RenderElements.H3(options).create();
    }

    $h4(options: ElementOptions): HTMLElement {
        return new RenderElements.H4(options).create();
    }

    $h5(options: ElementOptions): HTMLElement {
        return new RenderElements.H5(options).create();
    }

    $h6(options: ElementOptions): HTMLElement {
        return new RenderElements.H6(options).create();
    }

    $img(options: ElementOptions): HTMLElement {
        return new RenderElements.Image(options).create();
    }

    $li(options: ElementOptions): HTMLElement {
        return new RenderElements.Li(options).create();
    }

    $nav(options: ElementOptions): HTMLElement {
        return new RenderElements.Nav(options).create();
    }

    $p(options: ElementOptions): HTMLElement {
        return new RenderElements.P(options).create();
    }

    $section(options: ElementOptions): HTMLElement {
        return new RenderElements.Section(options).create();
    }

    $span(options: ElementOptions): HTMLElement {
        return new RenderElements.Span(options).create();
    }

    $ul(options: ElementOptions): HTMLElement {
        return new RenderElements.Ul(options).create();
    }
}

export { Render, RenderApp, RenderComponent, RenderElement, RenderElements }
