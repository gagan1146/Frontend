interface Teacher {
    id: number;
    name: string;
    subject: string;
}
declare class TeacherRecord implements Teacher {
    id: number;
    name: string;
    subject: string;
    constructor(id: number, name: string, subject: string);
    getInfo(): string;
}
declare const _default: {
    TeacherRecord: typeof TeacherRecord;
};
export = _default;
//# sourceMappingURL=teacher.d.ts.map