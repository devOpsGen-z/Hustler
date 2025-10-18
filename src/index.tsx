import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PluginFileCover } from "./screens/PluginFileCover";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <PluginFileCover />
  </StrictMode>,
);
