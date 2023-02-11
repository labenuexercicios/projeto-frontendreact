import React from 'react'
import styled from 'styled-components'
import {GlobalStyled} from './globalStyled'


import {Footer} from './components/Footer'

import { useState } from "react";



 const CartImg = styled.img`
width: 90%;
max-height: 190px;
`

const SidebarContainer =  styled.div`

width:200px;
  height: 300px;
  border: 1px solid black;
font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  margin: 30px auto ;
      box-shadow: 5px 6px 11px 0px rgba(20,18,20,0.75);
background : darkred;
padding: 2rem;
border-radius: 15px;
  ul {
    list-style: none;
  }
`;

function App() {
 const [carrito, setCarrito] = useState([]);

  const addCart = (product) => {
    if (carrito.some((productCart) => productCart.id === product.id)) {
      setCarrito(
        [...carrito].map((productCart) => {
          if (productCart.id === product.id) {
            productCart.quantity++;
            return productCart;
          }
          return productCart;
        })
      );
    } else {
      console.log('el producto no esta en el carrito');
      setCarrito((currentState) => [
        ...currentState,
        { ...product, quantity: 1 },
      ]);
    }
  };
  const lessProduct = (product) => {
    if (product.quantity <= 1) {
      setCarrito((currentState) =>
        [...currentState].filter((cartProduct) => cartProduct.id != product.id)
      );
    } else {
      setCarrito((currentState) => {
        console.log(currentState);
        return [...currentState].map((productCart) => {
          if (productCart.id === product.id) {
            console.log('me ejecuto una vez');
            productCart.quantity -= 1;
          }
          return productCart;
        });
      });
    }
  };

  const [products, setProducts] = useState([
    {
      id: 0,
    name: "CANECA DARTH BLACK",
      normalPrice: 55,
      img:"https://i.ibb.co/z72dkMd/p00-darth-mug.jpg",
      rating: 4.7,
      stock: 1,
      discount: "10%",
      price: 35 * 0.9, 
      isSpecialEdition: true,
    },

    {
      id: 1,
        name: 'CHA COM VADER',
    normalPrice: 350,
      img:"https://i.ibb.co/xgsf076/p00-tea-Vader.png",
      rating: 4.7,
      stock: 1,
      discount: "10%",
      price: 350 * 0.9, 
    listCategories: [true , false, false , true, false],
   description: "JOGO DE PORCELANA PARA CHA COM  DARTH VADER"
    },
    {
    id: 2,
      name: " I'M YOUR FATHER",
    description: "CANECA BLACK COM A FAMOSA FRASE I'M YOUR FATHER DE DARTH VADER",
    normalPrice: 25,
    listCategories: [true , false, false , true, false],
    rating: 5,
    img: "https://i.ibb.co/SJp5fdH/mug-father.jpg",
    discount: "10%",
    price: 25 * 0.9,
    stock: 45
    }
  ]);


const logo1 = {
url: "https://i.ibb.co/BLGrRvg/logo1.png"
}

  return (
    <div className="App">
      <GlobalStyled />   
      <header
>
  
    <div className="menu"><h1 ><img src={logo1.url} alt="logo astro side" className="logoBrand" />
    ASTRO.SIDE
  </h1>
<input />
       <button className="menu-item"><span className="link-item"> <i className="fa fa-search"></i></span></button>
</div>


</header>   
   
  
 
     

       <main className="banner">

{carrito.length >= 1 ? (
        carrito.map((cartProduct) => (
          <SidebarContainer key={cartProduct.id}>
            <h5>{cartProduct.name}</h5>
            <p>Quantidade: {cartProduct.quantity}</p>
                 <p>Preco Total Item R$:</p> <p>{cartProduct.quantity * cartProduct.price}</p>
            <button onClick={() => lessProduct(cartProduct)}>Delete</button>
<button onClick={() => addCart(cartProduct)}><i className="fa-solid fa-cart-plus"></i>+1Produto</button>
            <hr />
          </SidebarContainer>
        ))
      ) : (
        <h3>Carrinho Vazio...</h3>
      )}

</main>
<section>

      <h2>Lista de productos</h2>
<div className="cardsPage">

      {products.map((product) => (
          
      <div className="card-container"  key={product.id}> 
<div className="card-flip">
<div className="card front">
  <CartImg src={product.img} alt="produtos loja"/>
<div className="card-block" id="divC1front">
 <h4 className="card-title">
 {product.name}
 </h4>
  <p className="card-text">{product.normalPrice}</p>

 <p className="card-text">{product.discount}</p>
 </div>


</div>

<div className="card back">
<div className="card-header">

</div>
<div className="card-block">
<h4 className="card-title">
{product.name}
</h4>
<ul className="card-text">


<li>
{product.name}
</li>
<li>
{product.price} </li>
<li>{product.price}
</li>
<li>
{product.price} 
</li>

</ul>
<button onClick={() => addCart(product)}><i className="fa-solid fa-cart-plus"></i>+1Produto</button>
</div>
</div>
</div>


</div>

     ))}
      </div>

</section>

<Footer></Footer>

  </div>
  );
}

export default App;
