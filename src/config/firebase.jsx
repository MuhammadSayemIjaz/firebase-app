// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFojF3UzrtN542krVwPBua5Upe9-VRqAA",
  authDomain: "first-firebase-project-29dd1.firebaseapp.com",
  projectId: "first-firebase-project-29dd1",
  storageBucket: "first-firebase-project-29dd1.appspot.com",
  messagingSenderId: "397040665812",
  appId: "1:397040665812:web:485d7218ba861f9bdb6741",
  measurementId: "G-NQWLDR8EKQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };
