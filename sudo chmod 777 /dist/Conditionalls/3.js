"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var rect = { x: 0, y: 12, width: "12cm", height: "15cm" };
var { x, y, width, height } = rect;
rect.x = 10;
rect.y = 30;
({ x, y, width, height } = rect);
var _a = { x: 1, y: 2, z: 3, d: 4, n: 5, p: 6, t: 7 }, { x, y } = _a, remaining = __rest(_a, ["x", "y"]);
function taco(safePoint) { }
const safePoint2 = { x: 2, z: 3, y: 2, m: 4, t: 10 };
const { t } = safePoint2, safePoint = __rest(safePoint2, ["t"]);
taco(safePoint2);
console.log(safePoint2);
var x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y);
