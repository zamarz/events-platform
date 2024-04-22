import RegisterUser from "@/components/RegisterUser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Run together",
  description: "Find your next running group",
};
const register = () => {
  return <RegisterUser />;
};

export default register;
