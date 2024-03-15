// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  getDoc,
  Timestamp,
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
    apiKey: "AIzaSyDz5YlTOQtatcGU5yNZZhEVd1dusvRAlJc",
    authDomain: "promptstore-b9887.firebaseapp.com",
    projectId: "promptstore-b9887",
    storageBucket: "promptstore-b9887.appspot.com",
    messagingSenderId: "323731836233",
    appId: "1:323731836233:web:05d5e9c773175f83289e98"
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
      res.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
    const interactions = [];

    for (let doc of res.docs) {
      interactions.push(doc.data());
    }

    interactions.sort((a, b) => b.createdTime.toMillis() - a.createdTime.toMillis());

    return interactions;
  }

  async addInteraction(interaction) {
    console.log("Add Interaction", interaction, this.db);
    if (!this.db) {
      console.error("Database not initialized!");
      return;
    }

    const InteractionsCollection = collection(this.db, "Interactions");
    const res = await addDoc(InteractionsCollection, { ...interaction, createdTime: Timestamp.now() });

    console.log("❤️⚠️📣 addInteraction() res", res, res.id);

    return res;
  }
  async updateInteractionById(interaction) {
    console.log("Update Interaction", interaction, this.db);
    if (!this.db) {
      console.error("Database not initialized!");
      return;
    }
    if (!interaction.id) {
      console.error("Interaction id not found!");
      return;
    }
    const id = interaction.id;
    delete interaction.id;

    const InteractionsCollection = collection(this.db, "Interactions");
    const docRef = doc(InteractionsCollection, id);
    await updateDoc(docRef, interaction);

    await getDoc(docRef).then((doc) => {
      if (doc.exists()) {
        console.log("❤️⚠️📣 updateInteraction() res", doc.data());
      } else {
        console.log("No such document!");
      }
    });
    return;
  }
}
