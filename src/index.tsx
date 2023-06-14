import { StrictMode } from "react";
import App from "./App";
import { createRoot } from "react-dom/client";

const element = document.getElementById("root");
const root = createRoot(element as HTMLElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
