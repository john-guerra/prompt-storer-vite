// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export default function MyDBFirebase() {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAsuZdkC8bARcNLGrmGUctJGU5LkzTluas",
    authDomain: "shoppingcart-715ac.firebaseapp.com",
    projectId: "shoppingcart-715ac",
    storageBucket: "shoppingcart-715ac.appspot.com",
    messagingSenderId: "1097057090220",
    appId: "1:1097057090220:web:4023e48a297d82f2933d09",
  };

  // Me object containing the public methods and properties
  const me = {};

  // Firebase database
  let db = initializeFirebase();

  function initializeFirebase() {
    let db;
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    console.log("Firebase initialized!", app, analytics);

    db = getFirestore(app);

    return db;
  }

  // Downloads the interactions from Firebase
  async function getInteractions() {
    if (!db) {
      console.error("Database not initialized!");
      return [];
    }

    const InteractionsCollection = collection(db, "Interactions");

    const res = await getDocs(InteractionsCollection);
    console.log(
      "getInteractions() res",
      res.docs.map((doc) => doc.data())
    );
    const interactions = [];

    for (let doc of res.docs) {
      interactions.push(doc.data());
    }

    return interactions;
  }

  async function addInteraction(interaction) {
    console.log("Add Interaction", interaction, db);
    if (!db) {
      console.error("Database not initialized!");
      return;
    }

    const InteractionsCollection = collection(db, "Interactions");
    const res = await addDoc(InteractionsCollection, interaction);

    console.log("❤️⚠️📣 addInteraction() res", res, res.id);

    return res;
  }

  me.getInteractions = getInteractions;
  me.addInteraction = addInteraction;

  return me;
}
