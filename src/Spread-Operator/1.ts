import fs = require("fs");
function foo(f: number, g: number, h: number) {}
let args = [0, 1, 2];

//@ts-ignore
foo(...args);

var foo2 = { a: 1, b: 2 };
var foo3 = { b: 3, c: 4 };

var { ...foo2 } = foo2;

// console.log(foo2);

var someArray: number[] = [0, 4, 5];

for (let item in someArray) {
  //   console.log(item);
}

var hello: string[] = ["i want to earn a lot of money"];

for (var char of hello) {
  //   console.log(char);
}

var someArray = [9, 2, 5];
for (var item of someArray) {
  //   console.log(item);
}

interface Iterator<T> {
  next(value?: any): ResultadoIteracion<T>;
  return?(value?: any): ResultadoIteracion<T>;
  throw?(e?: any): ResultadoIteracion<T>;
}

interface ResultadoIteracion<T> {
  done: boolean;
  value?: T;
}

class Component {
  constructor(public name: string) {}
}

//@ts-ignore
class Frame implements Iterator<Component> {
  constructor(public name: string, public components: Component[]) {}
  [Symbol.iterator]() {
    let pointer = 0;
    let components = this.components;

    return {
      next(): IteratorResult<Component> {
        if (pointer < components.length) {
          return {
            done: false,
            value: components[pointer++],
          };
        } else {
          return {
            done: true,
            value: null,
          };
        }
      },

      [Symbol.iterator](): IterableIterator<Component> {
        //@ts-ignore
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
  //   console.log(item);
}

class Fib implements IterableIterator<number> {
  protected fn1 = 0;
  protected fn2 = 1;

  constructor(protected maxValue?: number) {}

  //@ts-ignore
  public next(): IterableIterator<number> {
    var current = this.fn1;
    this.fn1 = this.fn2;
    this.fn2 = current + this.fn1;

    if (this.maxValue != null && current >= this.maxValue) {
      return {
        //@ts-ignore
        done: true,
        value: null,
      };
    }
    return {
      //@ts-ignore
      done: false,
      value: current,
    };
  }

  [Symbol.iterator](): IterableIterator<number> {
    //@ts-ignore
    return this;
  }
}

let fib = new Fib();

console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());

// function loadJSON(filename: string, cb: (error: Error) => void) {
//   fs.readFile(filename, function (err, data) {
//     if (err) {
//       cb(err);
//     } else {
//       try {
//         cb(null, JSON.parse(data));
//       } catch (err) {
//         cb(err);
//       }
//     }
//   });
// }

namespace Utility {
  export function log(msg) {
    console.log(msg);
  }
  export function error(msg) {
    console.log(error);
  }
}

//Usage
Utility.log("Call me");
Utility.error("Maybe");

// The namespace keyword generates the same Javascript that we saw earlier

(function (Utility) {
  // Add stuff to Utility
})(Utility || (Utility = {}));
