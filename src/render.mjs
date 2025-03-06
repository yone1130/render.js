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

        while (target.firstChild) target.firstChild.remove();

        target.append(...children);
    }


    $div(options) {
        const id = options.id || "";
        const className = options.className || "";
        const onClick = options.onClick;
        const innerText = options.innerText || "";
        const innerHTML = options.innerHTML;
        const children = options.children || [];

        let div = new Div({
            id: id,
            className: className,
            onClick: onClick,
            innerText: innerText,
            innerHTML: innerHTML,
            children: children,
        });

        return div;
    }


    $section(options) {
        const id = options.id || "";
        const className = options.className || "";
        const onClick = options.onClick;
        const innerText = options.innerText || "";
        const innerHTML = options.innerHTML;
        const children = options.children || [];

        let section = new Section({
            id: id,
            className: className,
            onClick: onClick,
            innerText: innerText,
            innerHTML: innerHTML,
            children: children,
        });

        return section;
    }


    $span(options) {
        const id = options.id || "";
        const className = options.className || "";
        const innerText = options.innerText || "";
        const innerHTML = options.innerHTML;

        let span = new Span({
            id: id,
            className: className,
            innerText: innerText,
            innerHTML: innerHTML,
        });

        return span;
    }


    $img(options) {
        const id = options.id || "";
        const className = options.className || "";
        const src = options.src || "";
        const alt = options.alt || "";

        let img = new Image({
            id: id,
            className: className,
            src: src,
            alt: alt,
        });

        return img;
    }


    $button(options) {
        const id = options.id || "";
        const className = options.className || "";
        const onClick = options.onClick;
        const innerText = options.innerText || "";
        const children = options.children || [];

        let button = new Button({
            id: id,
            className: className,
            onClick: onClick,
            innerText: innerText,
            children: children,
        });

        return button;
    }


    $nav(options) {
        const id = options.id || "";
        const className = options.className || "";
        const children = options.children || [];

        let nav = new Nav({
            id: id,
            className: className,
            children: children,
        });

        return nav;
    }


    $ul(options) {
        const id = options.id || "";
        const className = options.className || "";
        const children = options.children || [];

        let ul = new Ul({
            id: id,
            className: className,
            children: children,
        });

        return ul;
    }


    $li(options) {
        const id = options.id || "";
        const className = options.className || "";
        const innerText = options.innerText || "";
        const children = options.children || [];

        let li = new Li({
            id: id,
            className: className,
            innerText: innerText,
            children: children,
        });

        return li;
    }


    $h1(options) {
        const id = options.id || "";
        const className = options.className || "";
        const onClick = options.onClick;
        const innerText = options.innerText || "";
        const children = options.children || [];

        let h1 = new H1({
            id: id,
            className: className,
            onClick: onClick,
            innerText: innerText,
            children: children,
        });

        return h1;
    }


    $h2(options) {
        const id = options.id || "";
        const className = options.className || "";
        const onClick = options.onClick;
        const innerText = options.innerText || "";
        const children = options.children || [];

        let h2 = new H2({
            id: id,
            className: className,
            onClick: onClick,
            innerText: innerText,
            children: children,
        });

        return h2;
    }


    $h3(options) {
        const id = options.id || "";
        const className = options.className || "";
        const onClick = options.onClick;
        const innerText = options.innerText || "";
        const children = options.children || [];

        let h3 = new H3({
            id: id,
            className: className,
            onClick: onClick,
            innerText: innerText,
            children: children,
        });

        return h3;
    }


    $h4(options) {
        const id = options.id || "";
        const className = options.className || "";
        const onClick = options.onClick;
        const innerText = options.innerText || "";
        const children = options.children || [];

        let h4 = new H4({
            id: id,
            className: className,
            onClick: onClick,
            innerText: innerText,
            children: children,
        });

        return h4;
    }


    $h5(options) {
        const id = options.id || "";
        const className = options.className || "";
        const onClick = options.onClick;
        const innerText = options.innerText || "";
        const children = options.children || [];

        let h5 = new H5({
            id: id,
            className: className,
            onClick: onClick,
            innerText: innerText,
            children: children,
        });

        return h5;
    }


    $h6(options) {
        const id = options.id || "";
        const className = options.className || "";
        const onClick = options.onClick;
        const innerText = options.innerText || "";
        const children = options.children || [];

        let h6 = new H6({
            id: id,
            className: className,
            onClick: onClick,
            innerText: innerText,
            children: children,
        });

        return h6;
    }


    $p(options) {
        const id = options.id || "";
        const className = options.className || "";
        const onClick = options.onClick;
        const innerText = options.innerText || "";
        const children = options.children || [];

        let p = new P({
            id: id,
            className: className,
            onClick: onClick,
            innerText: innerText,
            children: children,
        });

        return p;
    }


    $a(options) {
        const id = options.id || "";
        const className = options.className || "";
        const href = options.href || "";
        const onClick = options.onClick;
        const innerText = options.innerText || "";
        const children = options.children || [];

        let a = new A({
            id: id,
            className: className,
            href: href,
            onClick: onClick,
            innerText: innerText,
            children: children,
        });

        return a;
    }
}


class Element {
    constructor(options) {
        this.id = options.id || "";
        this.className = options.className || "";
        this.href = options.href || "";
        this.src = options.src || "";
        this.alt = options.alt || "";
        this.onClick = options.onClick;
        this.innerText = options.innerText || "";
        this.children = options.children || [];
        this.innerHTML = options.innerHTML;
    }


    create(tagName) {
        this.element = document.createElement(tagName);

        if (this.innerHTML) {
            const html = document.createRange().createContextualFragment(this.innerHTML);
            this.element.appendChild(html);
            return this.element;
        }

        this.element.id = this.id || "";
        this.element.className = this.className;
        this.element.innerText = this.innerText;
        this.element.href = this.href || "";
        this.element.src = this.src || "";
        this.element.alt = this.alt || "";

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
