interface Student {
    id: number;
    name: string;
    age: number;
    subjects: string[];
}
declare class StudentRecord implements Student {
    id: number;
    name: string;
    age: number;
    subjects: string[];
    constructor(id: number, name: string, age: number, subjects: string[]);
    getInfo(): string;
}
declare function identity<T>(value: T): T;
declare const _default: {
    StudentRecord: typeof StudentRecord;
    identity: typeof identity;
};
export = _default;
//# sourceMappingURL=student.d.ts.map