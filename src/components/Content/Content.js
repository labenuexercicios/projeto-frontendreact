import {
  MainContainer,
  CardsContainer,
  Card,
  Image,
  PriceAndButton,
} from "./styles";
import { useState } from "react";
import Cart from "../Cart/Cart";
import cards from "../../cards/card.json";

function Content(props) {
  const [cartItems, setCartItems] = useState([]);

  const addCart = (card) => {
    const exist = cartItems.find((x) => x.id === card.id); //variavel q verifica os itens do carrinho existem
    if (exist){
      setCartItems(cartItems.map((x) => x.id === card.id  ? {...exist, qty: exist.qty +1} : x
        )
        )
    } else {
      setCartItems([...cartItems, {...card, qty:1}])
    }
  };

  const onRemove = (card) =>{
    const exist = cartItems.find((x) => x.id === card.id);
    if (exist.qty === 1){
      setCartItems(cartItems.filter((x)=> x.id !== card.id))
    } else {
      setCartItems(cartItems.map((x) => x.id === card.id ? {...exist, qty: exist.qty - 1} : x
      
      ))
    }
  }

  return (
    <MainContainer className="main-container">
      <CardsContainer className="cards-container"
      addCart={addCart}
      >
        {cards
          .filter((card) => {
            return card.name
              .toLowerCase()
              .includes(props.query.toLowerCase().trim());
          })

          .map((card) => (
            <Card className="div-card"
             key={card.id} 
             addCart={addCart}
            >
              <Image src={card.imageUrl} alt={card.imageAlt} />
              
              <h1 className="titulo">{card.name}</h1>

              <PriceAndButton className="Price-and-cart">
                <p className="price">R${card.price}</p>
                <button onClick={() => addCart(card)} className="button"> Adicionar ao carrinho</button>
              </PriceAndButton>
            </Card>
          ))}
      </CardsContainer>
      <Cart 
      cartItems={cartItems}
      onAddCart={addCart}
      onRemove={onRemove}
      > </Cart>
    </MainContainer>
  );
}

export default Content;
