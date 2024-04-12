import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

export const writeNewUserInfoToDB = async (
  user: any,
  accessToken: string | null
) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      email: user.email,
      uid: user.uid,
      accessToken: accessToken,
    });
    console.log("document written!");
  } catch (error) {
    console.error(error);
  }
};
