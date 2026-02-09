let studentObject1 = {
    name:"John",
    age:40,
    gender:"Male"
};
let studentObject2 = {
    name:"John",
    age:40,
    gender:"Male"
};

console.log(studentObject1);
console.log(studentObject2);

let obj = { name: "Chai", type: "Masala", amount: 2 }

console.log("object:", obj)
console.log("name:", obj.name)
console.log("type:", obj["type"])

obj.amount = 3
console.log("updated amount:", obj.amount)

obj.size = "Large"
console.log("added property:", obj)

delete obj.type
console.log("after delete:", obj)

for (let key in obj) {
    console.log("for...in:", key, obj[key])
}

console.log("keys:", Object.keys(obj))
console.log("values:", Object.values(obj))
console.log("entries:", Object.entries(obj))

Object.assign(obj, { flavor: "Strong" })
console.log("after assign:", obj)

let clone = { ...obj }
console.log("clone:", clone)

let merged = { ...obj, extra: "Sugar" }
console.log("merged:", merged)

let frozen = Object.freeze({ a: 1, b: 2 })
console.log("frozen:", frozen)

let sealed = Object.seal({ x: 10, y: 20 })
sealed.x = 15
console.log("sealed:", sealed)

let nested = { chai: { type: "Ginger", hot: true } }
console.log("nested:", nested.chai.type)

let dynamicKey = "special"
let dynamicObj = { [dynamicKey]: "Kulhad" }
console.log("dynamic key:", dynamicObj)

let objArr = [
    { id: 1, name: "Masala" },
    { id: 2, name: "Ginger" },
    { id: 3, name: "Elaichi" }
]
console.log("map objects:", objArr.map(o => o.name))
console.log("filter objects:", objArr.filter(o => o.id > 1))
console.log("reduce objects:", objArr.reduce((acc, o) => acc + o.id, 0))
