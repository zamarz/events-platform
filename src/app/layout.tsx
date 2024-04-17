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

const inter = Inter({ subsets: ["latin"] });

type RootLayoutProps = {
  children: React.ReactNode;
};

const metadata: Metadata = {
  title: "Run together",
  description: "Find your next running group",
};

export default function RootLayout({ children }: RootLayoutProps) {
  const [user, setUser] = useState({
    email: "",
    uid: "",
    accessToken: "",
    photoURL: "",
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userData) => {
      if (userData) {
        const { email, uid, accessToken, photoURL } = userData;
        setUser({ email, uid, accessToken, photoURL });
      } else {
        setUser({ email: "", uid: "", accessToken: "", photoURL: "" });
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
