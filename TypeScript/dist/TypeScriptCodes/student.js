"use strict";
class StudentRecord {
    id;
    name;
    age;
    subjects;
    constructor(id, name, age, subjects) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.subjects = subjects;
    }
    getInfo() {
        return `${this.name} (ID: ${this.id}) is ${this.age} years old and studies ${this.subjects.join(", ")}`;
    }
}
function identity(value) {
    return value;
}
module.exports = { StudentRecord, identity };
//# sourceMappingURL=student.js.map