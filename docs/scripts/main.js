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

import { Render } from 'https://cdn.yoneyo.com/scripts/render/render-v1.0.0.js';


const render = new Render();
const root = document.getElementById("root");

let pages = {};

render.build({
    target: root,
    children: await page(),
});

/* ---------------- */

async function page() {
    const locationUrl = new URL(location.href);
    const pathname = locationUrl.pathname;
    const pathList = locationUrl.pathname.split("/");

    switch (pathname) {
        case "/":
            return top();

        case "/examples/":
            return await examples();

        default:
            return notFound();
    }
}


function top() {
    let title = "render.js";

    return [
        render.$div({
            id: "page",
            className: "page",
            children: [
                render.$section({
                    className: "section",
                    children: [
                        render.$h1({
                            id: "title",
                            className: "title section__title",
                            textContent: title,
                        }),
                        render.$p({
                            id: "about",
                            className: "about",
                            textContent: "Welcome to render.js Documents!\nreder.js is a library of rendering HTML elements for JavaScript.",
                        }),
                    ]
                }),
                render.$section({
                    className: "section",
                    children: [
                        render.$a({
                            className: "description",
                            href: "/examples/",
                            textContent: "View Demos →",
                            onClick: (event) => onClickLink(event),
                        }),
                    ]
                }),
            ],
        }),
    ];
}


function notFound() {
    return [
        render.$div({
            id: "page",
            className: "page",
            children: [
                render.$section({
                    className: "section",
                    children: [
                        render.$h1({
                            id: "title",
                            className: "title section__title",
                            textContent: "Not Found",
                        }),
                        render.$p({
                            id: "description",
                            className: "description",
                            textContent: "The requested page was not found.",
                        }),
                    ]
                }),
                render.$section({
                    className: "section",
                    children: [
                        render.$a({
                            href: "/",
                            textContent: "Back to Top",
                            onClick: (event) => onClickLink(event),
                        }),
                    ],
                }),
            ],
        }),
    ];
}


async function examples() {
    if (!("examples" in pages)) {
        let _examples = await import('/scripts/pages/examples.js');
        pages.examples = _examples.examples;
    }

    if (typeof pages.examples === "function") {
        return pages.examples();
    }
}

/* ---------------- */

async function onClickLink(event) {
    const targetPathname = event.target.pathname;
    event.preventDefault();
    history.pushState(null, '', targetPathname);
    render.build({
        target: root,
        children: await page(),
    });
}
