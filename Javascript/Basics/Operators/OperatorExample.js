let a = 10
let b = 3

console.log("addition:", a + b)
console.log("subtraction:", a - b)
console.log("multiplication:", a * b)
console.log("division:", a / b)
console.log("modulus:", a % b)
console.log("exponentiation:", a ** b)

console.log("increment:", ++a)
console.log("decrement:", --b)

let x = 5
x += 2
console.log("x += 2:", x)
x -= 1
console.log("x -= 1:", x)
x *= 3
console.log("x *= 3:", x)
x /= 2
console.log("x /= 2:", x)
x %= 4
console.log("x %= 4:", x)

console.log("equal:", 5 == "5")
console.log("strict equal:", 5 === "5")
console.log("not equal:", 5 != "6")
console.log("strict not equal:", 5 !== "5")
console.log("greater than:", 10 > 5)
console.log("less than:", 3 < 7)
console.log("greater or equal:", 5 >= 5)
console.log("less or equal:", 4 <= 5)

console.log("logical AND:", true && false)
console.log("logical OR:", true || false)
console.log("logical NOT:", !true)

console.log("ternary:", (10 > 5) ? "yes" : "no")

console.log("typeof number:", typeof 123)
console.log("typeof string:", typeof "chai")
console.log("typeof object:", typeof {a:1})
console.log("instanceof:", [] instanceof Array)

let c = null
let d = c ?? "default"
console.log("nullish coalescing:", d)

let e = "Masala" || "Ginger"
console.log("logical OR fallback:", e)

let f = "Chai" && "Tea"
console.log("logical AND fallback:", f)

let g = 2 << 1
console.log("left shift:", g)
let h = 8 >> 2
console.log("right shift:", h)
let i = 5 & 3
console.log("bitwise AND:", i)
let j = 5 | 3
console.log("bitwise OR:", j)
let k = 5 ^ 3
console.log("bitwise XOR:", k)
let l = ~5
console.log("bitwise NOT:", l)

let m = {name:"chai"}
let n = m
console.log("assignment reference:", n)

let o = (true ? "Masala" : "Plain")
console.log("conditional operator:", o)
