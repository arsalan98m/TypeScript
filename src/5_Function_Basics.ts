// let greet = () => {
//     console.log("hello, world");
// }

// greet = "hello"; // Error (type string is not assignable to  type ()=> void )

let greet: Function;

greet = () => {
    console.log("hello, world");
}

// c is default optional parameter

const sum = (a:number,b:number, c?:number|string = 10) => {
    console.log(a + b);
    console.log(c);
}

sum(5, 10);
sum(10,10, "abc")


/*
===============
Examples
================
*/

/*
function foo(p1:{a:string,b:number}){
    let {a,b} = p1;
    console.log("a=>",a);
    console.log("b=>",b);
}

foo({a:"abc",b:10});
*/


// let say sometime we will not able to pass a value of error Obviously its going to be a compilation error
// beacuse the required object is supposed to be have a two properties a and b 
// foo({a:"A"}) -> Error

// To get rid of this problem by putting b as option using ? mark

/*
function foo(p1:{a:string,b?:number}){
    let {a,b} = p1;
    console.log("a=>",a); // A
    console.log("b=>",b); // undefined
}

foo({a:"A"});
*/

// In this case b will be undefined so what will be the case we dont want undefined multiple cases
// one of the solution is at the time of desstructuring i say value of b=100 so we are able to
// provide a default value at the time of destructuring

/*
function foo(p1:{a:string,b?:number}){
    let {a,b=100} = p1;
    console.log("a=>",a); 
    console.log("b=>",b); 
}

foo({a:"A"});
foo({a:"A",b:90});
*/


// Calling foo without passing any data as an object how we will do that "a" as an optional

/*
function foo(p1:{a?:string,b?:number}){
    let {a="",b=100} = p1;
    console.log("a=>",a); 
    console.log("b=>",b); 
}

foo({})
*/

// I want to write the same function now but in a  little different way
// so we have got two varaibles declared a and b both have the default values

/*
function foo({a,b}={a:"",b:10}){
    
    console.log("a=>",a); 
    console.log("b=>",b); 
}

foo()
//foo({}) // Error-> ('{}' is not assignable to parameter of type '{a:string,b:number}'); 
*/





// Default and Opitional

function foo({a,b=0}={a:""}){ // Here b is optional but a is required
    
    console.log("a=>",a); 
    console.log("b=>",b); 
}

foo();
foo({a:"abc"})
// foo({}) Error

