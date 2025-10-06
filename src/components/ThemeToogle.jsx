import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const ThemeToggle = ({ isSystemDefaultVisible }) => {
  const [theme, setTheme] = useState(localStorage.theme || "auto");
  const [prefersDark, setPrefersDark] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  // Watch system preference for auto mode
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => setPrefersDark(e.matches);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  // Apply theme
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else if (theme === "auto") {
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.theme = "auto";
    }
  }, [theme, prefersDark]);

  // Decide button label
  let toggleLabel;
  if (theme === "auto") {
    toggleLabel = prefersDark ? "🌞" : "🌙";
  } else {
    toggleLabel = theme === "dark" ? "🌞" : "🌙";
  }

  // Handle toggle click
  const handleToggle = () => {
    if (theme === "auto") {
      setTheme(prefersDark ? "light" : "dark");
    } else {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };

  return (
    <div className="flex items-center gap-1 cursor-pointer">
      {/* Light/Dark toggle button */}
      <button onClick={handleToggle} className={"cursor-pointer text-sm"}>
        {toggleLabel}
      </button>

      {/* Auto mode button */}
      {isSystemDefaultVisible && (
        <button
          onClick={() => setTheme("auto")}
          className={"cursor-pointer text-sm"}
        >
          🖥️
        </button>
      )}
    </div>
  );
};

export default ThemeToggle;
