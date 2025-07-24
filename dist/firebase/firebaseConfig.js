"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("firebase/app");
const firebaseConfig = {
    apiKey: "AIzaSyAawrkvi0v4MJRWh58Bdw_a9FxvPzyYp1c",
    authDomain: "heroclass-d11ba.firebaseapp.com",
    projectId: "heroclass-d11ba",
    storageBucket: "heroclass-d11ba.firebasestorage.app",
    messagingSenderId: "1018502670240",
    appId: "1:1018502670240:web:d4fe0031ec80bda4f6a6c5",
    measurementId: "G-QMLG8LQXP9"
};
// Initialize Firebase
const app = (0, app_1.initializeApp)(firebaseConfig);
exports.default = app;
