"use client";

import { getEventById, getEventsId } from "@/app/utils/api";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

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

  return (
    <div>
      {eventInfo ? (
        <div>
          <Image
            src={eventInfo.logo.url}
            alt="An image chose by Eventbrite"
            width={300}
            height={300}
          />
          <h2>{eventInfo.name.text}</h2>
          <p>{eventInfo.summary}</p>
          <p>Start: {eventInfo.start.local}</p>
          <p>End: {eventInfo.end.local}</p>

          <button className="button">Get your ticket</button>
          <p>
            <Link href={"/events"}>Return to events</Link>
          </p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default EventSingle;
