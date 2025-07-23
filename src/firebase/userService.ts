import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import app from "./firebaseConfig";

const db = getFirestore(app);

export async function createUser(userId: string, data: object) {
  const userRef = doc(db, "users", userId);
  await setDoc(userRef, data);
  console.log(`User ${userId} created successfully.`);
}

export async function getUser(userId: string) {
  const userRef = doc(db, "users", userId);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    return userSnap.data();
  } else {
    console.log(`No user found with ID: ${userId}`);
    return null;
  }
}