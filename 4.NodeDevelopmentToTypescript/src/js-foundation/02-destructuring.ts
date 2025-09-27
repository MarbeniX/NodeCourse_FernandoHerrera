type User = {
    name: string;
    age: number;
};

type Person = {
    name: string;
    age: number;
    city: string;
};

export const characters = ["Mario", "Luigi", "Peach", "Bowser"];

export const numbers = [10, 20, 30];
export const users: User[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
];
export const matrix = [
    [1, 2, 3],
    [4, 5, 6],
];
export const person: Person = { name: "Charlie", age: 28, city: "Paris" };
