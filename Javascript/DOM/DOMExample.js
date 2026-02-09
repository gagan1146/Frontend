let heading = document.createElement("h1")
heading.textContent = "Masala Chai"
document.body.appendChild(heading)
console.log("created heading:", heading)

let para = document.createElement("p")
para.innerText = "Freshly brewed chai"
document.body.appendChild(para)
console.log("created paragraph:", para)

let div = document.createElement("div")
div.id = "chaiDiv"
div.className = "chai-container"
document.body.appendChild(div)
console.log("created div:", div)

let btn = document.createElement("button")
btn.textContent = "Order Chai"
div.appendChild(btn)
console.log("created button:", btn)

let input = document.createElement("input")
input.type = "text"
input.value = "Enter chai type"
div.appendChild(input)
console.log("created input:", input)

let list = document.createElement("ul")
let items = ["Masala", "Ginger", "Elaichi"]
items.forEach(item => {
    let li = document.createElement("li")
    li.textContent = item
    list.appendChild(li)
})
div.appendChild(list)
console.log("created list:", list)

let foundDiv = document.getElementById("chaiDiv")
console.log("getElementById:", foundDiv)

let allParas = document.getElementsByTagName("p")
console.log("getElementsByTagName:", allParas)

let allDivs = document.querySelectorAll("div")
console.log("querySelectorAll:", allDivs)

btn.addEventListener("click", () => {
    console.log("button clicked")
    heading.textContent = "Chai Ordered"
})

input.addEventListener("focus", () => {
    console.log("input focused")
})

input.addEventListener("blur", () => {
    console.log("input blurred")
})

heading.style.color = "brown"
heading.style.fontSize = "24px"
console.log("styled heading:", heading)

div.setAttribute("data-chai", "special")
console.log("setAttribute:", div.getAttribute("data-chai"))

div.classList.add("highlight")
console.log("classList add:", div.classList)

div.classList.remove("highlight")
console.log("classList remove:", div.classList)

div.classList.toggle("active")
console.log("classList toggle:", div.classList)

let cloned = div.cloneNode(true)
document.body.appendChild(cloned)
console.log("cloned node:", cloned)

document.body.removeChild(cloned)
console.log("removed cloned node")

let newPara = document.createElement("p")
newPara.textContent = "Hot Kulhad Chai"
document.body.replaceChild(newPara, para)
console.log("replaced paragraph:", newPara)

console.log("innerHTML:", div.innerHTML)
console.log("outerHTML:", div.outerHTML)
console.log("textContent:", div.textContent)
