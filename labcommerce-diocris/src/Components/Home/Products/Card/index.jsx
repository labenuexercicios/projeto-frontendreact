import { useState } from "react";
import Modifiers from "./Modifiers";
import { CardStyle } from "./style";
export default function Card({
  name,
  description,
  price,
  image,
  productKey,
  cartList,
  setCartList,
}) {
  //-- Create quantity
  //variable state
  const [quantity, setQuantity] = useState(0);

  //-- Handle to itens cart change
  //variable state
  const [handleItemToCart, setHandleItemToCart] = useState(0);

  //-- When add a item, if a item is the same one just sum to the actual quantity, if doesn't, just create a new item to Cart List
  //?? creates functin to handle with card addition
  //* function  *//
  function handleAddToCart() {
    //?? new const to store item's data
    const newItem = {
      name: name,
      price: price,
      quantity: quantity,
      id: productKey,
      total: price * quantity,
    };

    //?? founds the index of an addition item camparating with an already existing card item
    const repeatedObjIndex = cartList.findIndex(
      (product) =>
        product.id === newItem.id &&
        product.name === newItem.name &&
        product.price === newItem.price
    );

    //?? conditional if it has equals currencies
    if (repeatedObjIndex !== -1) {
      //?? creates a new const that receives the double item (object), unifying their values
      const updatedCartItem = {
        ...cartList[repeatedObjIndex],
        quantity: cartList[repeatedObjIndex].quantity + newItem.quantity,
        total: cartList[repeatedObjIndex].total + newItem.total,
      };

      //?? creates a new const that receives the cartList [array], adjusting the item previous doubled and unified to its original position
      const updatedCartList = [...cartList];
      updatedCartList[repeatedObjIndex] = updatedCartItem;

      //?? update the value of cartList to this new organized array
      setCartList(updatedCartList);
    } else {
      //?? if there are no double currencies, just add it to the cart
      setCartList([...cartList, newItem]);
    }
    //?? after adding it to the cart list render, set back the original values to 0
    setQuantity(0);
  }

  //-- Function to increase quantity
  //* function  *//
  const handleQuantity = (e) => {
    //?? set handleItemToCart with its atual value + 1
    setHandleItemToCart(handleItemToCart + 1);
    //?? if quantity is greater than 0 and the pressed button is to subtract, subtract 1 from quantity, else adds 1
    quantity > 0 && e.target.textContent === "-"
      ? setQuantity(quantity - 1)
      : e.target.textContent === "+" && setQuantity(quantity + 1);
  };

  //?? Assure that setItem doesnt enter on an infinite loop
  return (
    <>
      <CardStyle key={productKey}>
        <img key={image} id="product-image" alt="" src={image}></img>
        <h3 key={name} id="product-name">
          {name}
        </h3>
        <p key={description} id="product-description">
          {description}
        </p>
        <p key={price} id="produt-price">
          {price}$
        </p>

        <Modifiers
          event={handleQuantity}
          quantity={quantity}
          setQuantity={setQuantity}
          handleAddToCart={handleAddToCart}
        />
      </CardStyle>
    </>
  );
}
