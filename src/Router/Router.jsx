import { Route, Routes } from "react-router-dom";
import Home from "../Pages/home/Home";
import Products from "../Pages/products/Products";
import Product from "../Pages/product/Product";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:searchKey/:idCategory" element={<Products />} />
      <Route path="/product/:idProduct" element={<Product />} />
    </Routes>
  );
};
