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

import { Render } from '../../dist/render.mjs';


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
        loopButton.textContent = "Stop the Loop";
    } else if (typeof renderingInterval === "number") {
        clearInterval(renderingInterval);
        renderingInterval = null;
        root.innerHTML = "";
        loopButton.textContent = "Start Rendering Loop";
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
        children: [
            render.$div({
                id: "test_id_div",
                className: "test_class",
                onClick: () => console.debug("Clicked Div."),
                textContent: "[div]",
                // innerHTML: "<span>[div-innerHTML]</span>",
                children: [
                    render.$span({
                        textContent: "[div-children]",
                    }),
                ],
            }),
            render.$span({
                id: "test_id_span",
                className: "test_class",
                textContent: "[span]",
                // innerHTML: "<span>[span-innerHTML]</span>",
            }),
            render.$section({
                id: "test_setion",
                className: "test_class",
                onClick: () => console.debug("Clicked Section."),
                textContent: "[section]",
                // innerHTML: "<span>[section-innerHTML]</span>",
                children: [
                    render.$span({
                        textContent: "[section-children]",
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
                textContent: "[button]",
                // innerHTML: "<span>[button-innerHTML]</span>",
                children: [
                    render.$span({
                        textContent: "[button-children]",
                    }),
                ],
            }),
            render.$nav({
                id: "test_id_nav",
                className: "test_class",
                // innerHTML: "<span>[nav-innerHTML]</span>",
                children: [
                    render.$span({
                        textContent: "[nav-children]",
                    }),
                ],
            }),
            render.$ul({
                id: "test_id_ul",
                className: "test_class",
                // innerHTML: "<span>[ul-innerHTML]</span>",
                children: [
                    render.$span({
                        textContent: "[ul-children]",
                    }),
                ],
            }),
            render.$li({
                id: "test_id_li",
                className: "test_class",
                textContent: "[li]",
                // innerHTML: "<span>[li-innerHTML]</span>",
                children: [
                    render.$span({
                        textContent: "[li-children]",
                    }),
                ],
            }),
            render.$h1({
                id: "test_id_h1",
                className: "test_class",
                onClick: () => console.debug("Clicked H1."),
                textContent: "[h1]",
                // innerHTML: "<span>[h1-innerHTML]</span>",
                children: [
                    render.$span({
                        textContent: "[h1-children]",
                    }),
                ],
            }),
            render.$p({
                id: "test_id_p",
                className: "test_class",
                onClick: () => console.debug("Clicked P."),
                textContent: "[p]",
                // innerHTML: "<span>[p-innerHTML]</span>",
                children: [
                    render.$span({
                        textContent: "[p-children]",
                    }),
                ],
            }),
            render.$a({
                id: "test_id_a",
                className: "test_class",
                href: "#",
                onClick: () => console.debug("Clicked A."),
                textContent: "[a]",
                // innerHTML: "<span>[a-innerHTML]</span>",
                children: [
                    render.$span({
                        textContent: "[a-children]",
                    }),
                ],
            }),
        ],
    });
}
