import console = require("node:console")

interface StudentMarks{
    [name:string]:number
}

const ClassA:StudentMarks={
    Rock:90,
    John:88
}

console.log(ClassA.Rock);
console.log(ClassA["Rock"]);
// console.log(ClassA[Rock]);// Rock is not defined