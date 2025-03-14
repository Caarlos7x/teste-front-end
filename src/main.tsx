import React from "react";
import './styles/global.scss';
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProductProvider } from "./context/ProductContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </React.StrictMode>
);