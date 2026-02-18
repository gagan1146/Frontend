"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add = (num1, num2) => {
    return num1 + num2;
};
const subtract = (num1, num2) => {
    return num1 - num2;
};
let addition = add(20, 30);
const addition1 = subtract(20, 30);
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
const log = (num) => {
    console.log(num);
};
log(total(2, 3, 43, 34, 23, 232, 31, 44));
//# sourceMappingURL=FunctionRelation.js.map