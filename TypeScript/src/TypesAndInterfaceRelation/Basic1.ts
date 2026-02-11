type studentDataType = {
    name:string,
    age:number,
    address:string,
    mobileno:string
    subjects:string[]
}

interface studentDataInterface{
    name:string,
    age:number,
    address:string,
    mobileno:string
    subjects:string[]
}

const student1:studentDataInterface = {
    name:"John",
    age:20,
    address:"a52",
    mobileno:"9999999999",
    subjects:["CS","COMP"]
}
const student2:studentDataType = {
    name:"John",
    age:20,
    address:"a52",
    mobileno:"9999999999",
    subjects:["CS","COMP"]
}