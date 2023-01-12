import { useState } from "react";
import {
  Card,
  Img,
  Title,
  Price,
  Description,
  ButtonCart,
  ContainerInfos,
  Container
} from "./style";

const CardNave = (props) => {
  // --- PROPS VINDO DA HOME ---
  const nameproduct = props.produto.name;
  const description = props.produto.description;
  const price = props.produto.price;
  const imageUrl = props.produto.imageUrl;
  const infosProduto = { name: nameproduct, price: price };

  const addProduto = () => {
    localStorage.setItem("name", JSON.stringify(infosProduto.name));
    localStorage.setItem("price", JSON.stringify(infosProduto.price));

    const nameProduct = JSON.parse(localStorage.getItem("name"));
    const priceProduct = JSON.parse(localStorage.getItem("price"));

    const novaLista = [
      ...props.listaCarrinho,
      { name: nameProduct, price: priceProduct }
    ];
    props.setListaCarrinho(novaLista);

    console.log(novaLista);
  };

  return (
    <Container>
      <Card>
        <Title>{nameproduct}</Title>
        <Img src={imageUrl} />
        <Description>{description}</Description>
        <Price>R${price}</Price>
        <ButtonCart onClick={addProduto}>Adicionar ao carrinho</ButtonCart>
      </Card>
    </Container>
  );
};

export default CardNave;
