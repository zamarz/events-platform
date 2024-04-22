import SignIn from "@/components/SignIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Run together",
  description: "Find your next running group",
};

const signIn = () => {
  return <SignIn />;
};

export default signIn;
