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
