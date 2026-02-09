"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const studentModule = require("./student");
const teacherModule = require("./teacher");
const { StudentRecord, identity } = studentModule;
const { TeacherRecord } = teacherModule;
let student1 = new StudentRecord(101, "Rahul", 20, ["Math", "Science"]);
console.log("student info:", student1.getInfo());
let teacher1 = new TeacherRecord(201, "Priya", "Math");
console.log("teacher info:", teacher1.getInfo());
let pair = { first: "History", second: 85 };
console.log("generic pair:", pair);
//# sourceMappingURL=main.js.map