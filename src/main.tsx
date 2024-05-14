import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { PopoverProvider } from "./context/PopoverContext/PopoverProvider";
import "./style/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PopoverProvider>
      <App />
    </PopoverProvider>
  </React.StrictMode>
);
