import HomePage from "@/components/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Run together",
  description: "Find your next running group",
};

export default function Home() {
  return <HomePage />;
}
