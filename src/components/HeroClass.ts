export interface HeroClass {
  id: string;
  name: string;
  abilities: string[];
  level: number;
}

export class Hero implements HeroClass {
  id: string;
  name: string;
  abilities: string[];
  level: number;

  constructor(id: string, name: string, abilities: string[], level: number = 1) {
    this.id = id;
    this.name = name;
    this.abilities = abilities;
    this.level = level;
  }

  levelUp() {
    this.level++;
    console.log(`${this.name} leveled up to ${this.level}!`);
  }
  addAbility(ability: string) {
    this.abilities.push(ability);
    console.log(`${ability} added to ${this.name}'s abilities.`);
  }
}
