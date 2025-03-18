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

import { RenderElement } from "./element.mjs";
import { ElementOptions } from "./types/element-options.mjs";
import { RenderArguments } from "./types/render-arguments.mjs";
import { Version } from "version/src/index.mjs";


export class Render {
    version: Version;


    constructor() {
        this.version = new Version(1, 0, 0, Version.levels.dev);
    }


    build({target, children}: RenderArguments): void {
        target.innerHTML = "";
        target.append(...children);
    }


    $div(options: ElementOptions): HTMLElement {
        return new Div(options).create();
    }


    $section(options: ElementOptions): HTMLElement {
        return new Section(options).create();
    }


    $span(options: ElementOptions): HTMLElement {
        return new Span(options).create();
    }


    $img(options: ElementOptions): HTMLElement {
        return new Image(options).create();
    }


    $button(options: ElementOptions): HTMLElement {
        return new Button(options).create();
    }


    $nav(options: ElementOptions): HTMLElement {
        return new Nav(options).create();
    }


    $ul(options: ElementOptions): HTMLElement {
        return new Ul(options).create();
    }


    $li(options: ElementOptions): HTMLElement {
        return new Li(options).create();
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


    $p(options: ElementOptions): HTMLElement {
        return new P(options).create();
    }


    $a(options: ElementOptions): HTMLElement {
        return new A(options).create();
    }
}


class Div extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }


    create(): HTMLElement {
        const element: HTMLElement = this._create("div");
        return element;
    }
}


class Section extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }


    create(): HTMLElement {
        const element: HTMLElement = this._create("section");
        return element;
    }
}


class Span extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }


    create(): HTMLElement {
        const element: HTMLElement = this._create("span");
        return element;
    }
}


class Image extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }


    create(): HTMLElement {
        const element: HTMLElement = this._create("img");
        return element;
    }
}


class Button extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }


    create(): HTMLElement {
        const element: HTMLElement = this._create("button");
        return element;
    }
}


class Nav extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }


    create(): HTMLElement {
        const element: HTMLElement = this._create("nav");
        return element;
    }
}


class Ul extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }


    create(): HTMLElement {
        const element: HTMLElement = this._create("ul");
        return element;
    }
}


class Li extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }


    create(): HTMLElement {
        const element: HTMLElement = this._create("li");
        return element;
    }
}


class H1 extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }


    create(): HTMLElement {
        const element: HTMLElement = this._create("h1");
        return element;
    }
}


class H2 extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }


    create(): HTMLElement {
        const element: HTMLElement = this._create("h2");
        return element;
    }
}


class H3 extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }


    create(): HTMLElement {
        const element: HTMLElement = this._create("h3");
        return element;
    }
}


class H4 extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }


    create(): HTMLElement {
        const element: HTMLElement = this._create("h4");
        return element;
    }
}


class H5 extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }


    create(): HTMLElement {
        const element: HTMLElement = this._create("h5");
        return element;
    }
}


class H6 extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }


    create(): HTMLElement {
        const element: HTMLElement = this._create("h6");
        return element;
    }
}


class P extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }


    create(): HTMLElement {
        const element: HTMLElement = this._create("p");
        return element;
    }
}


class A extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }


    create(): HTMLElement {
        const element: HTMLElement = this._create("a");
        return element;
    }
}
