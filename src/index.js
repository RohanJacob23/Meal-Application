import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MealsProvider } from "./context";
// import { AppProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MealsProvider>
    <App />
  </MealsProvider>
);
