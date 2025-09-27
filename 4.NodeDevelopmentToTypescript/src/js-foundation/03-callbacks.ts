type User = {
    id: number;
    name: string;
};
type Callback = {
    (error: string | null, user?: User): void;
};

const users: User[] = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
];

export const getUserById = (id: User["id"], callback: Callback) => {
    const user = users.find((user) => user.id === id);
    user ? callback(null, user) : callback(`User with id ${id} not found`);
};
