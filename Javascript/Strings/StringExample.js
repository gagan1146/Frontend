let str = "Masala Chai"

console.log("string:", str)
console.log("length:", str.length)
console.log("charAt:", str.charAt(2))
console.log("indexOf:", str.indexOf("Chai"))
console.log("lastIndexOf:", str.lastIndexOf("a"))
console.log("includes:", str.includes("Masala"))
console.log("startsWith:", str.startsWith("Mas"))
console.log("endsWith:", str.endsWith("Chai"))

console.log("slice:", str.slice(0, 6))
console.log("substring:", str.substring(0, 6))
console.log("substr:", str.substr(0, 6))

console.log("toUpperCase:", str.toUpperCase())
console.log("toLowerCase:", str.toLowerCase())

console.log("replace:", str.replace("Masala", "Ginger"))
console.log("replaceAll:", "chai chai chai".replaceAll("chai", "tea"))

console.log("split:", str.split(" "))
console.log("concat:", str.concat(" is tasty"))
console.log("repeat:", str.repeat(2))
console.log("trim:", "   chai   ".trim())
console.log("trimStart:", "   chai".trimStart())
console.log("trimEnd:", "chai   ".trimEnd())

console.log("padStart:", "5".padStart(3, "0"))
console.log("padEnd:", "5".padEnd(3, "0"))

console.log("match:", str.match(/a/g))
console.log("search:", str.search(/Chai/))
console.log("localeCompare:", "chai".localeCompare("tea"))

for (let ch of str) {
    console.log("for...of:", ch)
}

let template = `I love ${str}`
console.log("template literal:", template)

let raw = String.raw`Masala\nChai`
console.log("String.raw:", raw)

let codePoint = "🍵"
console.log("codePointAt:", codePoint.codePointAt(0))
console.log("fromCodePoint:", String.fromCodePoint(127861))
