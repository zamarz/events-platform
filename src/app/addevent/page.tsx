import EventAdder from "@/components/EventAdder";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Run together",
  description: "Find your next running group",
};

const addEvent = () => {
  return <EventAdder />;
};

export default addEvent;
