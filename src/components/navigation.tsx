import { Sun, Moon } from "lucide-react";

const Navigation = ({ darkMode, onToggleDisplayMode }) => {
  return (
    <header className="fixed flex align-baseline z-10 justify-between">
      <div></div>
      <nav>
        <ul className="flex gap-5 border rounded-3xl py-2 px-4 bg-black">
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
          onToggleDisplayMode();
        }}
      >
        {darkMode ? <Sun /> : <Moon />}
      </button>
    </header>
  );
};
export default Navigation;
