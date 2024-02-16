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

export default class MyDBFirebase {
  constructor() {
    this.initializeFirebase();
  }

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  firebaseConfig = {
    apiKey: "AIzaSyByEsbZ_qwmNZu_BmhPCuntHBi6rLqddtg",
    authDomain: "promptstorernu.firebaseapp.com",
    projectId: "promptstorernu",
    storageBucket: "promptstorernu.appspot.com",
    messagingSenderId: "977321063187",
    appId: "1:977321063187:web:fbe52d33687629422760e6",
    measurementId: "G-JXKMP55XNV",
  };

  // Firebase database
  db = null;

  initializeFirebase() {
    // Initialize Firebase
    const app = initializeApp(this.firebaseConfig);
    const analytics = getAnalytics(app);
    console.log("Firebase initialized!", app, analytics);

    const db = getFirestore(app);

    this.db = db;
  }

  // Downloads the interactions from Firebase
  async getInteractions() {
    if (!this.db) {
      console.error("Database not initialized!");
      return [];
    }

    const InteractionsCollection = collection(this.db, "Interactions");

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

  async addInteraction(interaction) {
    console.log("Add Interaction", interaction, this.db);
    if (!this.db) {
      console.error("Database not initialized!");
      return;
    }

    const InteractionsCollection = collection(this.db, "Interactions");
    const res = await addDoc(InteractionsCollection, interaction);

    console.log("❤️⚠️📣 addInteraction() res", res, res.id);

    return res;
  }
}
