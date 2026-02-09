interface Student {
    id: number
    name: string
    age: number
    subjects: string[]
}

class StudentRecord implements Student {
    id: number
    name: string
    age: number
    subjects: string[]

    constructor(id: number, name: string, age: number, subjects: string[]) {
        this.id = id
        this.name = name
        this.age = age
        this.subjects = subjects
    }

    getInfo(): string {
        return `${this.name} (ID: ${this.id}) is ${this.age} years old and studies ${this.subjects.join(", ")}`
    }
}

function identity<T>(value: T): T {
    return value
}

interface Pair<T, U> {
    first: T
    second: U
}
export = { StudentRecord, identity }