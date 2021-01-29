/*
Any type
we'd used the any type in typescript to say that this variable
would be any type it could be a string a number a boolean and
then at any point in time it could change type too so it might
be boolean at first and then we could change it to a string and 
a future

*/

let price: any = 25;

price = true;
price = "hello";
price = ["abc", 12, 2];
price = { name: "hello" };


let newArray: any[] = [];

newArray.push("arsalan");
newArray.push(1);
newArray.push(false);


let ninjaThree: { name: any, age: any };
ninjaThree = { name: "arsalan", age: "23" };