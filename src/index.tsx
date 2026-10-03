import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Ledgerly } from "./screens/Ledgerly";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Ledgerly />
  </StrictMode>,
);
