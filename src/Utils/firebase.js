// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAbQfp6S5mC2xGzrC3A4RO0aAE2vzM3ohQ",
    authDomain: "myai-project-91d63.firebaseapp.com",
    projectId: "myai-project-91d63",
    storageBucket: "myai-project-91d63.appspot.com",
    messagingSenderId: "413078252966",
    appId: "1:413078252966:web:96392f005aab0c8ba6b367",
    measurementId: "G-3MT8TZF8M5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);