import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductProvider from './hooks/useProductContext';
import CartProvider from './hooks/useCartContext';
import SideBarProvider from './hooks/SideBarContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  
<SideBarProvider>
  <CartProvider>
  <ProductProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProductProvider >
  </CartProvider>
  </SideBarProvider>
);