"use client";

import { EventData, EventSummary } from "@/app/types/types";
import {
  addTicketClass,
  createEvent,
  publishEvent,
  updateEvent,
} from "../app/utils/api";
import { FormEvent, useEffect, useState } from "react";
import { UTCDate } from "@date-fns/utc";
import { formatISO } from "date-fns";
import Loading from "@/app/loading";
import Link from "next/link";
import Error from "@/app/error";

const EventAdder = () => {
  const [eventName, setEventName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [utcStart, setUtcStart] = useState("");
  const [utcEnd, setUtcEnd] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [eventId, setEventId] = useState("");
  const [shown, setShown] = useState(false);
  const [error, setError] = useState(false);

  const newEventToSend: EventData = {
    event: {
      name: {
        html: `${eventName}`,
      },
      start: {
        timezone: "Europe/London",
        utc: `${utcStart}`,
      },
      end: {
        timezone: "Europe/London",
        utc: `${utcEnd}`,
      },
      currency: "GBP",
    },
  };

  const extraEventInfo: EventSummary = {
    event: {
      summary: `${summary}`,
    },
  };

  const ticketClass = {
    ticket_class: {
      name: "General",
      free: true,
      quantity_total: 100,
    },
  };

  useEffect(() => {
    if (startTime.length >= 16) {
      const startFormTime = formatISO(new UTCDate(startTime));
      setUtcStart(startFormTime.toString());
    }
  }, [startTime]);

  useEffect(() => {
    if (endTime.length >= 16) {
      const endFormTime = formatISO(new UTCDate(endTime));
      setUtcEnd(endFormTime);
    }
  }, [endTime]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    createEvent(newEventToSend)
      .then((response: any) => {
        setEventId(response.id);
        return addTicketClass(response.id, ticketClass);
      })
      .then((response: any) => {
        return updateEvent(response.event_id, extraEventInfo);
      })
      .then((response: any) => {
        return publishEvent(response.id);
      })
      .then((response: any) => {
        if (response.published === true) {
          setLoading(false);
          setShown(true);
        }
      })
      .catch((error: Error) => {
        setError(true);
        setLoading(false);
      });

    setEventName("");
    setStartTime("");
    setEndTime("");
    setSummary("");
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <section className="min-h-screen mx-auto container pt-8 px-2 ">
      <form
        className="items-center justify-center max-w-md mx-auto mt-5 p-4 rounded shadow bg-tertiary-alt border border-tertiary-light dark:bg-primary dark:border-secondary"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-4 text-xl font-semibold">Add a new event</h2>
        <div className="mb-4">
          <label htmlFor="eventName" className="block font-medium mb-2">
            Event Name:
          </label>
          <input
            type="text"
            placeholder="Enter a name"
            id="eventName"
            name="eventName"
            value={eventName}
            onChange={(event) => setEventName(event.target.value)}
            className="w-full border border-gray-300 rounded py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-medium mb-2">
            Description:
          </label>
          <input
            type="text"
            placeholder="Enter a description"
            id="description"
            name="description"
            className="w-full border border-gray-300 rounded py-7 my-2 px-4"
            value={summary}
            onChange={(event) => setSummary(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="startTime" className="block font-medium mb-2">
            Start:
          </label>
          <input
            type="datetime-local"
            id="startTime"
            className="w-full border border-gray-300 rounded py-2 px-3 dark:text-black"
            name="startTime"
            value={startTime}
            onChange={(event) => setStartTime(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="endTime" className="block font-medium mb-2">
            End:
          </label>
          <input
            type="datetime-local"
            id="endTime"
            name="endTime"
            value={endTime}
            onChange={(event) => setEndTime(event.target.value)}
            className="w-full border border-gray-300 rounded py-2 px-3 dark:text-black"
          />
        </div>

        <button className="buttonHeader" type="submit">
          Publish Event
        </button>
      </form>
      {shown ? (
        <div className="flex flex-col items-center justify-center bg-secondary/35 py-2 my-4 rounded max-w-md mx-auto px-2">
          <h2 className="mx-2 py-2">Event added successfully!</h2>
          <button className="button mx-auto" type="button">
            <Link href={`/events/${eventId}`}>See event</Link>
          </button>
          <button
            className="button mx-3 py-2"
            type="button"
            onClick={() => setShown(false)}
          >
            Close
          </button>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};

export default EventAdder;
