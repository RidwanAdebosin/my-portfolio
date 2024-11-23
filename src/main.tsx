import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// import TailWind from "./components/Tailwind.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    {/* <TailWind /> */}
  </StrictMode>
);
