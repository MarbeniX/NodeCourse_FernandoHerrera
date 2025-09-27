const { PATHEXT, PROCESSOR_ARCHITECTURE, USERNAME } = process.env;
console.table({ PATHEXT, PROCESSOR_ARCHITECTURE, USERNAME });

const characters = ["Mario", "Luigi", "Peach", "Bowser"];
const [, , third] = characters;
console.table({ third });
// Example data structures using console.table
const numbers = [10, 20, 30];
console.table(numbers);

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
];
console.table(users);

const person = { name: "Charlie", age: 28, city: "Paris" };
console.table(person);

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
];
console.table(matrix);
