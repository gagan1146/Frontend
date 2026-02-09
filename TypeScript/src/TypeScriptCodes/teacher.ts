interface Teacher {
    id: number
    name: string
    subject: string
}

class TeacherRecord implements Teacher {
    id: number
    name: string
    subject: string

    constructor(id: number, name: string, subject: string) {
        this.id = id
        this.name = name
        this.subject = subject
    }

    getInfo(): string {
        return `${this.name} (ID: ${this.id}) teaches ${this.subject}`
    }
}

export = { TeacherRecord }
