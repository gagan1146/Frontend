function greet(name) {
    return "Hello " + name
}
console.log(greet("Chai"))

function add(a, b) {
    return a + b
}
console.log(add(5, 3))

const multiply = function(a, b) {
    return a * b
}
console.log(multiply(4, 6))

const divide = (a, b) => a / b
console.log(divide(20, 5))

function outer(x) {
    function inner(y) {
        return x + y
    }
    return inner
}
let addFive = outer(5)
console.log(addFive(10))

function sumAll(...nums) {
    return nums.reduce((acc, n) => acc + n, 0)
}
console.log(sumAll(1, 2, 3, 4, 5))

function defaultExample(a, b = 10) {
    return a + b
}
console.log(defaultExample(5))
console.log(defaultExample(5, 20))

function destructureExample({type, amount}) {
    return `Masala Chai of type ${type}, amount ${amount}`
}
console.log(destructureExample({type: "Strong", amount: "2 cups"}))

function callbackExample(arr, fn) {
    return arr.map(fn)
}
console.log(callbackExample([1, 2, 3], x => x * 2))

function asyncExample() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Done after 1 second"), 1000)
    })
}
asyncExample().then(console.log)

async function asyncAwaitExample() {
    let result = await asyncExample()
    return result + " with async/await"
}
asyncAwaitExample().then(console.log)

function higherOrder(fn, value) {
    return fn(value)
}
console.log(higherOrder(x => x * 3, 7))

function curry(a) {
    return b => c => a + b + c
}
console.log(curry(1)(2)(3))
