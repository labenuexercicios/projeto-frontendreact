import { Route, Routes } from "react-router-dom";
import Home from "../Pages/home/Home";
import Products from "../Pages/Products";
import Product from "../Pages/Product";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:searchKey/:idCategory" element={<Products />} />
      <Route path="/products/product/:idProduct" element={<Product />} />
    </Routes>
  );
};
