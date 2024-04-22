"use client";

import Link from "next/link";
import { createGoogleEvent } from "../utils/api";

const EventConfirmation = () => {
  //will need integration with Google Calendar

  const eventId = sessionStorage.getItem("eventId");
  const eventName = sessionStorage.getItem("name");
  const startTime = sessionStorage.getItem("startTime");
  const tokenString = sessionStorage.getItem("token");
  const token = tokenString ? JSON.parse(tokenString) : null;

  console.log(token, "token");
  const eventDataToSend = {
    eventName: eventName,
    summary: null,
    startDateTime: startTime,
    endDateTime: null,
    accessToken: token,
  };

  const eventDataToSend2 = {
    eventName: "testing name",
    summary: "testingSummary",
    startDateTime: "April 5, 2024",
    endDateTime: "April 6, 2024",
  };

  return (
    <section className="flex items-center justify-center mx-auto container w-full min-h-screen">
      <div className="flex flex-col justify-center mx-auto items-center">
        <h2 className="text-lg md:text-xl mx-auto py-6 text-pretty px-3">
          Great, you're all signed up for {eventName} which begins on{" "}
          {startTime}!
        </h2>
        <button
          className="button"
          onClick={() => createGoogleEvent(eventDataToSend2)}
        >
          Add to your Google Calendar
        </button>
        <button className="button">
          <Link className="button" href="/events">
            See all events
          </Link>
        </button>
      </div>
    </section>
  );
};

export default EventConfirmation;
