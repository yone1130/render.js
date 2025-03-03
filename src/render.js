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
    build(options) {
        const target = options.target;
        const children = options.children;

        if (!target instanceof Element) {
            throw new Error("options.target argument must be an Element instance.");
        }

        if (!children instanceof Array) {
            throw new Error("options.children argument must be an Array instance.");
        }

        target.innerHTML = "";

        for (let child of children) {
            if (!child instanceof Element) {
                throw new Error("options.children argument must be an Array of Element instances.");
            }

            target.appendChild(child);
        }
    }


    $div(options) {
        const id = options.id || "";
        const className = options.className || "";
        const children = options.children || [];

        let div = new Div({
            id: id,
            className: className,
            children: children,
        });

        return div;
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


class A extends Element {
    constructor(options) {
        super(options);
        const a = this.create("a");
        return a;
    }
}
