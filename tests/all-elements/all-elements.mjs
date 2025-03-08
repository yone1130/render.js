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

import { Render } from 'https://cdn.yoneyo.com/scripts/render-v1.0.0.mjs';


const render = new Render();
const root = document.getElementById("root");

render.build({
    target: root,
    children: app(),
});


function app() {
    return render.$div({
        id: "app",
        children: [],
    })
}
