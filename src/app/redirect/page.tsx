"use client";

import { authorizeUser } from "../utils/api";

const redirect = () => {
  const currentURL = typeof window !== "undefined" ? window.location.href : "";
  console.log(currentURL);

  const urlParams = new URLSearchParams(new URL(currentURL).hash.slice(1));
  const accessToken = urlParams.get("access_token");
  console.log(accessToken);

  return (
    <section className="min-h-screen px-10 py-10 mx-auto container">
      <div className="pt-7">
        <h3 className="text-2xl">Redirect Testing</h3>
        <p>Will it work?</p>
      </div>
      <button className="button" onClick={() => authorizeUser()}>
        Testing
      </button>
    </section>
  );
};

export default redirect;
