import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <App />
        <footer>
          &#169; Venkzy for Movie
          <span style={{ color: "red" }}>Mania</span>.
        </footer>
      </Router>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
