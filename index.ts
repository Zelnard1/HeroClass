import { createUser, getUser } from "./firebase/userService";
import { Hero } from "./components/HeroClass";

async function main() {
  const hero = new Hero("1", "Warrior", ["Slash", "Block"]);
  await createUser(hero.id, {
    name: hero.name,
    abilities: hero.abilities,
    level: hero.level
  });

  const retrievedHero = await getUser(hero.id);
  console.log("Retrieved Hero:", retrievedHero);
}

main();