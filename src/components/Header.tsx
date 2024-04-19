"use client";
import ThemeContext from "@/app/context/themeContext";
import UserContext from "@/context/UserContext";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useContext } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { auth } from "../../firebaseConfig";
import { useSession } from "next-auth/react";
import { signUserOut } from "@/app/utils/functions";

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <header className="bg-primary text-white px-6 text-l flex flex-wrap md:flex-nowrap items-center justify-between ">
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
          {/* {session ? <li>Hi {session.user.email}</li> : <li>Please sign in</li>} */}
          {user.email.length > 0 ? (
            <li className="mx-auto px-7">
              <p>Hi {user.email}!</p>
            </li>
          ) : (
            <></>
          )}
        </ul>
      </div>
      <ul className="flex items-center space-x-9 justify-end w-full md:w-1/3 mx-12">
        <li className="hover:text-tertiary-alt">
          <Link href="/" className="text-sm md:text-base lg:text-l">
            About
          </Link>
        </li>
        <li className="hover:text-tertiary-alt">
          <Link href="/events" className="text-sm md:text-base lg:text-l">
            Events
          </Link>
        </li>
        {user.uid === process.env.NEXT_PUBLIC_ADMIN_UID ? (
          <li className="hover:text-tertiary-alt">
            <Link href="/addevent" className="text-sm md:text-base lg:text-l">
              Create New Event
            </Link>
          </li>
        ) : (
          <></>
        )}
        {user.email.length === 0 ? (
          <li className="space-x-3">
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
    </header>
  );
};

export default Header;
