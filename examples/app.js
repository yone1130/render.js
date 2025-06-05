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

// import { Render, RenderApp } from 'https://cdn.yoneyo.com/scripts/render/render-v1.0.0.js';
import { Render, RenderApp, RenderComponent } from '../dist/render.js';

class GreetingElement extends RenderComponent {
    constructor() {
        super();
        this.title = "render.js";
        this.message = "Hello World";
    }

    build() {
        const { $h1, $p } = this.render;

        return super.build({
            children: [
                $h1({
                    id: "title",
                    textContent: this.title,
                }),
                $p({
                    id: "message",
                    textContent: this.message,
                }),
            ]
        });
    }
}

class MyApp extends RenderApp {
    constructor() { super(); }

    build() {
        return super.build({
            children: [
                new GreetingElement(),
                new GreetingElement(),
                new GreetingElement(),
            ]
        });
    }
}

new Render().runApp({
    root: document.body,
    app: new MyApp(),
});
