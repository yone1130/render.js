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
    constructor() {
        this.version = new Version({
            major: 1,
            minor: 0,
            patch: 0,
            level: Version.dev,
        });
    }


    build({ target, children }) {
        if (!(target instanceof Element)) {
            throw new Error("Invalid argument: 'target' must be an instance of Element.");
        }

        if (!Array.isArray(children) || !children.every(child => child instanceof Element)) {
            throw new Error("Invalid argument: 'children' must be an array of Element instances.");
        }

        target.innerHTML = "";

        target.append(...children);
    }


    $div({
        id,
        className,
        onClick,
        innerText,
        innerHTML,
        children = [],
    }) {
        return new Div({
            id,
            className,
            onClick,
            innerText,
            innerHTML,
            children
        });
    }


    $section({
        id,
        className,
        onClick,
        innerText,
        innerHTML,
        children = [],
    }) {
        return Section({
            id,
            className,
            onClick,
            innerText,
            innerHTML,
            children,
        });
    }


    $span({
        id,
        className,
        innerText,
        innerHTML,
    }) {
        return new Span({
            id,
            className,
            innerText,
            innerHTML,
        });
    }


    $img({
        id,
        className,
        src,
        alt,
    }) {
        return new Image({
            id,
            className,
            src,
            alt,
        });
    }


    $button({
        id,
        className,
        onClick,
        innerText,
        children = [],
    }) {
        return new Button({
            id: id,
            className: className,
            onClick: onClick,
            innerText: innerText,
            children: children,
        });
    }


    $nav({ id, className, children }) {
        return new Nav({
            id,
            className,
            children,
        });
    }


    $ul({ id, className, children }) {
        return new Ul({
            id,
            className,
            children,
        });
    }


    $li({
        id,
        className,
        innerText,
        children = [],
    }) {
        return new Li({
            id,
            className,
            innerText,
            children,
        });
    }


    $h1({
        id,
        className,
        onClick,
        innerText,
        children = [],
    }) {
        return new H1({
            id,
            className,
            onClick,
            innerText,
            children,
        });
    }


    $h1({
        id,
        className,
        onClick,
        innerText,
        children = [],
    }) {
        return new H2({
            id,
            className,
            onClick,
            innerText,
            children,
        });
    }


    $h3({
        id,
        className,
        onClick,
        innerText,
        children = [],
    }) {
        return new H3({
            id,
            className,
            onClick,
            innerText,
            children,
        });
    }


    $h4({
        id,
        className,
        onClick,
        innerText,
        children = [],
    }) {
        return new H4({
            id,
            className,
            onClick,
            innerText,
            children,
        });
    }


    $h5({
        id,
        className,
        onClick,
        innerText,
        children = [],
    }) {
        return new H5({
            id,
            className,
            onClick,
            innerText,
            children,
        });
    }


    $h6({
        id,
        className,
        onClick,
        innerText,
        children = [],
    }) {
        return new H6({
            id,
            className,
            onClick,
            innerText,
            children,
        });
    }


    $p({
        id,
        className,
        onClick,
        innerText,
        children = [],
    }) {
        return new P({
            id,
            className,
            onClick,
            innerText,
            children,
        });
    }


    $a({
        id,
        className,
        href,
        onClick,
        innerText,
        children = [],
    }) {
        return new A({
            id,
            className,
            href,
            onClick,
            innerText,
            children,
        });
    }
}


class Element {
    constructor({
        id,
        className,
        href,
        src,
        alt,
        onClick,
        innerText,
        children,
        innerHTML,
    }) {
        this.id = id;
        this.className = className;
        this.href = href;
        this.src = src;
        this.alt = alt;
        this.onClick = onClick;
        this.innerText = innerText;
        this.children = children;
        this.innerHTML = innerHTML;
    }


    create(tagName) {
        this.element = document.createElement(tagName);

        if (this.innerHTML) {
            const html = document.createRange().createContextualFragment(this.innerHTML);
            this.element.appendChild(html);
            return this.element;
        }

        this.element.id;
        this.element.className = this.className;
        this.element.innerText = this.innerText;
        this.element.href = this.href;
        this.element.src = this.src;
        this.element.alt = this.alt;

        if (this.onClick) {
            this.element.addEventListener("click", (event) => this.onClick(event));
        }

        this.element.append(...this.children);

        return this.element;
    }
}



class Div extends Element {
    constructor(options) {
        super(options);
        const div = this.create("div");
        return div;
    }
}


class Section extends Element {
    constructor(options) {
        super(options);
        const section = this.create("section");
        return section;
    }
}


class Span extends Element {
    constructor(options) {
        super(options);
        const span = this.create("span");
        return span;
    }
}


class Image extends Element {
    constructor(options) {
        super(options);
        const img = this.create("img");
        return img;
    }
}


class Button extends Element {
    constructor(options) {
        super(options);
        const button = this.create("button");
        return button;
    }
}


class Nav extends Element {
    constructor(options) {
        super(options);
        const nav = this.create("nav");
        return nav;
    }
}


class Ul extends Element {
    constructor(options) {
        super(options);
        const ul = this.create("ul");
        return ul;
    }
}


class Li extends Element {
    constructor(options) {
        super(options);
        const li = this.create("li");
        return li;
    }
}


class H1 extends Element {
    constructor(options) {
        super(options);
        const h1 = this.create("h1");
        return h1;
    }
}


class H2 extends Element {
    constructor(options) {
        super(options);
        const h1 = this.create("h2");
        return h1;
    }
}


class H3 extends Element {
    constructor(options) {
        super(options);
        const h1 = this.create("h3");
        return h1;
    }
}


class H4 extends Element {
    constructor(options) {
        super(options);
        const h1 = this.create("h4");
        return h1;
    }
}


class H5 extends Element {
    constructor(options) {
        super(options);
        const h1 = this.create("h5");
        return h1;
    }
}


class H6 extends Element {
    constructor(options) {
        super(options);
        const h1 = this.create("h6");
        return h1;
    }
}


class P extends Element {
    constructor(options) {
        super(options);
        const p = this.create("p");
        return p;
    }
}


class A extends Element {
    constructor(options) {
        super(options);
        const a = this.create("a");
        return a;
    }
}


class Version {
    constructor(version) {
        this.major = version.major;
        this.minor = version.minor;
        this.patch = version.patch;
        this.level = version.level;
    }


    get string() {
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
