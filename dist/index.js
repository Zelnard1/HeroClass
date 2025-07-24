"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = require("./firebase/userService");
const HeroClass_1 = require("./components/HeroClass");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const hero = new HeroClass_1.Hero("1", "Warrior", ["Slash", "Block"]);
        yield (0, userService_1.createUser)(hero.id, {
            name: hero.name,
            abilities: hero.abilities,
            level: hero.level
        });
        const retrievedHero = yield (0, userService_1.getUser)(hero.id);
        console.log("Retrieved Hero:", retrievedHero);
    });
}
main();
