"use client";

import { getEventById, getEventsId } from "@/app/utils/api";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import EventBriteWidget from "./EventBriteWidget";
import {
  eventEndDateGetter,
  eventStartDateGetter,
} from "@/app/utils/functions";

const EventSingle = () => {
  const [eventInfo, setEventInfo] = useState(null);
  const [eventStartDate, setEventStartDate] = useState("");
  const [eventEndDate, setEventEndDate] = useState("");

  const params = useParams();

  useEffect(() => {
    getEventById(params.id)
      .then((data: any) => {
        eventStartDateGetter(data, setEventStartDate);
        eventEndDateGetter(data, setEventEndDate);
        return setEventInfo(data);
      })
      .catch((error: Error) => {
        console.error(error);
      });
  }, []);
  console.log(eventInfo, "eventInfo on single page");

  return (
    <section className="min-h-screen px-10 py-10 mx-auto container">
      {eventInfo ? (
        <div className="items-center justify-center flex flex-col">
          {eventInfo.logo ? (
            <Image
              src={eventInfo.logo.url}
              alt="An image chose by Eventbrite"
              width={400}
              height={400}
            />
          ) : (
            <Image
              src={"/assets/running-person-placeholder.jpg"}
              alt="An image of a person running on a road"
              width={400}
              height={400}
            />
          )}

          <h2 className="text-2xl font-semibold mx-auto py-3">
            {eventInfo.name.text}
          </h2>
          <p className="text-pretty py-3">{eventInfo.summary}</p>
          <p className="py-3">
            <span className="font-semibold">Start:</span> {eventStartDate}
          </p>
          <p className="py-3">
            <span className="font-semibold">End:</span> {eventEndDate}
          </p>

          <EventBriteWidget eventId={eventInfo.id} eventInfo={eventInfo} />
          <p className="py-3">
            <Link className="button" href={"/events"}>
              Return to events
            </Link>
          </p>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};

export default EventSingle;
