"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sizes;
(function (sizes) {
    sizes[sizes["SMALL"] = 0] = "SMALL";
    sizes[sizes["MEDIUM"] = 1] = "MEDIUM";
    sizes[sizes["LARGE"] = 2] = "LARGE";
})(sizes || (sizes = {}));
var prices;
(function (prices) {
    prices[prices["SMALL"] = 30] = "SMALL";
    prices[prices["MEDIUM"] = 50] = "MEDIUM";
    prices[prices["LARGE"] = 70] = "LARGE";
})(prices || (prices = {}));
const user1 = {
    name: "A",
    age: "21",
    product: {
        size: sizes.SMALL,
        price: prices.SMALL
    }
};
class Dog {
    name;
    constructor(name) {
        this.name = name;
    }
    sound(msg) {
        return `${this.name} barks: ${msg}`;
    }
}
class Cat {
    name;
    constructor(name) {
        this.name = name;
    }
    sound(msg) {
        return `${this.name} meows: ${msg}`;
    }
}
class Cow {
    name;
    constructor(name) {
        this.name = name;
    }
    sound(msg) {
        return `${this.name} moos: ${msg}`;
    }
}
const cow1 = new Cow("Cow");
console.log(cow1);
console.log(cow1.sound("Hmm"));
//# sourceMappingURL=Basic4.js.map