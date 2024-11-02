import { useState } from "react";
import Intro from "./components/intro";
import Navigation from "./components/navigation";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="dark:bg-black dark:text-white">
        <main className="pt-10 mx-4 md:mx-40 transition-300">
          {/* <button
            onClick={() => {
              toggleDisplayMode();
            }}
          >
            {darkMode ? <Sun /> : <Moon />}
          </button> */}
          <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
          <Intro />
          <hr className="my-10" />
        </main>
      </div>
    </div>
  );
};

export default App;
