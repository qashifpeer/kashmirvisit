"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { BsSun, BsMoon } from "react-icons/bs";
import { useContext, useState, useEffect } from "react";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return "Loading...." //Alternatively,  return a loader or placeholder while the component is not mounted.
  }
  return (
    <button
      className="bg-gray-10 rounded-full p-2 dark:bg-gray-700 py-2 flex gap-2"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <BsMoon /> : <BsSun />}
    </button>
  );
};

export default ThemeToggle;
