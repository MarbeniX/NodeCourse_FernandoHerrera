import { findHeroById } from "./services/heroes.service";

const hero = findHeroById(3);
console.log(hero?.name);
