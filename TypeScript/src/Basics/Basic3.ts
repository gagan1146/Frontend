let studentId: number = 101
let studentName: string = "StudentNameHere"
let isActive: boolean = true
let subjects: string[] = ["Math", "Science", "History"]
let marks: [string, number] = ["Math", 95]
let anyVar: any = "Flexible"
let unknownVar: unknown = 50
let nil: null = null
let undef: undefined = undefined

console.log("studentId:", studentId)
console.log("studentName:", studentName)
console.log("isActive:", isActive)
console.log("subjects:", subjects)
console.log("marks:", marks)
console.log("anyVar:", anyVar)
console.log("unknownVar:", unknownVar)
console.log("null:", nil)
console.log("undefined:", undef)

function calculateGrade(score: number): string {
    return score >= 90 ? "A" : score >= 75 ? "B" : "C"
}
console.log("grade:", calculateGrade(88))

function greetStudent(name: string): string {
    return `Welcome ${name}`
}
console.log("greetStudent:", greetStudent("Rahul"))

function optionalAge(age?: number): string {
    return age ? `Age is ${age}` : "Age not provided"
}
console.log("optionalAge:", optionalAge())
console.log("optionalAge with value:", optionalAge(20))

function defaultSection(section: string = "A"): string {
    return `Section ${section}`
}
console.log("defaultSection:", defaultSection())
console.log("defaultSection with value:", defaultSection("B"))

function totalMarks(...scores: number[]): number {
    return scores.reduce((acc, n) => acc + n, 0)
}
console.log("totalMarks:", totalMarks(80, 90, 85))

type Grade = "A" | "B" | "C"
let grade: Grade = "A"
console.log("union type grade:", grade)

interface Student {
    id: number
    name: string
    age: number
}
let student: Student = { id: 101, name: "Stud", age: 20 }
console.log("interface student:", student)

type Teacher = {
    id: number
    subject: string
}
let teacher: Teacher = { id: 201, subject: "Math" }
console.log("type alias teacher:", teacher)

class Classroom {
    roomNo: number
    constructor(roomNo: number) {
        this.roomNo = roomNo
    }
    info(): string {
        return `Classroom number ${this.roomNo}`
    }
}
let classroom = new Classroom(12)
console.log("classroom:", classroom.info())

abstract class Person {
    abstract role(): string
}
class StudentPerson extends Person {
    role(): string {
        return "Student"
    }
}
let sp = new StudentPerson()
console.log("abstract class role:", sp.role())

enum Sections {
    A,
    B,
    C
}
let sec: Sections = Sections.B
console.log("enum section:", sec)

function identity<T>(value: T): T {
    return value
}
console.log("generic number:", identity(101))
console.log("generic string:", identity("R"))

interface Pair<T, U> {
    first: T
    second: U
}
let pair: Pair<string, number> = { first: "Math", second: 95 }
console.log("generic interface pair:", pair)

type Nullable<T> = T | null
let maybeAge: Nullable<number> = null
console.log("nullable type:", maybeAge)

type Result = { success: true; data: string } | { success: false; error: string }
let res: Result = { success: true, data: "Student record saved" }
console.log("discriminated union:", res)

type ReadonlyStudent = Readonly<Student>
let readonlyStudent: ReadonlyStudent = { id: 102, name: "P", age: 21 }
console.log("readonly type:", readonlyStudent)

type PartialStudent = Partial<Student>
let partialStudent: PartialStudent = { name: "Amit" }
console.log("partial type:", partialStudent)

type RecordExample = Record<string, number>
let record: RecordExample = { studentName: 90, P: 85 }
console.log("record type:", record)

type PickExample = Pick<Student, "name">
let picked: PickExample = { name: "R" }
console.log("pick type:", picked)

type OmitExample = Omit<Student, "age">
let omitted: OmitExample = { id: 103, name: "S" }
console.log("omit type:", omitted)


const readOnlyArrays : readonly string[] = ["Array1","Array2","Array3"];
console.log(readOnlyArrays);
// readOnlyArrays[0]="How";  // cannot work as it is read only

const tupleExample: [string,string,boolean?] = ["Name","Age"];
console.log(tupleExample);