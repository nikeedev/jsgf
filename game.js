"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.functions = void 0;
const functions = require('./modules/functions');
exports.functions = functions;
if (require.main != module) {
    console.log("\n\n-----------------------------------------------------------");
    console.log("          Game.js v" + require('./package.json').version + " - Build " + require('./package.json').build);
    console.log("-----------------------------------------------------------");
}
