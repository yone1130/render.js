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


interface RenderArguments {
    target: HTMLElement,
    children: Array<HTMLElement>,
}


class RenderElement {
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
}


interface ElementOptions {
    id?: string,
    className?: string,
    href?: string | URL,
    src?: string | URL,
    alt?: string,
    width?: number,
    height?: number,
    onClick?: (this: HTMLElement, ev: MouseEvent) => void,
    textContent?: string,
    children?: Array<HTMLElement>,
    innerHTML?: string,
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


class Version {
    major: number;
    minor: number;
    patch: number;
    level: string;

    constructor(
        major: number,
        minor: number,
        patch: number,
        level: string
    ) {
        this.major = major;
        this.minor = minor;
        this.patch = patch;
        this.level = level;
    }


    get string(): String {
        switch (this.level) {
            case Version.levels.stable:
                return `${this.major}.${this.minor}.${this.patch}`;

            case Version.levels.beta:
                return `${this.major}.${this.minor}.${this.patch} (beta)`;

            case Version.levels.dev:
                return `${this.major}.${this.minor}.${this.patch} (dev)`;

            default:
                return `${this.major}.${this.minor}.${this.patch}`;
        }
    }


    static levels = {
        stable: "stable",
        beta: "beta",
        dev: "dev",
    }
}
