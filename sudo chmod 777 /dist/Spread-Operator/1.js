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
Object.defineProperty(exports, "__esModule", { value: true });
function foo(f, g, h) { }
let args = [0, 1, 2];
foo(...args);
var foo2 = { a: 1, b: 2 };
var foo3 = { b: 3, c: 4 };
var _a = foo2, foo2 = __rest(_a, []);
var someArray = [0, 4, 5];
for (let item in someArray) {
}
var hello = ["i want to earn a lot of money"];
for (var char of hello) {
}
var someArray = [9, 2, 5];
for (var item of someArray) {
}
class Component {
    constructor(name) {
        this.name = name;
    }
}
class Frame {
    constructor(name, components) {
        this.name = name;
        this.components = components;
    }
    [Symbol.iterator]() {
        let pointer = 0;
        let components = this.components;
        return {
            next() {
                if (pointer < components.length) {
                    return {
                        done: false,
                        value: components[pointer++],
                    };
                }
                else {
                    return {
                        done: true,
                        value: null,
                    };
                }
            },
            [Symbol.iterator]() {
                return this;
            },
        };
    }
}
let frame = new Frame("Door", [
    new Component("top"),
    new Component("bottom"),
    new Component("left"),
    new Component("right"),
]);
for (let item of frame) {
}
class Fib {
    constructor(maxValue) {
        this.maxValue = maxValue;
        this.fn1 = 0;
        this.fn2 = 1;
    }
    next() {
        var current = this.fn1;
        this.fn1 = this.fn2;
        this.fn2 = current + this.fn1;
        if (this.maxValue != null && current >= this.maxValue) {
            return {
                done: true,
                value: null,
            };
        }
        return {
            done: false,
            value: current,
        };
    }
    [Symbol.iterator]() {
        return this;
    }
}
let fib = new Fib();
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
