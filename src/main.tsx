import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; //styles must be here for tailwind to work just fine

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
