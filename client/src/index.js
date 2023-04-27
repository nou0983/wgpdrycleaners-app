import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CartContextProvider } from "./contexts/cartContext.context";
import { FormContextProvider } from "./contexts/formContext.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <FormContextProvider>
        <App />
      </FormContextProvider>
    </CartContextProvider>
  </React.StrictMode>
);
