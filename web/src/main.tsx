import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

const root_element = document.getElementById("root");

if (root_element != null) {
  createRoot(root_element).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
