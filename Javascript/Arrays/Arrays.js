let arr1 = [10,230,21,32,45,43,90,2];
console.log(arr1);
let arr2 = [2,3,4,2,32,4,5,4];
console.log(arr2);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let stringOfFruits = fruits.toString();
console.log(stringOfFruits);
console.log(stringOfFruits[0]);
console.log(stringOfFruits.length);
console.log(stringOfFruits[stringOfFruits.length]);  // gives undefined instead of error in java

fruits.push("Guava");

stringOfFruits.forEach(element => {
    console.log(element);
});

for(let index=0;index<fruits.length;index++){
    console.log(fruits[index]);
}

for(let fruit of fruits){
    console.log(fruit);
}