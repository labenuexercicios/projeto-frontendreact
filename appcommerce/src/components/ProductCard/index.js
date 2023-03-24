import React, {useState} from "react";
import { Button, Card, ProductImage } from "./styled";
import { FiShoppingBag } from "react-icons/fi";
import  Modal from "../Modal/index"

const ProductCard = ({
  product,
  addProductCart,
  setCartIsOpen,
  openModal,
  showModal,
  setShowModal,
  productModal
}) => {

  

  return (
    <Card key={product.key}>
      <ProductImage
        src={product.imageUrl}
        alt={product.imageAlt}
        onClick={() => openModal(product)}
      /> 
      <Modal showModal={showModal} setShowModal= {setShowModal}
      productModal={productModal} />
      <h2
        onClick={() => openModal(product)}
      >
        {product.name}
      </h2> 
      <Modal showModal={showModal} setShowModal= {setShowModal} />
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

