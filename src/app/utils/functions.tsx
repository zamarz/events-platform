import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../../firebaseConfig";
import { format, parseISO } from "date-fns";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { provider } from "@/components/Provider";

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

export const eventStartDateGetter = (data: any, setEventStartDate: any) => {
  const dateString = data.start.local;
  const dateObject = parseISO(dateString);
  const formattedStartDate = format(dateObject, "MMMM dd, yyyy h:mm aa");
  setEventStartDate(formattedStartDate);
};

export const eventEndDateGetter = (data: any, setEventEndDate: any) => {
  const dateString = data.end.local;
  const dateObject = parseISO(dateString);
  const formattedEndDate = format(dateObject, "MMMM dd, yyyy h:mm aa");
  setEventEndDate(formattedEndDate);
};

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result: any) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = result.user.stsTokenManager;
      sessionStorage.setItem("token", JSON.stringify(token));

      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

export const signUserOut = () => {
  signOut(auth)
    .then(() => {
      console.log("Sign out successful");
    })
    .catch((error: Error) => {
      console.error(error);
    });
};
