import { useEffect, useState } from "react";
import Intro from "./components/intro";
// import Navigation from "./components/navigation";
import { Sun, Moon } from "lucide-react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load saved display mode from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("displayMode") || "light";
    setDarkMode(savedMode === "dark");
  }, []);

  // Toggle dark mode and update localStorage
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("displayMode", newMode ? "dark" : "light");
  };

  return (
    <div className={`${darkMode ? "dark" : "light"}`}>
      <section className="dark:bg-black dark:text-white bg-white light:text-black">
        <main className="pt-10 mx-4 md:mx-40 transition-all duration-300">
          <button onClick={toggleDarkMode}>
            {darkMode ? <Sun /> : <Moon />}
          </button>
          {/* Uncomment and update the props as needed */}
          {/* <Navigation darkMode={darkMode} onToggleDisplayMode={toggleDarkMode} /> */}
          <Intro />
          <hr className="my-10" />
        </main>
      </section>
    </div>
  );
};

export default App;
