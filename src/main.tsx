import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// Script de redirection automatique du HashRouter (#/) vers BrowserRouter (/)
if (window.location.hash.startsWith('#/')) {
  const path = window.location.hash.slice(2);
  window.history.replaceState(null, '', '/' + path);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
