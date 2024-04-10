"use client";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { FormEvent, useState } from "react";
import Link from "next/link";

const RegisterUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <section className="min-h-screen mx-auto container pt-8 ">
      <form
        onSubmit={handleSubmit}
        className="items-center justify-center space-x-5 max-w-md mx-auto mt-5 p-4 rounded shadow bg-tertiary-alt border border-tertiary-light"
      >
        <h2 className="mb-4 text-xl font-semibold">Register</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-2">
            Email:
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full border border-gray-300 rounded py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium mb-2">
            Password:
          </label>
          <input
            type="password"
            placeholder="Enter a password"
            id="password"
            name="password"
            className="w-full border border-gray-300 rounded py-7 my-2 px-4"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button className="button" type="submit">
          Sign Up
        </button>
      </form>
      <div className="justify-center items-center space-x-5 max-w-md mx-auto mt-5 p-4">
        <p className="text-l">
          Already registered? Click{" "}
          <Link href="/sign-in" className="underline shadow">
            here to sign in
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default RegisterUser;
