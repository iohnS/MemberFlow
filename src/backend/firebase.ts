import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  doc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  Timestamp,
} from "firebase/firestore";
import { firebaseConfig } from "../config";
import type { DocumentData } from "firebase/firestore";
import { UserType } from "../types";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { addRealMonths } from "../helpers/utils";

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
  name: string,
  ssn: string,
  period?: number,
  status?: string
) {
  try {
    let currentDate = new Date();
    const uid = userAuth.currentUser?.uid;

    await setDoc(doc(memberCollectionRef, uid), {
      name: name,
      email: email,
      ssn: ssn,
      status: status || "inactive",
      regDate: currentDate,
      period: period,
      id: uid,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function addMember(
  email: string,
  name: string,
  ssn: string,
  period: string,
  status?: string
) {
  try {
    const uid = uuidv4();

    const reg_date = Timestamp.now();
    console.log(moment(reg_date.toDate()).toString());

    const added_date = addRealMonths(
      moment(reg_date.toDate()),
      parseInt(period)
    );

    const exp_date = Timestamp.fromDate(added_date.toDate());

    console.log(exp_date);

    await setDoc(doc(memberCollectionRef, uid), {
      name: name,
      email: email,
      ssn: ssn,
      status: status || "inactive",
      reg_date: reg_date,
      exp_date: exp_date,
      period: period,
      id: uid,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function removeUser(id: string) {
  try {
    const userRef = doc(db, "members", id);
    await deleteDoc(userRef);
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
