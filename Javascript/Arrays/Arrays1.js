let arr = [1, 2, 3, 4, 5]
let emptyArr = []
let mixedArr = [1, "chai", true, { type: "Masala" }]

console.log("arr:", arr)
console.log("emptyArr:", emptyArr)
console.log("mixedArr:", mixedArr)

console.log("first element:", arr[0])
arr[2] = 10
console.log("updated arr:", arr)

arr.push(6)
console.log("after push:", arr)
arr.pop()
console.log("after pop:", arr)
arr.unshift(0)
console.log("after unshift:", arr)
arr.shift()
console.log("after shift:", arr)

console.log("for loop iteration:")
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

console.log("forEach iteration:")
arr.forEach(x => console.log(x))

let doubled = arr.map(x => x * 2)
console.log("doubled:", doubled)

let evens = arr.filter(x => x % 2 === 0)
console.log("evens:", evens)

let sum = arr.reduce((acc, x) => acc + x, 0)
console.log("sum:", sum)

let found = arr.find(x => x > 3)
console.log("found:", found)

let index = arr.findIndex(x => x === 10)
console.log("index of 10:", index)

let includesTen = arr.includes(10)
console.log("includes 10:", includesTen)

let sorted = [...arr].sort((a, b) => a - b)
console.log("sorted:", sorted)

let reversed = [...arr].reverse()
console.log("reversed:", reversed)

let arr2 = [7, 8, 9]
let combined = arr.concat(arr2)
console.log("combined:", combined)

let spreadCombined = [...arr, ...arr2]
console.log("spreadCombined:", spreadCombined)

let sliced = arr.slice(1, 3)
console.log("sliced:", sliced)

arr.splice(2, 1, 99)
console.log("after splice:", arr)

let flatArr = [[1, 2], [3, 4]].flat()
console.log("flatArr:", flatArr)

let flatMapped = arr.flatMap(x => [x, x * 2])
console.log("flatMapped:", flatMapped)

let str = arr.join("-")
console.log("joined string:", str)

let keys = Object.keys(arr)
console.log("keys:", keys)

let entries = Object.entries(arr)
console.log("entries:", entries)

let unique = [...new Set([1, 2, 2, 3, 4, 4])]
console.log("unique:", unique)