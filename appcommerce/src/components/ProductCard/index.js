import { Button, Card, ProductImage } from "./styled";
import React from "react";
import { FiShoppingBag } from "react-icons/fi";

const ProductCard = ({
  product,
  addProductCart,
  setCartIsOpen,
  handleScreen,
  addProductToDetails,
}) => {


  return (
    <Card key={product.key}>
      <ProductImage
        src={product.imageUrl}
        alt={product.imageAlt}
        onClick={() => {
          handleScreen(6);
          addProductToDetails(product);
        }}
      /> 

      <h2
         onClick={() => {
          handleScreen(6);
          addProductToDetails(product);
        }}
      >
        {product.name}
      </h2> 
      <h1>R$ {product.value.toFixed(2).replace(".", ",")}</h1>
      <p>Ou em 12x de {(product.value / 3).toFixed(2).replace(".", ",")}</p>
      <Button
        onClick={() => {
          addProductCart(product, product.id);
          setCartIsOpen("0");
        }}
      >
        <FiShoppingBag /> Adicionar
      </Button>
    </Card>
  );
};


export default ProductCard;

