import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

export const writeNewUserInfoToDB = async (user: any) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      email: user.email,
      uid: user.uid,
      isAdmin: false,
    });
    console.log("document written!");
  } catch (error) {
    console.error(error);
  }
};
