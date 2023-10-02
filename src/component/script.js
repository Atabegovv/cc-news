import React from "react";
import { createRoot } from 'react-dom/client';
import "./common.css";
import App from "./App/App.js";


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
