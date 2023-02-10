// import React from 'react'
// import { useState } from 'react';

// const Cart = () => {
//   //4- Estado: Carrinho de compras
//   const [cart, setCart] = useState([]);


//     //Função para calcular o valor total
//     const valorTotal = () => {
//         if (cart) {
//             return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
//         } else {
//             return 0;
//         }
//     };
//     //Função para adicionar item ao carrinho
//       const handleAdd = (product) => {
//         const filterProduct = cart.find((prod) => prod.id === product.id);
//         if (filterProduct) {
//           const novoArray = cart.map((item) => {
//             if (item.id === product.id) {
//               item.quantity = item.quantity + 1;
//             }
//             return item;
//           });
//           setCart(novoArray);
//         } else {
//           product.quantity = 1;
//           setCart([...cart, product]);
//         }
//       };
//     //Função para remover item do carrinho
//       const handleRemove = (product) => {
//         const filterProduct = cart.find((prod) => prod.id === product.id);
//         if (filterProduct) {
//           const novoArray = cart.map((item) => {
//             if (item.id === product.id) {
//               item.quantity = item.quantity - 1;
//             }
//             return item;
//           });
//           setCart(novoArray);
//         } else {
//           product.quantity = 1; 
//           setCart([...cart, product]);
//         } if (product.quantity < 1) { //Condição para remover item do carrinho quando qtd for <1
//           setCart((remove)=> remove.filter((_, i )=> i !== 0)) 
//         }
//       };


//   return (

//     <div className="cart" >
//         <Cart
//         cart={cart} //props carrinho
//         setCart={setCart}/>
//         {cart && cart.map ((product, index) => (
//             <div key={index}>
//             <span>{product.name}</span>
//             <span>{product.price.toLocaleString("pt-br",{style: "currency", currency: "BRL"})}</span>
//             <p><b>Quantidade:{product.quantity}</b></p>
//             <img className="imgCart" src={product.image} alt={product.name}/>
//             <div className="buttons">
//             <button className="removeButton" onClick={()=> handleRemove(product)}><b>-</b></button>
//             <button className="addButton" onClick={()=> handleAdd(product)}><b>+</b></button>
//             </div>
//             </div>
//         ))}
//             <span>Total: {valorTotal().toLocaleString("pt-br", {
//                   style: "currency",
//                   currency: "BRL",
//                 })}</span>
//     </div>
  
//   )
// }

// export default Cart;