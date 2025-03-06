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


export function examples() {
    return [
        render.$div({
            id: "page",
            className: "page",
            children: app(),
        }),
    ];
}

/* ----- */

class Navigation {
    constructor({ router, body }) {
        this.navigationId = "examplesNavigation";
        this.router = router;
        this.body = body;
    }


    build() {
        return render.$div({
            id: this.navigationId,
            className: "navigation",
            children: [
                this._router(),
                this._body(),
            ]
        });
    }


    _router() {
        let tabs = [];

        this.router.forEach(tab => {
            tabs.push(
                render.$div({
                    id: `navigationTab_${tab.destination}`,
                    className: "navigation__tab",
                    onClick: () => this.onRouterClicked(tab),
                    children: [
                        render.$span({
                            className: "navigation__tab-name",
                            innerText: tab.name,
                        }),
                        (() => {
                            if (tab.icon instanceof MaterialIcon) {
                                return tab.icon;
                            }

                            return [];
                        })(),
                    ],
                })
            );
        });

        return render.$div({
            className: "navigation__router",
            children: tabs,
        })
    }


    _body() {
        return render.$div({
            className: "navigation__body",
            children: [
                this.body[this.router[0].destination],
            ],
        });
    }


    onRouterClicked(tab) {
        const destination = tab.destination;
        const tabElement = document.getElementById(`navigationTab_${destination}`);

        this.router.forEach(tab => {
            document.getElementById(`navigationTab_${tab.destination}`)
                .classList.remove("enabled");
        });

        tabElement.classList.add("enabled");

        render.build({
            target: document.querySelector(`#${this.navigationId} .navigation__body`),
            children: [
                this.body[destination],
            ],
        });
    }
}

/* ----- */

class MaterialIcon {
    static icon(name) {
        return render.$span({
            className: "material-symbol-outlined",
            innerText: name,
        });
    }


    static home() {
        return MaterialIcon.icon("home");
    }


    static notifications() {
        return MaterialIcon.icon("notifications");
    }


    static menu() {
        return MaterialIcon.icon("menu");
    }
}

/* ----- */

function app() {
    const navigation = new Navigation({
        router: [
            {
                name: "Home",
                destination: "home",
                // icon: MaterialIcon.home(),
            },
            {
                name: "Demos",
                destination: "demos",
                // icon: MaterialIcon.debug(),
            },
            {
                name: "Menu",
                destination: "menu",
                // icon: MaterialIcon.menu(),
            },
        ],
        body: {
            home: home(),
            demos: demos(),
            menu: menu(),
        },
    });

    return [
        navigation.build()
    ];
}

/* ----- */

function home() {
    return render.$div({
        id: "home",
        children: [
            render.$h1({
                innerText: "Examples",
            }),
            render.$h2({
                innerText: "Home",
            }),
            render.$span({
                innerText: "Welcome to render.js examples!\nThis is a screen navigation and its bar demo!\n\nIn preparation, Comming soon.",
            }),
        ],
    });
}

/* ----- */

function demos() {
    return render.$div({
        id: "demos",
        children: [
            render.$h1({
                innerText: "Examples",
            }),
            render.$h2({
                innerText: "Demos",
            }),
            render.$span({
                innerText: "Welcome to render.js examples!\nThis is a screen navigation and its bar demo!\n\nIn preparation, Comming soon.",
            }),
        ],
    });
}

/* ----- */

function menu() {
    return render.$div({
        id: "menu",
        children: [
            render.$h1({
                innerText: "Examples",
            }),
            render.$h2({
                innerText: "Menu",
            }),
            render.$span({
                innerText: "Welcome to render.js examples!\nThis is a screen navigation and its bar demo!\n\nIn preparation, Comming soon.",
            }),
        ],
    });
}