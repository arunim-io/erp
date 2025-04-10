import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { routeTree } from "./routeTree.gen";
import "./main.css";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const root_element = document.getElementById("root");
if (root_element != null) {
  createRoot(root_element).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}
