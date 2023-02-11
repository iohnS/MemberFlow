import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { UserType } from "../types";
import { db, userAuth } from "./firebase";

export async function createUser(email: string, password: string, ssn: string) {
  try {
    const userCred = await createUserWithEmailAndPassword(
      userAuth,
      email,
      password
    );
    return userCred;
  } catch (error) {
    console.log(error);
  }
}

export async function getUser(ssn: string) {
  try {
    const userDoc = await doc(db, "members", ssn);
    return userDoc;
  } catch (error) {
    console.log(error);
  }
}

export async function updateUser(rowData: UserType) {
  try {
    const userRef = doc(db, "users", String(rowData.ssn));
    await updateDoc(userRef, {
      name: rowData.name,
      email: rowData.email,              
      ssn: rowData.ssn,
      period: rowData.period,
      status: rowData.status,
      regDate: rowData.reg_date,
    });
    console.log("update DOC");
  } catch (error) {
    console.log(error);
  }
}
export async function deleteUser(id: string) {
  try {
    const userRef = doc(db, "members", id);
    await deleteDoc(userRef);
  } catch (error) {
    console.log(error);
  }
}
