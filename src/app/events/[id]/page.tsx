import EventSingle from "@/components/EventSingle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Run together",
  description: "Find your next running group",
};

const SingleEvent = () => {
  return <EventSingle />;
};

export default SingleEvent;
