# render.js

[> 日本語で読む](./README_JP.md)

## Overview

**render.js** is a library of rendering HTML elements for TypeScript and JavaScript.

## Usage

### 1. Import from CDN

URL: https://cdn.yoneyo.com/scripts/render/render-v1.0.0.js

```js
import { Render } from 'https://cdn.yoneyo.com/scripts/render/render-v1.0.0.js';
```

### 2. Use

A sample code:
```js
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
                    textContent: title,
                }),
                render.$p({
                    id: "message",
                    textContent: message,
                }),
            ],
        }),
    ];
};

render.build({
    target: root,
    children: app(),
});
```

### More Resources

- **Documents: https://render-js.yoneyo.com/ .**
- **Demos: https://render-js.yoneyo.com/examples/ .**
- **Example codes: [examples/](./examples/).**

## Build

### 1. Install Packages

```bash
npm install
```

### 2. Build

Compile to JavaScript.

```bash
npm run build
```

Emitted JavaScript files will be output to the `dist/` directory.

## Type Safety for Element-Specific Attributes

This section discusses the current approach to typing `ElementOptions` and suggests improvements for enhanced type safety regarding attributes specific to particular HTML elements.

### Description of the Issue

The `ElementOptions` type, defined in `src/types/element-options.ts`, is a general interface applied to all HTML element creation methods (e.g., `render.$div()`, `render.$a()`, `render.$img()`). This interface includes a wide range of properties, some of which are only applicable to specific HTML element types.

For instance:
- `href` is intended for `<a>` elements.
- `src` and `alt` are intended for `<img>` elements.
- `type` might be relevant for `<button>` or `<input>` elements (though `type` is not currently in `ElementOptions`, it illustrates the general point for future attributes).

Currently, TypeScript does not prevent a developer from providing an attribute like `href` in the options for a `render.$div({})` call, or `src` in the options for `render.$p({})`.

```typescript
// Example: No TypeScript error, but 'href' is not meaningful for a div
const myDiv = render.$div({ href: 'https://example.com', textContent: 'Click me?' });

// Example: No TypeScript error, but 'src' is not meaningful for a paragraph
const myParagraph = render.$p({ src: 'image.png', textContent: 'Some text' });
```
While the `RenderElement._create` method in `src/element.ts` does perform some runtime checks using `instanceof` before applying certain properties (e.g., `this.element instanceof HTMLAnchorElement`), this does not provide compile-time safety or editor autocompletion guidance.

### Impact

-   **Reduced TypeScript Benefits**: A key advantage of TypeScript—catching errors at compile time—is diminished for element-specific attributes. Developers don't get immediate feedback if they mistakenly use an attribute that isn't relevant for the element they are creating.
-   **Potential for Developer Confusion**: This can lead to confusion, typos (e.g., `source` instead of `src` for an image), or incorrect assumptions about which attributes are supported or effective for a given element type.
-   **Less Self-Documenting API**: The types themselves do not fully guide the developer on the valid attributes for each specific element creation function. While the runtime might ignore inapplicable attributes, the development experience is less precise.

### Recommendations

To improve type safety and the developer experience, consider the following:

1.  **Element-Specific Option Types**:
    *   Define distinct TypeScript interfaces for the options of each (or commonly used) HTML element type. For example:
        ```typescript
        interface BaseElementOptions { // Common properties
            id?: string;
            className?: string;
            onClick?: (this: HTMLElement, ev: MouseEvent) => void;
            // ... other truly common options
        }

        interface AnchorElementOptions extends BaseElementOptions {
            href: string; // 'href' is now mandatory for <a>
            target?: '_blank' | '_self' | '_parent' | '_top';
            textContent?: string;
            children?: Array<HTMLElement>;
            innerHTML?: string;
        }

        interface ImageElementOptions extends BaseElementOptions {
            src: string;    // 'src' is mandatory
            alt?: string;
            width?: number;
            height?: number;
        }

        interface DivElementOptions extends BaseElementOptions {
            textContent?: string;
            children?: Array<HTMLElement>;
            innerHTML?: string;
        }
        ```
    *   The respective element creation methods (`render.$a`, `render.$img`, `render.$div`) would then use these specific types:
        ```typescript
        // In Render class
        $a(options: AnchorElementOptions): HTMLAnchorElement { /* ... */ }
        $img(options: ImageElementOptions): HTMLImageElement { /* ... */ }
        $div(options: DivElementOptions): HTMLDivElement { /* ... */ }
        ```
    *   This approach provides strong type checking, clearer intent, and better autocompletion for attributes relevant to each element.

2.  **Utility Types for Attributes (Advanced)**:
    *   For projects with a very large number of supported elements, creating and maintaining individual interfaces might become cumbersome. Advanced TypeScript features like mapped types, conditional types, or generics could be explored to construct more precise attribute sets programmatically. This is more complex but can reduce boilerplate.

3.  **Improved JSDoc/Documentation**:
    *   Regardless of the typing strategy chosen, ensure that JSDoc comments for each element creation method clearly list and describe the applicable options, especially if a generic `ElementOptions` type is retained or if base types are extended.

4.  **Consider Trade-offs**:
    *   Adopting element-specific option types significantly increases type safety and improves the developer experience. However, it does introduce more interfaces and type definitions to manage (boilerplate). The benefits of explicitness and compile-time checks often outweigh this cost for UI libraries.

Implementing more specific types would make the library more robust and align better with TypeScript's design goals, preventing common mistakes and making the API easier to use correctly.

## License

Licensed under the [MIT License](./LICENSE).

Copyright &copy; 2025 よね/Yone
