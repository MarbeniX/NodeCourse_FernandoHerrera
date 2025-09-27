//Dictionary of users

const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
];

// Callback function to get user by ID
const getUserById = (id, callback) => {
    const user = users.find((user) => user.id === id);
    user ? callback(null, user) : callback(`User with id ${id} not found`);
};

module.exports = { getUserById };
