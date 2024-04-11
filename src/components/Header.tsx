"use client";
import ThemeContext from "@/app/context/themeContext";
import UserContext from "@/context/UserContext";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useContext } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { auth } from "../../firebaseConfig";

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  const user = useContext(UserContext);
  console.log(user);
  return (
    <header className="bg-primary text-white py-8 px-6 text-xl flex flex-wrap md:flex-nowrap items-center justify-between ">
      <div className="flex mx-9 my-4 items-center w-full md:w-2/3">
        <Link
          href="/"
          className="font-black text-tertiary-light mx-3 md:align-center"
        >
          Run Together
        </Link>
        <ul className="flex items-center ml-5">
          <li className="ml-2">
            {darkTheme ? (
              <MdOutlineLightMode
                className="cursor-pointer"
                onClick={() => {
                  setDarkTheme(false);
                  localStorage.removeItem("runner-theme");
                }}
              />
            ) : (
              <MdDarkMode
                className="cursor-pointer"
                onClick={() => {
                  setDarkTheme(true);
                  localStorage.setItem("runner-theme", "true");
                }}
              />
            )}
          </li>
          {user.email.length > 0 ? (
            <li className="mx-auto px-7">
              <p>Hi {user.email}!</p>
            </li>
          ) : (
            <></>
          )}
        </ul>
      </div>
      <ul className="flex items-center justify-between w-full md:w-1/3 mt-4 mx-12">
        <li className="hover:translate-y-2 duration-500 transition-all">
          <Link href="/" className="text-sm md:text-base lg:text-xl">
            About
          </Link>
        </li>
        <li className="hover:translate-y-2 duration-500 transition-all">
          <Link href="/" className="text-sm md:text-base lg:text-xl">
            My Events
          </Link>
        </li>
        <li className="hover:translate-y-2 duration-500 transition-all">
          <Link href="/addevent" className="text-sm md:text-base lg:text-xl">
            Create New Event
          </Link>
        </li>
        {user.email.length > 0 ? (
          <li className="hover:translate-y-2 duration-500 transition-all">
            <button
              className="button"
              type="button"
              onClick={() => signOut(auth)}
            >
              Sign Out
            </button>
          </li>
        ) : (
          <li className="hover:translate-y-2 duration-500 transition-all">
            <Link className="button" href="/sign-in">
              Sign In
            </Link>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
