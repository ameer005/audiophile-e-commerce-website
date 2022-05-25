import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./features/store";
import "./index.scss";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="main-container">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </div>
    </Provider>
  </React.StrictMode>
);
