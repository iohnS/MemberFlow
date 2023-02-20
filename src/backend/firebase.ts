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
const memberCollectionRef = collection(db, "members");
export const userAuth = getAuth(app);

export async function createUser(email: string, password: string) {
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

export async function getMembers() {
  try {
    const dataList: DocumentData[] = [];
    await getDocs(memberCollectionRef).then((snapshot) => {
      snapshot.forEach((doc) => {
        const data = doc.data();
        dataList.push(data);
      });
    });
    return dataList;
  } catch (error) {
    console.log(error);
  }
}

export async function addUser(
  email: string,
  firstName: string,
  lastName: string,
  ssn: string,
  gender: string,
  period?: number,
  regDate?: string,
  status?: string,
  uid?: string
) {
  try {
    if (!regDate) {
      let regDate = new Date().toJSON().slice(0, 10);
    }
    if (!status) {
      let status = "inactive";
    }
    if (!period) {
      let period = 0;
    }
    let document = doc(memberCollectionRef);
    if (uid) {
      let document = doc(memberCollectionRef, uid);
    }
    await setDoc(document, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      ssn: ssn,
      gender: gender,
      status: status,
      regDate: regDate,
      period: period,
      //id: uid,
    });
  } catch (error) {
    console.log(
      email,
      firstName,
      lastName,
      ssn,
      gender,
      period,
      regDate,
      status,
      uid
    );
  }
}

export async function updateUser(rowData: UserType) {
  try {
    const userRef = doc(db, "users", String(rowData.id));
    await updateDoc(userRef, {
      firstName: rowData.firstName,
      lastName: rowData.lastName,
      email: rowData.email,
      ssn: rowData.ssn,
      period: rowData.period,
      status: rowData.status,
      regDate: rowData.regDate,
      id: rowData.id,
    });
    console.log("update DOC");
  } catch (error) {
    console.log(error);
  }
}

export async function removeUser(id: string) {
  try {
    await deleteDoc(doc(db, "users", id));
  } catch (error) {
    console.log(error);
  }
}
