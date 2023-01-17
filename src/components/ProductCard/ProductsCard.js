import React from "react";
import { productListData } from "../../constants/productListData";
import { ProductContainer } from "./ProductCard.styled.";

const ProductCard = (props) => {
  // console.log(props);
  const [products, setProducts] = React.useState([productListData]);
  const [value, setValue] = React.useState('');

  const addToCart = (event) => {

    // console.log(value)

    for (let i = 0; i < products[0].length; i++) {
      const productIndex = products.findIndex((product) => product[i].name == props.name)

      const newProductList = [...products[0]]
      newProductList.splice(productIndex, 1)
      const orderedList = newProductList.sort((a, b) => {
        // console.log(b);
        return (
          Number(a.imageUrl.slice(34, a.imageUrl.length - 1)) -
          Number(b.imageUrl.slice(34, b.imageUrl.length - 1))
        )
      })


      // console.log(props)
      // console.log('orderedList', orderedList);


      // localStorage.setItem('cart', newProductList);

      // setValue(newProductList);
    }

    // const newCart = [...cart, productToAdd]

    // // const productFound = newCart.find(
    // //     (productInCart) => productInCart.id === productToAdd.id
    // // )

    // // if (!productFound) {
    // //     const newProduct = {...productToAdd, quantity: 1}
    // //     newCart.push(newProduct)
    // // } else {
    // //     productFound.quantity++
    // // }

    // setCart(newCart)
  }

  const removeFromCart = () => {
    console.log('remove from cart function');
    // const newCart = [...cart, productToAdd]

    // // const productFound = newCart.find(
    // //     (productInCart) => productInCart.id === productToAdd.id
    // // )

    // // if (!productFound) {
    // //     const newProduct = {...productToAdd, quantity: 1}
    // //     newCart.push(newProduct)
    // // } else {
    // //     productFound.quantity++
    // // }

    // setCart(newCart)
  }

  return (
    <ProductContainer>

      <img src={props.url} />
      <button onClick={props.isCartPage ? addToCart : productListData}>
        {props.isCartPage ? '+ CARRINHO' : 'REMOVER ITEM'}
      </button>
      <p>{props.id}</p>
      <p>{props.name}</p>
      <p>Preço: R${props.value},00</p>


    </ProductContainer>
  );
};
export default ProductCard;
