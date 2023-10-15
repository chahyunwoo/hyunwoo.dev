"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import MoonFillIcon from "../icons/MoonFillIcon";
import SunFillIcon from "../icons/SunFillIcon";

export default function ThemeToggleButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const nextTheme =
    theme === "dark" || resolvedTheme === "dark" ? "light" : "dark";

  return (
    <button onClick={() => setTheme(nextTheme)}>
      {theme === "dark" || resolvedTheme === "dark" ? (
        <SunFillIcon />
      ) : (
        <MoonFillIcon />
      )}
    </button>
  );
}
