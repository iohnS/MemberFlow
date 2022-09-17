import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { firebaseConfig } from "./config";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const testRef = collection(db, "test");

async function docSnap() {
  try {
    await setDoc(doc(testRef, "SF"), {
      name: "San Francisco",
      state: "CA",
      country: "USA",
      capital: false,
      population: 860000,
      regions: ["west_coast", "norcal"],
    });
  } catch (error) {
    console.log(error);
  }
}

async function getData() {
  const docRef = doc(db, "test", "WnDW0i0J68MHATnNI6bx");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    console.log("No such document!");
  }
}

export { docSnap, getData };

export default db;
