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

import { A } from "./a.js";
import { Button } from "./button.js";
import { Div } from "./div.js";
import { H1 } from "./h1.js";
import { H2 } from "./h2.js";
import { H3 } from "./h3.js";
import { H4 } from "./h4.js";
import { H5 } from "./h5.js";
import { H6 } from "./h6.js";
import { Image } from "./image.js";
import { Li } from "./li.js";
import { Nav } from "./nav.js";
import { P } from "./p.js";
import { Section } from "./section.js";
import { Span } from "./span.js";
import { Ul } from "./ul.js";

abstract class RenderElements {
    static A = A;
    static Button = Button;
    static Div = Div;
    static H1 = H1;
    static H2 = H2;
    static H3 = H3;
    static H4 = H4;
    static H5 = H5;
    static H6 = H6;
    static Image = Image;
    static Li = Li;
    static Nav = Nav;
    static P = P
    static Section = Section;
    static Span = Span;
    static Ul = Ul;
}

export { RenderElements };
