import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";

const root_element = document.getElementById("root");

if (root_element != null) {
  createRoot(root_element).render(
    <StrictMode>
      <h1>Hello!</h1>
    </StrictMode>,
  );
}
