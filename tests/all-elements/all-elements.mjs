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

import { Render } from '../../src/render.mjs';


const render = new Render();
const root = document.getElementById("root");
const allButton = document.getElementById("allButton");
const loopButton = document.getElementById("loopButton");

let renderingInterval = null;

allButton.addEventListener("click", () => {
    build();
})


loopButton.addEventListener("click", () => {
    if (renderingInterval === null) {
        loopButton.innerText = "Stop the Loop";
    } else if (typeof renderingInterval === "number") {
        clearInterval(renderingInterval);
        renderingInterval = null;
        root.innerHTML = "";
        loopButton.innerText = "Start Rendering Loop";
        return;
    }
    buildLoop();
})


function build() {
    render.build({
        target: root,
        children: [component()],
    });
}


function buildLoop() {
    build();

    renderingInterval = setInterval(() => {
        root.innerHTML = "";
        setTimeout(() => {
            build();
        }, 100)
    }, 200);
}


function component() {
    return render.$div({
        id: "app",
        children: (() => {
            let a = [
                render.$div({
                    id: "test_id_div",
                    className: "test_class",
                    onClick: () => console.debug("Clicked Div."),
                    innerText: "[div]",
                    innerHTML: "<span>[div-innerHTML]</span>",
                    children: [
                        render.$span({
                            innerText: "[div-children]",
                        }),
                    ],
                }),
                render.$span({
                    id: "test_id_span",
                    className: "test_class",
                    innerText: "[span]",
                    innerHTML: "<span>[span-innerHTML]</span>",
                }),
                render.$section({
                    id: "test_setion",
                    className: "test_class",
                    onClick: () => console.debug("Clicked Section."),
                    innerText: "[section]",
                    innerHTML: "<span>[section-innerHTML]</span>",
                    children: [
                        render.$span({
                            innerText: "[section-children]",
                        }),
                    ],
                }),
                render.$img({
                    id: "test_id_img",
                    className: "test_class",
                    src: "https://cdn.yoneyo.com/images/yone-logos/yone_icon.png",
                    alt: "Image's alt.",
                    width: 64,
                    height: 64,
                }),
                render.$button({
                    id: "test_id_button",
                    className: "test_class",
                    onClick: () => console.debug("Clicked Button."),
                    innerText: "[button]",
                    innerHTML: "<span>[button-innerHTML]</span>",
                    children: [
                        render.$span({
                            innerText: "[button-children]",
                        }),
                    ],
                }),
                render.$nav({
                    id: "test_id_nav",
                    className: "test_class",
                    innerHTML: "<span>[nav-innerHTML]</span>",
                    children: [
                        render.$span({
                            innerText: "[nav-children]",
                        }),
                    ],
                }),
                render.$ul({
                    id: "test_id_ul",
                    className: "test_class",
                    innerHTML: "<span>[ul-innerHTML]</span>",
                    children: [
                        render.$span({
                            innerText: "[ul-children]",
                        }),
                    ],
                }),
                render.$li({
                    id: "test_id_li",
                    className: "test_class",
                    innerText: "[li]",
                    innerHTML: "<span>[li-innerHTML]</span>",
                    children: [
                        render.$span({
                            innerText: "[li-children]",
                        }),
                    ],
                }),
                render.$h1({
                    id: "test_id_h1",
                    className: "test_class",
                    onClick: () => console.debug("Clicked H1."),
                    innerText: "[h1]",
                    innerHTML: "<span>[h1-innerHTML]</span>",
                    children: [
                        render.$span({
                            innerText: "[h1-children]",
                        }),
                    ],
                }),
                render.$p({
                    id: "test_id_p",
                    className: "test_class",
                    onClick: () => console.debug("Clicked P."),
                    innerText: "[p]",
                    innerHTML: "<span>[p-innerHTML]</span>",
                    children: [
                        render.$span({
                            innerText: "[p-children]",
                        }),
                    ],
                }),
                render.$a({
                    id: "test_id_a",
                    className: "test_class",
                    href: "#",
                    onClick: () => console.debug("Clicked A."),
                    innerText: "[a]",
                    innerHTML: "<span>[a-innerHTML]</span>",
                    children: [
                        render.$span({
                            innerText: "[a-children]",
                        }),
                    ],
                }),
            ]

            return a;
        })(),
    })
}
