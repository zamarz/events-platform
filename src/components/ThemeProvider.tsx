"use client";
import ThemeContext from "@/app/context/themeContext";
import { useEffect, useState } from "react";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const storageTheme: boolean =
    typeof localStorage !== "undefined" && localStorage.getItem("runner-theme")
      ? JSON.parse(localStorage.getItem("runner-theme")!)
      : false;

  const [darkTheme, setDarkTheme] = useState<boolean>(storageTheme);

  const [renderComponent, setRenderComponent] = useState<boolean>(false);

  useEffect(() => {
    setRenderComponent(true);
  }, []);

  if (!renderComponent) return <></>;

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <div className={`${darkTheme ? "dark" : ""} min-h-screen`}>
        <div className="dark:text-white dark:bg-black text-[#1E1E1E]">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
