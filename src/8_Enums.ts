/*
================
Enums
================
Enums are a way to enumerate the possible values for a type. They are unordered data structures
that map keys to values. Think of them like objects where the keys are fixed at compile time, so
TypeScript can check that the given key actually exists when you access it.

There are two kinds of enums: enums that map from strings to strings, and enums that map from
strings to numbers. They look like this:

*/

// enum Langugae{
//     English,
//     Spanish,
//     Russain
// }


// By convention, enum names are uppercase and singular. Their keys are also uppercase.

//TypeScript will automatically infer a number as the value for each member of your enum, but you
// can also set values explicitly. Let’s make explicit what TypeScript inferred in the previous example:

/*
enum Langugae{
    English = 0,
    Spanish = 1,
    Russain = 2

}
*/


//To retrieve a value from an enum, you access it with either dot or bracket notation—just like you
// would to get a value from a regular object:

/*
let myFirstLang = Langugae.Russain; // retutn 2
let secondLang = Langugae.Spanish // return 1
*/

// You can split your enum across multiple declarations, and TypeScript will automatically merge them for you

/*
enum Language  {
    English = 0,
    Spanish = 1
}


enum Language {
    Russain = 2
}

*/


// You can use computed values, and you don’t have to define all of them (TypeScript will do its best to infer what’s missing):

/*
enum Language {
    English = 100,
    Spanish = 200 + 300,
    Russain // Typescript infers 501 (the next number after 500)
}
*/


// You can also use string values for enums, or even mix string and number values:

enum Color {
    Red= "#c10000",
    Blue = "#007ac1",
    Pink = 0xc10050, // A hexadecimal literal
    White = 255,
}



// let a = Color.Red;
// let b = Color.Green; Error Green not exist


// You shouldn’t be able to get Color[6], but TypeScript doesn’t stop you! We can ask TypeScript to
// prevent this kind of unsafe access by opting into a safer subset of enum behavior with const
// enuminstead. Let’s rewrite our Language enum from earlier:

const enum Language {
English,
Spanish,
Russian
}
// Accessing a valid enum key
let a = Language.English // Language
// Accessing an invalid enum key
let b = Language.Tagalog // Error TS2339: Property 'Tagalog' does not exist
// on type 'typeof Language'.
// Accessing a valid enum value
let c = Language[0] // Error TS2476: A const enum member can only be
// accessed using a string literal.
// Accessing an invalid enum value
let d = Language[6] // Error TS2476: A const enum member can only be
// accessed using a string literal.