
import { Render } from 'https://cdn.yoneyo.com/scripts/render-v1.0.0.mjs';


const render = new Render();
const root = document.getElementById("root");


const app = () => {
    let title = "render.js";
    let message = "Hello World";

    return [
        render.$div({
            id: "app",
            children: [
                render.$h1({
                    id: "title",
                    innerText: title,
                }),
                render.$p({
                    id: "message",
                    innerText: message,
                }),
            ],
        }),
    ];
};


render.build({
    target: root,
    children: app(),
});
