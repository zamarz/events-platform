"use client";
import UserContext from "@/context/UserContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const HomeImage = () => {
  const user = useContext(UserContext);
  return (
    <div>
      {user.email.length > 0 ? (
        <div className="flex items-center justify-center space-x-4 bg-tertiary-alt">
          <div className="px-4 py-4">
            <h1 className="font-bold lg:text-2xl dark:text-primary">
              Build your running community
            </h1>
            <p className="py-4 dark:text-primary">
              Find your next running event today.
            </p>
            <button className="button">
              <Link href="/events">See Events</Link>
            </button>
          </div>
          <Image
            src={"/assets/running-group-2.jpg"}
            alt="An image of people running in an arrow formation, taken from above."
            width={500}
            height={500}
            priority={true}
            layout="responsive"
            className="mx-auto"
          />
        </div>
      ) : (
        <div className="flex items-center justify-center space-x-4 bg-tertiary-alt">
          <div className="px-4 py-4">
            <h1 className="font-bold lg:text-2xl dark:text-primary">
              Join today. Run tomorrow.
            </h1>
            <p className="py-4 dark:text-primary">
              Register and get access to hundreds of running groups near you.
            </p>
            <button className="button">Sign up</button>
          </div>
          <Image
            src={"/assets/running-arrow.jpg"}
            alt="An image of people running in an arrow formation, taken from above."
            width={500}
            height={500}
            priority={true}
            layout="responsive"
            className="mx-auto"
          />
        </div>
      )}
    </div>
  );
};

export default HomeImage;