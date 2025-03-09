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
        this.version = new Version({
            major: 1,
            minor: 0,
            patch: 0,
            level: Version.levels.dev,
        });
    }


    build(target: HTMLElement, children: Array<HTMLElement>): void {
        target.innerHTML = "";
        target.append(...children);
    }


    $div(options: ElementOptions): Div {
        return new Div(options);
    }


    $section(options: ElementOptions): Section {
        return new Section(options);
    }


    $span(options: ElementOptions): Span {
        return new Span(options);
    }


    $img(options: ElementOptions): Image {
        return new Image(options);
    }


    $button(options: ElementOptions): Button {
        return new Button(options);
    }


    $nav(options: ElementOptions): Nav {
        return new Nav(options);
    }


    $ul(options: ElementOptions): Ul {
        return new Ul(options);
    }


    $li(options: ElementOptions): Li {
        return new Li(options);
    }


    $h1(options: ElementOptions): H1 {
        return new H1(options);
    }


    $h2(options: ElementOptions): H2 {
        return new H2(options);
    }


    $h3(options: ElementOptions): H3 {
        return new H3(options);
    }


    $h4(options: ElementOptions): H4 {
        return new H4(options);
    }


    $h5(options: ElementOptions): H5 {
        return new H5(options);
    }


    $h6(options: ElementOptions): H6 {
        return new H6(options);
    }


    $p(options: ElementOptions): P {
        return new P(options);
    }


    $a(options: ElementOptions) {
        return new A(options);
    }
}


class RenderElement {
    options: ElementOptions;
    element: HTMLElement;


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

        if (this.element instanceof HTMLLinkElement && typeof this.options.href === "string") {
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
        const element: HTMLElement = this._create("p");
        return element;
    }
}


class Version {
    major: Number;
    minor: Number;
    patch: Number;
    level: String;

    constructor({ major, minor, patch, level }) {
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
