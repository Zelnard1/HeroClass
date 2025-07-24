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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = createUser;
exports.getUser = getUser;
const firestore_1 = require("firebase/firestore");
const firebaseConfig_1 = __importDefault(require("./firebaseConfig"));
const db = (0, firestore_1.getFirestore)(firebaseConfig_1.default);
function createUser(userId, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const userRef = (0, firestore_1.doc)(db, "users", userId);
        yield (0, firestore_1.setDoc)(userRef, data);
        console.log(`User ${userId} created successfully.`);
    });
}
function getUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const userRef = (0, firestore_1.doc)(db, "users", userId);
        const userSnap = yield (0, firestore_1.getDoc)(userRef);
        if (userSnap.exists()) {
            return userSnap.data();
        }
        else {
            console.log(`No user found with ID: ${userId}`);
            return null;
        }
    });
}
