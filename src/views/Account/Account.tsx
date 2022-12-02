import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { userAuth, db } from "../../backend/firebase";
import { doc, getDoc } from "firebase/firestore";
import Payment from "./Payment";
import Management from "./Management";
import { UserType } from "../../types";

const Account = () => {
  const [active, setStatus] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userAuth.currentUser) {
      navigate("/");
    }
  }, []);

  if (userAuth.currentUser) {
    const uid = userAuth.currentUser.uid;
    const docref = doc(db, "members", uid);

    getDoc(docref).then((doc) => {
      const userData = doc.data() as UserType;
      setStatus(userData.status === "active");
    });
  }

  return active ? <Management /> : <Payment />;
};

export default Account;
