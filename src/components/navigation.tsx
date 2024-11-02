import { Sun, Moon } from "lucide-react";
import { useEffect } from "react";

const Navigation = ({ darkMode, setDarkMode }) => {
  useEffect(() => {
    let savedMode = localStorage.getItem("displayMode");
    if (!savedMode) {
      savedMode = "light";
      setDarkMode(false);
      localStorage.setItem("displayMode", savedMode);
    }
    setDarkMode(savedMode === "dark" ? true : false);
  }, []);

  const toggleDisplayMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <header className="fixed flex align-baseline z-10 justify-between">
      <div></div>
      <nav>
        <ul className="flex gap-5 border rounded-3xl py-2 px-4 bg-blur">
          <li>
            <a href="skills">Skills</a>
          </li>
          <li>
            <a href="advantages">Advantage</a>
          </li>
          <li>
            <a href="works">Works</a>
          </li>
          <li>
            <a href="contact">Contact us</a>
          </li>
        </ul>
      </nav>
      <button
        className="float-end"
        onClick={() => {
          toggleDisplayMode();
        }}
      >
        {darkMode ? <Sun /> : <Moon />}
      </button>
    </header>
  );
};
export default Navigation;
