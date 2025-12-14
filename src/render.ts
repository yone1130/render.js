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

import { Version } from "version";

import { RenderArguments } from "./types/render-arguments.js";
import { RunappArguments } from "./types/runapp-arguments.js";
import { ElementOptions } from "./types/element-options.js";

import { RenderApp } from "./app/app.js";
import { RenderComponent } from "./component/component.js";
import { RenderElement } from "./elements/element.js";
import { RenderElements } from "./elements/elements.js";

class Render {
    constructor() {
        this.version = new Version(1, 0, 0, Version.levels.beta);
    }

    version: Version;

    build({ target, children }: RenderArguments): void {
        target.innerHTML = "";
        target.append(...children);
    }

    runApp({ root, app }: RunappArguments): void {
        root.innerHTML = "";
        const children = app.build({ children: [] });
        root.append(...children);
    }

    $a(options: ElementOptions): HTMLElement {
        return new RenderElements.A(options).create();
    }

    $article(options: ElementOptions): HTMLElement {
        return new RenderElements.Article(options).create();
    }

    $aside(options: ElementOptions): HTMLElement {
        return new RenderElements.Aside(options).create();
    }

    $base(options: ElementOptions): HTMLElement {
        return new RenderElements.Base(options).create();
    }

    $body(options: ElementOptions): HTMLElement {
        return new RenderElements.Body(options).create();
    }

    $button(options: ElementOptions): HTMLElement {
        return new RenderElements.Button(options).create();
    }

    $code(options: ElementOptions): HTMLElement {
        return new RenderElements.Code(options).create();
    }

    $dialog(options: ElementOptions): HTMLElement {
        return new RenderElements.Dialog(options).create();
    }

    $div(options: ElementOptions): HTMLElement {
        return new RenderElements.Div(options).create();
    }

    $footer(options: ElementOptions): HTMLElement {
        return new RenderElements.Footer(options).create();
    }

    $form(options: ElementOptions): HTMLElement {
        return new RenderElements.Form(options).create();
    }

    $h1(options: ElementOptions): HTMLElement {
        return new RenderElements.H1(options).create();
    }

    $h2(options: ElementOptions): HTMLElement {
        return new RenderElements.H2(options).create();
    }

    $h3(options: ElementOptions): HTMLElement {
        return new RenderElements.H3(options).create();
    }

    $h4(options: ElementOptions): HTMLElement {
        return new RenderElements.H4(options).create();
    }

    $h5(options: ElementOptions): HTMLElement {
        return new RenderElements.H5(options).create();
    }

    $h6(options: ElementOptions): HTMLElement {
        return new RenderElements.H6(options).create();
    }

    $head(options: ElementOptions): HTMLElement {
        return new RenderElements.Head(options).create();
    }

    $header(options: ElementOptions): HTMLElement {
        return new RenderElements.Header(options).create();
    }

    $html(options: ElementOptions): HTMLElement {
        return new RenderElements.Html(options).create();
    }

    $img(options: ElementOptions): HTMLElement {
        return new RenderElements.Image(options).create();
    }

    $li(options: ElementOptions): HTMLElement {
        return new RenderElements.Li(options).create();
    }

    $link(options: ElementOptions): HTMLElement {
        return new RenderElements.Link(options).create();
    }

    $main(options: ElementOptions): HTMLElement {
        return new RenderElements.Main(options).create();
    }

    $meta(options: ElementOptions): HTMLElement {
        return new RenderElements.Meta(options).create();
    }

    $nav(options: ElementOptions): HTMLElement {
        return new RenderElements.Nav(options).create();
    }

    $ol(options: ElementOptions): HTMLElement {
        return new RenderElements.Ol(options).create();
    }

    $p(options: ElementOptions): HTMLElement {
        return new RenderElements.P(options).create();
    }

    $script(options: ElementOptions): HTMLElement {
        return new RenderElements.Script(options).create();
    }

    $search(options: ElementOptions): HTMLElement {
        return new RenderElements.Search(options).create();
    }

    $section(options: ElementOptions): HTMLElement {
        return new RenderElements.Section(options).create();
    }

    $span(options: ElementOptions): HTMLElement {
        return new RenderElements.Span(options).create();
    }

    $strong(options: ElementOptions): HTMLElement {
        return new RenderElements.Strong(options).create();
    }

    $style(options: ElementOptions): HTMLElement {
        return new RenderElements.Style(options).create();
    }

    $title(options: ElementOptions): HTMLElement {
        return new RenderElements.Title(options).create();
    }

    $ul(options: ElementOptions): HTMLElement {
        return new RenderElements.Ul(options).create();
    }
}

export { Render, RenderApp, RenderComponent, RenderElement, RenderElements }
