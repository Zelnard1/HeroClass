"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
class Hero {
    constructor(id, name, abilities, level = 1) {
        this.id = id;
        this.name = name;
        this.abilities = abilities;
        this.level = level;
    }
    levelUp() {
        this.level++;
        console.log(`${this.name} leveled up to ${this.level}!`);
    }
    addAbility(ability) {
        this.abilities.push(ability);
        console.log(`${ability} added to ${this.name}'s abilities.`);
    }
}
exports.Hero = Hero;
