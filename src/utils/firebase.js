// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8njkxI8-55ONZFNjtO2Z9wnMGK2skRFE",
  authDomain: "netflix-2024-bd057.firebaseapp.com",
  projectId: "netflix-2024-bd057",
  storageBucket: "netflix-2024-bd057.firebasestorage.app",
  messagingSenderId: "638810015408",
  appId: "1:638810015408:web:54c617cbc9a7ce66309d75",
  measurementId: "G-1YHTZL6G4L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);