"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import { UserInfo } from "./types/types";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Run together",
  description: "Find your next running group",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user, setUser] = useState<UserInfo>({
    email: "",
    uid: "",
    photoURL: "",
  });
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userData) => {
      if (userData) {
        const { email, uid, photoURL } = userData;
        setUser({ email, uid, photoURL });
      } else {
        setUser({ email: "", uid: "", photoURL: "" });
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <UserContext.Provider value={user}>
          <ThemeProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </UserContext.Provider>
      </body>
    </html>
  );
}
