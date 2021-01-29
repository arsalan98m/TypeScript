/* 
==============================================================
Arrays(if we decalare out array at the start to just
contain one type it can only then have that one type in it)
==============================================================
*/


let names = ['arsalan', 'bilal', 'tahir'];
names.push("shaka");
 
// names.push(1); // Error -> Argument of type number is not assignable to type string
// because we initially define array of string

// names[0] = 1 // Error
// names = "string" // Error (you cant change array type to string)

let numbers = [10, 20, 30, 40];
numbers.push(25);

// numbers.push("abc"); // Error -> Argument of type number is not assignable to type string
// numbers[1] = "abc";  // Error

let mixed = ["cat", 3, "apple", true, 8, 9];
mixed.push("mango");
mixed.push(10);
mixed[0] = 3;

/*
========================
Objects
(if we decalre a property in specif type then we can't change that type)
(we can't then just add on extra properties once we've defined the variable or the object to begin
we cant't add additional properties to)
========================
*/


let ninja = {
    name: "arsalan",
    age: 25,
    color: "black",
}

ninja.age = 40; // thats fine
ninja.name = "bilal" // thats fine

// ninja.age = "30" // Error (it can't change number type to string)

// ninja.skills = ["fighting", "swimming"]; // Error -> skills doest not exist

// ninja = {
//     name: "owais",
//     age: 33,
// }  ---> Error (it exaclty have the same type of object and same properties)

ninja = {
    name: "owais",
    age: 33,
    color: "blue",
    
}  