import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { format, parseISO } from "date-fns";

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
