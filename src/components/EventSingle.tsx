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
import { getEventsIdType } from "@/app/types/types";

const EventSingle = () => {
  const [eventInfo, setEventInfo] = useState<Event | null>(null);
  const [eventStartDate, setEventStartDate] = useState<string>("");
  const [eventEndDate, setEventEndDate] = useState<string>("");

  const params = useParams();

  useEffect(() => {
    getEventById(params.id)
      .then((data: Event) => {
        eventStartDateGetter(data, setEventStartDate);
        eventEndDateGetter(data, setEventEndDate);
        console.log(data);
        return setEventInfo(data);
      })
      .catch((error: Error) => {
        console.error(error);
      });
  }, []);

  return (
    <section className="mx-auto container w-full min-h-screen">
      {eventInfo ? (
        <div className="flex flex-col justify-center items-center mx-auto">
          {eventInfo.logo ? (
            <div
              style={{ position: "relative", width: "300px", height: "300px" }}
            >
              <Image
                src={eventInfo.logo.url}
                alt="An image chose by Eventbrite"
                sizes="300px"
                fill={true}
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          ) : (
            <div
              className="flex flex-col justify-center items-center "
              style={{ position: "relative", width: "300px", height: "300px" }}
            >
              <Image
                src={"/assets/running-person-placeholder.jpg"}
                alt="An image of a person running on a road"
                sizes="300px"
                fill={true}
                priority
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          )}

          <h2 className="text-2xl font-semibold mx-auto py-3">
            {eventInfo.name.text}
          </h2>
          <p className="text-pretty py-3 px-5">{eventInfo.summary}</p>
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
