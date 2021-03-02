// Interfaces are built to define shapes of objects

// Interfaces with Objects
interface Person {
  name: string;
  hungry: boolean;
}

// unique feature of interfaces is it inherit parent data
interface ChildPerson extends Person {
  youtuber: boolean;
}

const me: ChildPerson = {
  name: "arsalan",
  hungry: true,
  youtuber: false,
};

// Interfaces with functions
interface Greeting {
  (name: string): string;
}

const myGreeting: Greeting = (name) => "hello";
