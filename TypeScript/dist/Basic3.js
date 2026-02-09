"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let studentId = 101;
let studentName = "StudentNameHere";
let isActive = true;
let subjects = ["Math", "Science", "History"];
let marks = ["Math", 95];
let anyVar = "Flexible";
let unknownVar = 50;
let nil = null;
let undef = undefined;
console.log("studentId:", studentId);
console.log("studentName:", studentName);
console.log("isActive:", isActive);
console.log("subjects:", subjects);
console.log("marks:", marks);
console.log("anyVar:", anyVar);
console.log("unknownVar:", unknownVar);
console.log("null:", nil);
console.log("undefined:", undef);
function calculateGrade(score) {
    return score >= 90 ? "A" : score >= 75 ? "B" : "C";
}
console.log("grade:", calculateGrade(88));
function greetStudent(name) {
    return `Welcome ${name}`;
}
console.log("greetStudent:", greetStudent("Rahul"));
function optionalAge(age) {
    return age ? `Age is ${age}` : "Age not provided";
}
console.log("optionalAge:", optionalAge());
console.log("optionalAge with value:", optionalAge(20));
function defaultSection(section = "A") {
    return `Section ${section}`;
}
console.log("defaultSection:", defaultSection());
console.log("defaultSection with value:", defaultSection("B"));
function totalMarks(...scores) {
    return scores.reduce((acc, n) => acc + n, 0);
}
console.log("totalMarks:", totalMarks(80, 90, 85));
let grade = "A";
console.log("union type grade:", grade);
let student = { id: 101, name: "Stud", age: 20 };
console.log("interface student:", student);
let teacher = { id: 201, subject: "Math" };
console.log("type alias teacher:", teacher);
class Classroom {
    roomNo;
    constructor(roomNo) {
        this.roomNo = roomNo;
    }
    info() {
        return `Classroom number ${this.roomNo}`;
    }
}
let classroom = new Classroom(12);
console.log("classroom:", classroom.info());
class Person {
}
class StudentPerson extends Person {
    role() {
        return "Student";
    }
}
let sp = new StudentPerson();
console.log("abstract class role:", sp.role());
var Sections;
(function (Sections) {
    Sections[Sections["A"] = 0] = "A";
    Sections[Sections["B"] = 1] = "B";
    Sections[Sections["C"] = 2] = "C";
})(Sections || (Sections = {}));
let sec = Sections.B;
console.log("enum section:", sec);
function identity(value) {
    return value;
}
console.log("generic number:", identity(101));
console.log("generic string:", identity("R"));
let pair = { first: "Math", second: 95 };
console.log("generic interface pair:", pair);
let maybeAge = null;
console.log("nullable type:", maybeAge);
let res = { success: true, data: "Student record saved" };
console.log("discriminated union:", res);
let readonlyStudent = { id: 102, name: "P", age: 21 };
console.log("readonly type:", readonlyStudent);
let partialStudent = { name: "Amit" };
console.log("partial type:", partialStudent);
let record = { studentName: 90, P: 85 };
console.log("record type:", record);
let picked = { name: "R" };
console.log("pick type:", picked);
let omitted = { id: 103, name: "S" };
console.log("omit type:", omitted);
const readOnlyArrays = ["Array1", "Array2", "Array3"];
console.log(readOnlyArrays);
// readOnlyArrays[0]="How";  // cannot work as it is read only
const tupleExample = ["Name", "Age"];
console.log(tupleExample);
//# sourceMappingURL=Basic3.js.map