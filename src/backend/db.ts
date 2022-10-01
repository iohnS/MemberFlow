import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { firebaseConfig } from "./config";
import type { DocumentData } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const userRef = collection(db, "users");

export async function getData() {
  const docsSnap = await getDocs(userRef);
  const dataList: DocumentData[] = [];

  docsSnap.forEach((doc) => {
    doc.data();
    const data = doc.data();
    dataList.push(data);
  });

  return dataList;
}

export async function addData(
  email: string,
  name: string,
  ssn: string,
  period: number,
  status: boolean
) {
  try {
    let currentDate = new Date().toJSON().slice(0, 10);
    let collectionSize = (await getDocs(userRef)).size;
    await setDoc(doc(userRef, email), {
      name: name,
      email: email,
      ssn: ssn,
      period: period,
      status: status,
      regDate: currentDate,
      id: collectionSize,
    });
  } catch (error) {
    console.log(error);
  }

  console.log("Data added");
}
