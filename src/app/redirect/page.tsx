"use client";

import { useContext, useEffect } from "react";
import UserContext from "@/context/UserContext";
import Error from "../error";
import { writeNewUserInfoToDB } from "../utils/functions";

const Redirect = () => {
  const user = useContext(UserContext);

  useEffect(() => {
    try {
      writeNewUserInfoToDB(user);
    } catch (error) {
      console.error(error);
    }
  }, [user]);

  if (user.email.length === 0) {
    return <Error />;
  }

  const currentURL = typeof window !== "undefined" ? window.location.href : "";
  const urlParams = new URLSearchParams(new URL(currentURL).hash.slice(1));
  let accessToken = urlParams.get("access_token");

  return (
    <section className="min-h-screen px-10 py-10 mx-auto container">
      <div className="pt-7">
        <h3 className="text-2xl">Redirect Testing</h3>
        <p>You should be redirected shortly.</p>
      </div>
      <button className="button">Click here</button>
    </section>
  );
};

export default Redirect;
