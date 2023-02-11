import {
  collection,
  doc,
  DocumentData,
  getDocs,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import moment from "moment";
import { addRealMonths } from "../helpers/utils";
import { db } from "./firebase";
import { v4 as uuidv4 } from "uuid";

const memberCollectionRef = collection(db, "members");

export async function createMember(
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
