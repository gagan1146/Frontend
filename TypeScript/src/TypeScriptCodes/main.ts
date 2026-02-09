const studentModule = require("./student") 
const teacherModule = require("./teacher")

const { StudentRecord, identity } = studentModule
const { TeacherRecord } = teacherModule

let student1 = new StudentRecord(101, "Rahul", 20, ["Math", "Science"])
console.log("student info:", student1.getInfo())

let teacher1 = new TeacherRecord(201, "Priya", "Math")
console.log("teacher info:", teacher1.getInfo())

// console.log("generic identity number:", identity<number>(100))
// console.log("generic identity string:", identity<string>("Hello Student"))

type Pair<T, U> = { first: T; second: U }
let pair: Pair<string, number> = { first: "History", second: 85 }
console.log("generic pair:", pair)