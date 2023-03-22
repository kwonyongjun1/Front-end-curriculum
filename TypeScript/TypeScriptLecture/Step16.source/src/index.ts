import Dog from "./Dog"
import ShelterDog from "./ShelterDog"
import {add, multiply, divde} from "./utils"
console.log("FROM INDEX FILE!");

const elton = new Dog("Elton", "Aussie", 0.5);
elton.bark();

console.log(add(4,5));
console.log(multiply(4,5));
console.log(divde(4,5));

const buffy = new ShelterDog("Buffy", "Pitbull", 5, "Desert Springs Shelter");