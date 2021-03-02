// now a function signature basically describes the general structure of a function
// what arguments it takes in and what type of data it return
// what type of function this variable can hold by specifying a function signature

// let greet: Function;


// example 1
let greet: (a: string, b: string) => void;  // we says greet function have two paramaeters with both have a string and returning void

greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
}

// example 2 (you can also define this way)
type Greet= (a: string, b: string) => void;  // we says greet function have two paramaeters with both have a string and returning void

let greet :Greet= (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
}

greet("arsalan","hi");



// greet = (name: string, greeting: number) => {
//     console.log(`${name} says ${greeting}`)
// } //=> Error it has not match the signature


// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string):number => {
    if (action === "add") {
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}

// example 3


let logDetails: (obj: { name: string, age: number }) => void;

logDetails = (ninja: { name: string, age: number }) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
}
