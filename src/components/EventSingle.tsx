"use client";

import { getEventById, getEventsId } from "@/app/utils/api";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import EventBriteWidget from "./EventBriteWidget";

const EventSingle = () => {
  const [eventInfo, setEventInfo] = useState(null);

  const params = useParams();

  useEffect(() => {
    getEventById(params.id)
      .then((data: any) => {
        setEventInfo(data);
      })
      .catch((error: Error) => {
        console.error(error);
      });
  }, []);
  console.log(eventInfo, "eventInfo on single page");

  //can put a placeholder image in the below if no image included

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
          <p className="py-3">Start: {eventInfo.start.local}</p>
          <p className="py-3">End: {eventInfo.end.local}</p>

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
