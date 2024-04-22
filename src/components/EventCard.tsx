"use client";

import { Event } from "@/app/types/types";
import { eventStartDateGetter } from "@/app/utils/functions";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { FaPoundSign } from "react-icons/fa";

type EventCardProps = {
  eventInfo: Event;
};

const EventCard: React.FC<EventCardProps> = ({ eventInfo }) => {
  const [eventStartDate, setEventStartDate] = useState<string>("");
  const style1 = { fontSize: "1.5em" };

  useEffect(() => {
    eventStartDateGetter(eventInfo, setEventStartDate);
  }, [eventInfo]);

  return (
    <div className="mx-4 border border-primary py-3">
      <div className="flex items-center flex-col mx-5 px-6 py-3">
        {eventInfo.logo ? (
          <div
            style={{ position: "relative", width: "250px", height: "250px" }}
          >
            <Image
              src={`${eventInfo.logo.url}`}
              alt="An image of a person running"
              sizes="300px"
              fill={true}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        ) : (
          <div
            style={{ position: "relative", width: "250px", height: "250px" }}
          >
            <Image
              src={"/assets/running-person-placeholder.jpg"}
              alt="An image of a person running on a road"
              sizes="300px"
              fill={true}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        )}
        <h2 className="text-xl font-semibold py-2">{eventInfo.name.text}</h2>
        <p className="text-pretty py-2">{eventInfo.summary}</p>
        <div className="py-2 flex flex-row space-x-2">
          <div className="px-1 flex items-center">
            <CiCalendarDate style={style1} />
          </div>
          <div className="flex items-center">{eventStartDate}</div>
        </div>
        {eventInfo.is_free === true ? (
          <div className=" py-2 flex flex-row">
            <div className="px-1 flex items-center">
              <FaPoundSign />
            </div>
            <div className="font-bold text-primary dark:text-tertiary-dark text-l flex items-center">
              Free
            </div>
          </div>
        ) : (
          <></>
        )}
        <button className="button">
          <Link href={`/events/${eventInfo.id}`}>View</Link>
        </button>
      </div>
    </div>
  );
};

export default EventCard;
