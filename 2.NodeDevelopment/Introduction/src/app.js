// FITST const { message } = require("./js-foundation/01-template");

// SECOND require("./js-foundation/02-destructuring");

// THIRD
// const { getUserById } = require("./js-foundation/03-callbacks");
// function printMessage(error, user) {
//     error ? console.log(error) : console.log(`User found: ${user.name}`);
// }
// //A callback is the function that is passed as an argument to another function
// getUserById(3, printMessage);

// FOURTH
// const { getUUID, getAge } = require("./plugins");
// const { makePersonBuidler } = require("./js-foundation/04-factoryfunctions");

// const personBuilder = makePersonBuidler(getUUID, getAge);
// const obj = { name: "John", birthdate: "1990-01-01" };
// const obj2 = { name: "Mary", birthdate: "1985-05-15" };
// const jhon = personBuilder(obj);
// const mary = personBuilder(obj2);
// console.table({ jhon, mary });

// FIFTH
// const { getPokemon } = require("./js-foundation/05-promises");
// getPokemon(1).then((name) => console.log(name)); // Bulbasaur
// // getPokemon(1, (name) => console.log(name)); // Bulbasaur

// SIXTH
const { buildLogger } = require("./plugins");

const logger = buildLogger("app.js");
logger.log("hello adacito");
logger.error("this is an error message");
