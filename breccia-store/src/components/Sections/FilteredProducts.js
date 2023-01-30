import { useContext, useState } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { CartContext } from "../../contexts/CartContext";

const FilteredProducts = ({ result }) => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  return <div className="container mx-auto"></div>;
};

export default FilteredProducts;
