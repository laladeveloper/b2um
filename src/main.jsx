import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "sonner";
import App from "./App.jsx";
import { store } from "./app/app.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster richColors position="top-center" />
      <App />
    </Provider>
  </React.StrictMode>
);
