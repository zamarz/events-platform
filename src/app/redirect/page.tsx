"use client";

import { useContext, useEffect } from "react";
import { authorizeUser, publishEvent } from "../utils/api";
import UserContext from "@/context/UserContext";
import Error from "../error";
import { writeNewUserInfoToDB } from "../utils/functions";
import { useRouter } from "next/navigation";

const redirect = () => {
  const user = useContext(UserContext);
  const router = useRouter();

  if (user.email.length === 0) {
    return <Error />;
  }

  const eventId = "880792182127"; //delete this

  const currentURL = typeof window !== "undefined" ? window.location.href : "";
  const urlParams = new URLSearchParams(new URL(currentURL).hash.slice(1));
  let accessToken = urlParams.get("access_token");

  useEffect(() => {
    try {
      writeNewUserInfoToDB(user, accessToken);
    } catch (error) {
      console.error(error);
    }
  }, []);

  // if (accessToken) {
  //   try {
  //     writeNewUserInfoToDB(user, accessToken);
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   // router.push("/");
  // }

  //need function to write token to database with user information

  //basically make whole section below a loading screen while you do the functionality above?

  console.log(accessToken);
  return (
    <section className="min-h-screen px-10 py-10 mx-auto container">
      <div className="pt-7">
        <h3 className="text-2xl">Redirect Testing</h3>
        <p>Will it work?</p>
      </div>
      <button
        className="button"
        onClick={() => publishEvent(eventId, accessToken)}
      >
        Testing
      </button>
    </section>
  );
};

export default redirect;
