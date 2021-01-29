let name = "arsalan";
let age = 30;
let isDay = false;

// name = 10; // Error -> type '10' is not assignable to type 'string'
name = "rehan"; // it's work
 
// age = "abc"; // Error -> type "abc" is not assignable to type "number"
age = 11; // it's work

// isDay = "yes"; // Error -> type "yes" is not assignable to type "boolean"
isDay = true; // it's work


const add = (n1:number,n2:number) => {
    return n1 + n2;
}

// console.log(add("hello", 2)); // error
console.log(add(2,3))


