import { useState } from "react";
import { userAuth, db } from "../../backend/firebase";
import { doc, getDoc } from "firebase/firestore";
import Payment from "./Payment";
import Management from "./Management";
import { UserType } from "../../types";

const Account = () => {
  const [active, setStatus] = useState(false);

  if (userAuth.currentUser) {
    const uid = userAuth.currentUser.uid;
    const docref = doc(db, "members", uid);

    getDoc(docref).then((doc) => {
      const userData = doc.data() as UserType;
      console.log(userData.status);
      setStatus(userData.status == "active");
    });
  }

  return active ? <Management /> : <Payment />;
};

export default Account;