import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCPfK3VWZYqErLDX2GDuHtH5boV3_iKeE4",
    authDomain: "noflb-48ec9.firebaseapp.com",
    projectId: "noflb-48ec9",
    storageBucket: "noflb-48ec9.firebasestorage.app",
    messagingSenderId: "660194682036",
    appId: "1:660194682036:web:d245b263d644e9f59863e1",
    measurementId: "G-4VRNR4SJD3"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db: Firestore = getFirestore(app);

export { db };
