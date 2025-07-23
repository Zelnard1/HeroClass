import * as fs from "fs";
import { parse } from "csv-parse";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import app from "./src/firebase/firebaseConfig";

// Adjust these to match your CSV columns
const headers = [
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

const csvFilePath = "./HeroClass.csv"; // Change to your actual CSV filename

const db = getFirestore(app);

fs.createReadStream(csvFilePath)
  .pipe(parse({ columns: headers, from_line: 2, trim: true }))
  .on("data", async (row) => {
    // Example: convert Level to number
    if (row.Level) row.Level = Number(row.Level);

    // Example: convert abilities if you have such a column
    if (row.abilities && typeof row.abilities === "string") {
      row.abilities = row.abilities.split(",").map((a: string) => a.trim());
    }

    try {
      // Use Unique ID as document ID if available, otherwise Player Name
      const docId = row["Unique ID"] || row["Player Name"];
      await setDoc(doc(db, "users", docId), row);
      console.log(`Imported user: ${docId}`);
    } catch (err) {
      console.error(`Error importing user:`, err);
    }
  })
  .on("end", () => {
    console.log("CSV import complete!");
  })
  .on("error", (err) => {
    console.error("Error reading CSV:", err);
  });