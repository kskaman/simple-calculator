import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./colors.css";
import "./index.css";

import App from "./App.tsx";
import { ThemeProvider } from "./context/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
