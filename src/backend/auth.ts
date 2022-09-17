import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { firebaseConfig } from "./config";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

async function createUser(email: string, password: string) {
  const userCred = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCred.user;
  console.log(user);
}

export { createUser };

export default auth;
