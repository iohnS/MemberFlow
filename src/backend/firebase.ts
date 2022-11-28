import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  doc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { firebaseConfig } from "../config";
import type { DocumentData } from "firebase/firestore";
import { UserType } from "../types";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const userCollectionRef = collection(db, "members");
export const userAuth = getAuth(app);

export async function createUser(email: string, password: string) {
  const userCred = await createUserWithEmailAndPassword(
    userAuth,
    email,
    password
  );
  return userCred;
}

export async function getData() {
  const docsSnap = await getDocs(userCollectionRef);
  const dataList: DocumentData[] = [];

  docsSnap.forEach((doc) => {
    const data = doc.data();
    dataList.push(data);
  });

  return dataList;
}

export async function addUser(
  email: string,
  name: string,
  ssn: string,
  period: number,
  status?: string
) {
  try {
    let currentDate = new Date().toJSON().slice(0, 10);
    const docRef = doc(userCollectionRef);
    const id = docRef.id;
    await setDoc(docRef, {
      name: name,
      email: email,
      ssn: ssn,
      period: period,
      // status: status,
      regDate: currentDate,
      id: id,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function updateUser(rowData: UserType) {
  const userRef = doc(db, "users", String(rowData.id));
  await updateDoc(userRef, {
    name: rowData.name,
    email: rowData.email,
    ssn: rowData.ssn,
    period: rowData.period,
    status: rowData.status,
    regDate: rowData.regDate,
    id: rowData.id,
  });
  console.log("update DOC");
}

export async function removeUser(id: string) {
  await deleteDoc(doc(db, "users", id));
}
