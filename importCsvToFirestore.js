"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var csv_parse_1 = require("csv-parse");
var firestore_1 = require("firebase/firestore");
var firebaseConfig_1 = __importDefault(require("./src/firebase/firebaseConfig"));
// Adjust these to match your CSV columns
var headers = [
    "Player Name",
    "Character Class",
    "Level",
    "Character Gender",
    "XP",
    "Heart Health Totals",
    "Mana Crystals",
    "Gold Pieces",
    "XP Enter",
    "Health Enter",
    "Mana Crystals Enter",
    "GP Enter",
    "Team",
    "Unique ID",
    "Record for Pet Feeding",
    "Vaulted Crystals",
    "Sprite Check",
    "Red Crystals",
    "Treasury GP Locked",
    "Bill Start Date",
    "Bill Maturity Date",
    "Pending Payout",
    "Green Crystal Purchase Rate",
    "Green Crystal Purchase Date",
    "Green Crystal Settled (TRUE/FALSE or timestamp)",
    "Green Crystal GP Gain/Loss",
    "Training Lock",
    "Kudos Log",
    "Consequence Lock Date",
    "Kudos Bonus Remaining",
    "Episode Completion"
];
var csvFilePath = "./HeroClass.csv"; // Change to your actual CSV filename
var db = (0, firestore_1.getFirestore)(firebaseConfig_1.default);
fs.createReadStream(csvFilePath)
    .pipe((0, csv_parse_1.parse)({ columns: headers, from_line: 2, trim: true }))
    .on("data", function (row) { return __awaiter(void 0, void 0, void 0, function () {
    var docId, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                // Example: convert Level to number
                if (row.Level)
                    row.Level = Number(row.Level);
                // Example: convert abilities if you have such a column
                if (row.abilities && typeof row.abilities === "string") {
                    row.abilities = row.abilities.split(",").map(function (a) { return a.trim(); });
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                docId = row["Unique ID"] || row["Player Name"];
                return [4 /*yield*/, (0, firestore_1.setDoc)((0, firestore_1.doc)(db, "users", docId), row)];
            case 2:
                _a.sent();
                console.log("Imported user: ".concat(docId));
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                console.error("Error importing user:", err_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); })
    .on("end", function () {
    console.log("CSV import complete!");
})
    .on("error", function (err) {
    console.error("Error reading CSV:", err);
});
