

/*
=========================================
Limitation of JavaScript / ECMAScript 5
==========================================
1. It's not type safe.
2. It's becomes cumbersome to manage as it become larger.
3. It's interpreted and not compiled, hence errors can be identified only when we execute the script.
*/

/*
=========================================
What is TypeScript
==========================================
0. Plain JavaScript with types adavantage additional features.
1. It's not replacement of JavaScript nor it adds new feature of JavaScript.

2. TypeScript = JavaScript + Types = Typed superset of JavaScript.
3. It's not mandatory to strongly type everything when we are type scripting.
4. It's compiled to generate JavaScript
5. Also, any valid .js file can be renamed to .ts and compiled with other TypeScript files.
6. TypeScript generated JavaScript can reuse all of the existing JavaScript frameworks, tools and libraries.
7. It's object oriented and supports core features like interfaces and classes.
8. It was designed by Anders Hejlsberg (founder of C#) at Microsoft. Its open source and can be used in any place where we would need JavaScript.
*/


/*
=========================================
Benefits of TypeScript
==========================================

1. It compiles the code and generate syntax errors if any. This helps to highlight errors before the script is executed.
2. Because of object oriented features, It's reusable and easier to manage in larger and complicated projects.
3. Due to static typing, code written in TypeScript is more predictable and is generally easier to debug.
*/







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


