"use client";

import Link from "next/link";
import { createGoogleEvent } from "../utils/api";
import { formatISO } from "date-fns";
import { useEffect, useState } from "react";
import Error from "../error";
import { eventStartDateFinder } from "../utils/functions";

const EventConfirmation = () => {
  const [calendar, setCalendar] = useState(false);
  const [eventStartDate, setEventStartDate] = useState<string>("");

  const eventId = sessionStorage.getItem("eventId");
  const eventName = sessionStorage.getItem("name");
  const startTime = sessionStorage.getItem("startTime");
  const endTime = sessionStorage.getItem("endTime");
  const eventSummary = sessionStorage.getItem("summary");
  const tokenString = sessionStorage.getItem("token");
  const token = tokenString ? JSON.parse(tokenString) : null;
  const startDate = startTime ? startTime : new Date();
  const endDate = endTime ? endTime : new Date();

  useEffect(() => {
    eventStartDateFinder(startTime, setEventStartDate);
  }, [startTime]);

  const eventDataToSend = {
    description: eventSummary,
    summary: eventName,
    start: {
      dateTime: formatISO(startDate),
      timeZone: "Europe/London",
    },
    end: {
      dateTime: formatISO(endDate),
      timeZone: "Europe/London",
    },
  };

  const handleClick = () => {
    createGoogleEvent(eventDataToSend, token)
      .then((data: any) => {
        if (data.status === "confirmed") {
          setCalendar(true);
        }
      })
      .catch((error) => {
        return <Error />;
      });
  };

  return (
    <section className="flex items-center justify-center mx-auto container w-full min-h-screen">
      <div className="flex flex-col justify-center mx-auto items-center">
        <h2 className="text-lg md:text-xl mx-auto py-6 text-pretty px-3">
          Great, you're all signed up for {eventName} which begins on{" "}
          {eventStartDate}!
        </h2>
        {tokenString ? (
          <button className="button" onClick={() => handleClick()}>
            Add to your Google Calendar
          </button>
        ) : (
          <></>
        )}
        <button className="button">
          <Link className="button" href="/events">
            See all events
          </Link>
        </button>
        {calendar ? (
          <div className="flex flex-col items-center justify-center bg-secondary/35 py-2 my-4 rounded max-w-md mx-auto px-2">
            <h2 className="mx-2 py-2">
              The event has been added to your Google Calendar!
            </h2>
            <button
              className="button mx-3 py-2"
              type="button"
              onClick={() => setCalendar(false)}
            >
              Close
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default EventConfirmation;
