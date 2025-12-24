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

/**
 * @abstract
 */
export class Interval {
    /**
     * @param {{ value: * }}
     */
    constructor({ interval }) {
        this.#interval = interval;
    }

    /**
     * @returns {*}
     */
    get interval() {
        return this.#interval;
    }

    set interval(newInterval) {
        this.#interval = newInterval;
        this.#listeners.forEach(async (listener) => await listener());
    }

    addListener({ callback }) {
        this.#listeners.push(callback);
    }

    removeListener({ callback }) {
        this.#listeners.splice(this.#listeners.indexOf(callback), 1);
    }

    #interval = null;
    #listeners = [];
}
