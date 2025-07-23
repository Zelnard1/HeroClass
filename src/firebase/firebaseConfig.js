// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// >>> ADD THIS LINE TO IMPORT THE AUTH SERVICE <<<
import { getAuth } from "firebase/auth"; // <--- Add this import!

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAawrkvi0v4MJRWh58Bdw_a9FxvPzyYp1c",
  authDomain: "heroclass-d11ba.firebaseapp.com",
  databaseURL: "https://heroclass-d11ba-default-rtdb.firebaseio.com",
  projectId: "heroclass-d11ba",
  storageBucket: "heroclass-d11ba.firebasestorage.app",
  messagingSenderId: "1018502670240",
  appId: "1:1018502670240:web:d4fe0031ec80bda4f6a6c5",
  measurementId: "G-QMLG8LQXP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// >>> ADD THIS LINE TO GET A REFERENCE TO THE AUTH SERVICE <<<
const auth = getAuth(app); // <--- Add this line!

// Now 'auth' is ready to be used for authentication operations!
// You can now use the 'auth' object for functions like createUserWithEmailAndPassword, signInWithEmailAndPassword, etc.

