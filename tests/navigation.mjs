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

/* ----- */

class Navigation {
    constructor({ router, body }) {
        this.navigationId = "testNavigation";
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
                    className: "navigation__tab",
                    onClick: () => this.onRouterClicked(tab.destination),
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


    onRouterClicked(destination) {
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
                icon: MaterialIcon.home(),
            },
            {
                name: "Notifications",
                destination: "notifications",
                icon: MaterialIcon.notifications(),
            },
            {
                name: "Menu",
                destination: "menu",
                icon: MaterialIcon.menu(),
            },
        ],
        body: {
            home: home(),
            notifications: notifications(),
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
            render.$span({
                innerText: "home",
            }),
        ],
    });
}

/* ----- */

function notifications() {
    return render.$div({
        id: "notifications",
        children: [
            render.$span({
                innerText: "notifications",
            }),
        ],
    });
}

/* ----- */

function menu() {
    return render.$div({
        id: "menu",
        children: [
            render.$span({
                innerText: "menu",
            }),
        ],
    });
}

/* ----- */

render.build({
    target: root,
    children: app(),
});
