import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "../config";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export async function createUser(email: string, password: string) {
  const userCred = await createUserWithEmailAndPassword(auth, email, password);
  return userCred;
}

export default auth;
