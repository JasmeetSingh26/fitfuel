
// src/lib/firebase.ts
import { initializeApp, getApps, type FirebaseApp } from "firebase/app";

// IMPORTANT: Replace with your actual Firebase project configuration.
// You can find this in your Firebase project settings.
const firebaseConfig = {
  apiKey: "AIzaSyBiZ_yFcAD-jaDFgsUAs-BCddK2YEQYo70",
  authDomain: "fitfuel-ai-zb0l7.firebaseapp.com",
  projectId: "fitfuel-ai-zb0l7",
  storageBucket: "fitfuel-ai-zb0l7.firebasestorage.app",
  messagingSenderId: "149356887162",
  appId: "1:149356887162:web:9a626333c13c70d7c44fc3",
  measurementId: "G-FBGCCDLGSE"
};

let app: FirebaseApp;

// Initialize Firebase only if it hasn't been initialized yet
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

export { app };
