//First
// import { message } from "./js-foundation/01-template";
// console.log(message);

//Second
// import {
//     characters,
//     numbers,
//     users,
//     matrix,
//     person,
// } from "./js-foundation/02-destructuring";

// const arrays = [characters, numbers, users, matrix];
// arrays.forEach((arr) => console.table(arr));

//Thrid
// import { getUserById } from "./js-foundation/03-callbacks";
// getUserById(2, (error, user) => {
//     error ? console.error(error) : console.log(user);
// });

//Factory functions
// import { getAge } from "./js-foundation/04-factoryfunction";
// console.log(getAge(new Date(2002, 6, 22)));

// import { getUUID } from "./plugins/getUUID.plugin";
// const uuid = getUUID();
// console.log(uuid);

import { buildLogger } from "./plugins";
const logger = buildLogger("client");
logger.log("This is an info message");
logger.error("This is an error message");
