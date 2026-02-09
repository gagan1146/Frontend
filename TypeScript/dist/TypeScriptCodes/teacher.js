"use strict";
class TeacherRecord {
    id;
    name;
    subject;
    constructor(id, name, subject) {
        this.id = id;
        this.name = name;
        this.subject = subject;
    }
    getInfo() {
        return `${this.name} (ID: ${this.id}) teaches ${this.subject}`;
    }
}
module.exports = { TeacherRecord };
//# sourceMappingURL=teacher.js.map