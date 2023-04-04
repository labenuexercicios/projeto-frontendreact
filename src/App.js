import {
  createBrowserRouter,
  RouterProvider,
  Outlet, useLocation
} from "react-router-dom"
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Product from "./pages/product/Product";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { AppContext } from "./AppContext";
import { CartProvider } from "./CartContext";
import "./App.css";
import { useState } from "react";


const Layout = () => {
  const { pathname } = useLocation();
  const showNavbarAndFooter = pathname !== "/";

  return (
    <div className="app">
      {showNavbarAndFooter && <Navbar />}
      <Outlet />
      {showNavbarAndFooter && <Footer />}
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Login />
      },
      {
        path: "home",
        element: <Home />
      },
      {
        path: "products/:id",
        element: <Products />
      },
      {
        path: "product/:id",
        element: <Product />
      },
    ]
  },
])


function App() {

  const [typeP, setTypeP] = useState("");
  const [idProduct, setIdProduct] = useState("")

  console.log(idProduct)
  return (
    <div className="container">
      <AppContext.Provider value={{ typeP, setTypeP, idProduct, setIdProduct }}>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </AppContext.Provider>
    </div>
  )
}

export default App;