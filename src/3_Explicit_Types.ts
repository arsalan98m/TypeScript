/*
When we write our variables and assign values typescript automatically inferes the variable type based
on the value we give it but sometimes we might just want to initialize a variable without giving it a value
so then it can't really infer its type and then we could give it any value in the future but we can ger
around this by explicitly giving the variable a type.
*/

/*
===============
Explicit Types
===============
*/
let character: string;
let myAge: number;
let isLoggedIn: boolean;

// age = "hello"; // Error
age = 30;

// isLoggedIn = 25 // Error
isLoggedIn = false;


/*
=============
Arrays
=============
*/
let ninjas: string[];

// ninjas.push('noman'); // Error (Can not read propery push of undefined why because we've not  initialuzed array with a value of an empty array we're saying in the future it should be a string array some times its best to initialize it with empty array like this  )
// let ninjas : string[]= [];

// ninjas = [10, 20, 33]; // Error
ninjas = ["asim", "owais"];
ninjas.push("as");


/*
============
Union types
============
*/
let mixedArray: (string | number )[] = [];
mixedArray.push("hello");
mixedArray.push(20);
// mixedArray.push(true); // Error

// (We can also use union type on normal varaible not just arrays)

let uid: string | number;
uid = "abc";
uid = 123;
// uid = false; // Error



/*
==============
Objects
==============
*/

let ninjaOne: object;

ninjaOne = { name: "arsalan", age: 25 };
// ninjaOne = "hello"; Error
ninjaOne = { name: "ahad", color: "blue", skills: "swimming" };

// ninjaTwo is an object but it must have these three properties inside it name,age and color and the types of those should be string , number and string 
let ninjaTwo: {
    name: string,
    age: number,
    color: string,
}

// this now works
ninjaTwo = {
    name: "bilal",
    age: 20,
    color: "Red",
}

// Error 4th property not matched
// ninjaTwo = {
//     name: "bilal",
//     age: 20,
//     color: "Red",
//     skills: ["fighting", "swimming"]
// }

ninjaOne = []; // that would work because an array is actually a kind of object 

