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
        <div className="flex items-center justify-center space-x-4 bg-tertiary-alt dark:bg-tertiary-light/70 ">
          <div className="px-4 py-4">
            <h1 className="font-bold lg:text-2xl dark:text-white">
              Build your running community
            </h1>
            <p className="py-4 dark:text-white">
              Find your next running event today.
            </p>
            <button className="button">
              <Link href="/events">See Events</Link>
            </button>
          </div>
          <div
            style={{ position: "relative", width: "500px", height: "500px" }}
          >
            <Image
              src={"/assets/running-group-2.jpg"}
              alt="An image of people running in an arrow formation, taken from above."
              sizes="300px"
              priority={true}
              fill={true}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center space-x-4 bg-tertiary-alt dark:bg-tertiary-light/90">
          <div className="px-4 py-4">
            <h1 className="font-bold lg:text-2xl dark:text-white">
              Join today. Run tomorrow.
            </h1>
            <p className="py-4 dark:text-white">
              Register and get access to hundreds of running groups near you.
            </p>
            <button className="button">Sign up</button>
          </div>
          <div
            style={{ position: "relative", width: "500px", height: "500px" }}
          >
            <Image
              src={"/assets/running-arrow.jpg"}
              alt="An image of people running in an arrow formation, taken from above."
              sizes="300px"
              priority={true}
              fill={true}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeImage;
