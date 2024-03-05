import React from "react";

import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { ProductProvider } from "./context/ProductContext";
import { CategoryProvider } from "./context/CategoryContext";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CategoryProvider>
      <ProductProvider>
        <AuthProvider>
          <CartProvider>
            <Router>
              <App />
            </Router>
          </CartProvider>
        </AuthProvider>
      </ProductProvider>
    </CategoryProvider>
  </React.StrictMode>
);
// ReactDOM.render(
// <React.StrictMode>
//   <Router>
//     <App />
//   </Router>
// </React.StrictMode>,
// document.getElementById("root")
// );
