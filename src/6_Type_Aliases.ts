/*
==============
 Type Aliases
==============
*/

/*
When you working with functions and you're taking in arguments or parameters and you're specifying the type of those parameters like we are adding two functions sometimes the type specification of the parameters get quite long-winded
so what we're doing is just repeating a lot of code over and over again so our way around this is to make our own type aliases and define those first just once in the file and then we can use those as many times as we want in different functions
*/

type StringOrNum = string | number;
type objWithName = {name: string , uid: StringOrNum}

const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}


const greet = (user:objWithName) => {
    console.log(`${user.name} says hello`);
}


const greetAgain = (user:objWithName) => {
    console.log(`${user.name} says hello`);
}



type Greeting = (name: string) => string;
const greeting: Greeting = (name) => "Hello";


type Person = {
    name: string;
    hungry: boolean;
} & { youtuber: boolean }

const arsalan: Person = {
    name: "arsalan",
    hungry: false,
    youtuber:false,
}