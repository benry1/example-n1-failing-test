"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDL = void 0;
exports.IDL = {
    actions: {
        init: "() => void",
        increment: "(by: number) => void",
        getCount: "() => Promise<number>"
    },
    state: {
        count: "number"
    }
};
