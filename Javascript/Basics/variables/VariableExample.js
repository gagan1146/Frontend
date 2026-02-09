var a = 10
let b = 20
const c = 30
console.log("var a:", a)
console.log("let b:", b)
console.log("const c:", c)

a = 15
b = 25
console.log("updated a:", a)
console.log("updated b:", b)

let str = "Masala Chai"
let num = 42
let bool = true
let obj = { type: "Ginger", amount: 2 }
let arr = [1, 2, 3]
let func = function() { return "Hello Chai" }
console.log("string:", str)
console.log("number:", num)
console.log("boolean:", bool)
console.log("object:", obj)
console.log("array:", arr)
console.log("function:", func())

let undefinedVar
let nullVar = null
console.log("undefined:", undefinedVar)
console.log("null:", nullVar)

let globalVar = "chai"
function scopeTest() {
    let localVar = "tea"
    console.log("inside function globalVar:", globalVar)
    console.log("inside function localVar:", localVar)
}
scopeTest()

{
    let blockVar = "block scoped"
    var functionVar = "function scoped"
    console.log("inside block blockVar:", blockVar)
    console.log("inside block functionVar:", functionVar)
}
console.log("outside block functionVar:", functionVar)

let x = 5
let y = x
console.log("primitive copy:", y)

let obj1 = { name: "Masala" }
let obj2 = obj1
obj2.name = "Ginger"
console.log("reference obj1:", obj1)
console.log("reference obj2:", obj2)

let dynamicKey = "flavor"
let chaiObj = { [dynamicKey]: "Elaichi" }
console.log("dynamic key:", chaiObj)

let template = `I love ${str} with ${obj.type}`
console.log("template literal:", template)

let destructured = { type: "Masala", amount: 3 }
let { type, amount } = destructured
console.log("destructured type:", type)
console.log("destructured amount:", amount)

let [first, second] = arr
console.log("array destructuring first:", first)
console.log("array destructuring second:", second)

let defaultVal
let result = defaultVal ?? "default chai"
console.log("nullish coalescing:", result)

let logicalOr = "" || "fallback chai"
console.log("logical OR:", logicalOr)

let logicalAnd = "chai" && "tea"
console.log("logical AND:", logicalAnd)

let symbolVar = Symbol("unique")
console.log("symbol:", symbolVar.toString())

let bigIntVar = 123456789012345678901234567890n
console.log("bigint:", bigIntVar)
