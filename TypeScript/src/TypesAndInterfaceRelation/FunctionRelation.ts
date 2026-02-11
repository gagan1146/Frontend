type basicMathsOperationType = (a:number,b:number)=>number;

interface basicMathsOperationInterface{
    (a:number,b:number):number
}

const add:basicMathsOperationInterface = (num1,num2)=>{
    return num1+num2;
}

const subtract:basicMathsOperationType = (num1,num2)=>{
    return num1-num2;
}

let addition:number = add(20,30);
const addition1:number = subtract(20,30);

const addAll = (a:number,b:number,c?:number):number=>{
    if(typeof c !== 'undefined'){
        return a + b + c;
    }
    return a + b;
}

const total = (...nums:number[])=>{
    return nums.reduce((prev,curr)=>prev+curr);
}

const log = (num:number):void=>{
    console.log(num);
}

log(total(2,3,43,34,23,232,31,44));