import React, {useState} from "react";
import { Button, Card, ProductImage } from "./styled";
import { FiShoppingBag } from "react-icons/fi";
import  Modal from "../Modal/index"

const ProductCard = ({
  product,
  addProductCart,
  setCartIsOpen,
}) => {

  const[openModal, setOpenModal] = useState(false);
  
  return (
    <Card key={product.key}>
      <ProductImage
        src={product.imageUrl}
        alt={product.imageAlt}
        onClick={() => setOpenModal(true)}
      /> 

      <h2
        onClick={() => setOpenModal(true)}
      >
        {product.name}
      </h2> 
      <Modal
      openModal={openModal}
      setOpenModal={() => setOpenModal(!openModal)} 
      product={product}>

        {product.name}
      </Modal>
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

