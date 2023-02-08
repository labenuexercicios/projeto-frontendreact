import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductProvider from "./contexts/ProductContext";
import SidebarProvider from "./contexts/SidebarContext";
import CartProvider from "./contexts/CartContext";
import MenuProvider from "./contexts/MenuContext";
import CheckoutProvider from "./contexts/CheckoutContext";
import RegistrationProvider from "./contexts/RegistrationContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CheckoutProvider>
    <RegistrationProvider>
      <SidebarProvider>
        <MenuProvider>
          <CartProvider>
            <ProductProvider>
              <React.StrictMode>
                <App />
              </React.StrictMode>
            </ProductProvider>
          </CartProvider>
        </MenuProvider>
      </SidebarProvider>
    </RegistrationProvider>
  </CheckoutProvider>
);
