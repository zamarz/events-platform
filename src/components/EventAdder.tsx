"use client";

import { EventData } from "@/app/types/types";
import { addTicketClass, createEvent, publishEvent } from "../app/utils/api";
import { FormEvent, useEffect, useState } from "react";
import { UTCDate } from "@date-fns/utc";
import { formatISO } from "date-fns";

const EventAdder = () => {
  const [eventName, setEventName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [utcStart, setUtcStart] = useState("");
  const [utcEnd, setUtcEnd] = useState("");
  const [description, setDescription] = useState("");
  const accessToken = "E33RFTVR2MK33ATCR24M";

  const newEventToSend: EventData = {
    event: {
      name: {
        html: `${eventName}`,
      },
      description: {
        html: "",
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
    createEvent(newEventToSend)
      .then((response: any) => {
        addTicketClass(response.id, ticketClass);
        // publishEvent(response.id);
      })
      .catch((error: Error) => {
        console.error(error);
      });

    setEventName("");
    setStartTime("");
    setEndTime("");
    setDescription("");
  };

  return (
    <section className="min-h-screen mx-auto container pt-8 ">
      <form
        className="items-center justify-center space-x-5 max-w-md mx-auto mt-5 p-4 rounded shadow bg-tertiary-alt border border-tertiary-light"
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
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="startTime" className="block font-medium mb-2">
            Start:
          </label>
          <input
            type="datetime-local"
            id="startTime"
            className="w-full border border-gray-300 rounded py-2 px-3"
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
            className="w-full border border-gray-300 rounded py-2 px-3"
          />
        </div>

        <button className="button" type="submit">
          Publish Event
        </button>
      </form>
    </section>
  );
};

export default EventAdder;
