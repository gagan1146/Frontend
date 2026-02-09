let arr = [1, 2, 3, 4, 5]

for (let i = 0; i < arr.length; i++) {
    console.log("for loop:", arr[i])
}

let j = 0
while (j < arr.length) {
    console.log("while loop:", arr[j])
    j++
}

let k = 0
do {
    console.log("do while loop:", arr[k])
    k++
} while (k < arr.length)

for (let x of arr) {
    console.log("for...of loop:", x)
}

for (let key in arr) {
    console.log("for...in loop:", key, arr[key])
}

arr.forEach(x => console.log("forEach:", x))

let doubled = arr.map(x => x * 2)
console.log("map:", doubled)

let evens = arr.filter(x => x % 2 === 0)
console.log("filter:", evens)

let sum = arr.reduce((acc, x) => acc + x, 0)
console.log("reduce:", sum)

let nested = [[1, 2], [3, 4], [5, 6]]
for (let sub of nested) {
    for (let val of sub) {
        console.log("nested loop:", val)
    }
}

let obj = {a: 1, b: 2, c: 3}
for (let key in obj) {
    console.log("object loop:", key, obj[key])
}

let str = "chai"
for (let ch of str) {
    console.log("string loop:", ch)
}
