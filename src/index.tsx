import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import "./i18n";
import "./style.css";

const domNode = document.getElementById("root");
const root = createRoot(domNode as HTMLElement);
root.render(<App />);
