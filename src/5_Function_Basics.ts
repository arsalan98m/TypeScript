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