"use client";
import ThemeContext from "@/app/context/themeContext";
import UserContext from "@/context/UserContext";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useContext, useState } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { auth } from "../../firebaseConfig";
import { useSession } from "next-auth/react";
import { signUserOut } from "@/app/utils/functions";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  const user = useContext(UserContext);
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="bg-primary text-white text-lg flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 ">
        <div className="flex mx-9 my-4 items-center">
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
        <FiMenu
          className="h-6 w-6 cursor-pointer md:hidden block"
          onClick={() => setOpen(!open)}
        />
        <div
          className={` w-full md:flex md:items-center md:w-auto ${
            open ? "block" : "hidden"
          }`}
        >
          <ul className=" pt-4 md:justify-between mx-12 md:flex md:space-x-6">
            {/* space-x-9 items-center justify-end */}
            <li className="hover:text-tertiary-alt ">
              <Link
                href="/"
                className="py-2 block text-sm md:text-base lg:text-lg"
              >
                About
              </Link>
            </li>
            <li className="hover:text-tertiary-alt ">
              <Link
                href="/events"
                className=" py-2 block text-sm md:text-base lg:text-lg"
              >
                Events
              </Link>
            </li>
            {user.uid === process.env.NEXT_PUBLIC_ADMIN_UID ? (
              <li className="hover:text-tertiary-alt ">
                <Link
                  href="/addevent"
                  className="py-2 block text-sm md:text-base lg:text-lg"
                >
                  Create New Event
                </Link>
              </li>
            ) : (
              <></>
            )}
            {user.email.length === 0 ? (
              <li className="space-x-3 py-2 block">
                <Link className="buttonHeader" href="/register">
                  Register
                </Link>
                <Link className="buttonHeader" href="/sign-in">
                  Sign In
                </Link>
              </li>
            ) : (
              <></>
            )}
            {user.email.length > 0 ? (
              <li>
                <button
                  className="button"
                  type="button"
                  onClick={() => signUserOut()}
                >
                  Sign Out
                </button>
              </li>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
