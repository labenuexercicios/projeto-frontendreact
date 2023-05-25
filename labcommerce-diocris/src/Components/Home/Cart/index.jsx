import { useEffect, useState } from "react";
import ProductCart from "./ProductCart";
import Total from "./Total";
import { CartStyle, ProductWrapper } from "./style";
import LineHeader from "../../Shared/SectionHeader";
import Button from "../../Shared/Button";

export default function Cart({ cartList, handleDeleteList, setCartList }) {
  useEffect(() => {
    const storageList = JSON.parse(localStorage.getItem("cartList"));

    return setCartList(storageList);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const list = cartList.filter((item) => {
    return item.quantity >= 1;
  });

  // Chamada da função no useEffect
  useEffect(() => {
    const storageList = JSON.parse(localStorage.getItem("cartList"));
    setCartList(storageList || []);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //-- Function to cart list be hidden when load.
  //variable state
  const [wrapperCss, setWrapperCss] = useState({
    heightCart: "0vh",
    paddingCart: "0",
    arrow: "↓",
  });
  //-- open cart list when click button
  //* function  *//
  const openCart = () => {
    wrapperCss.arrow === "↓"
      ? setWrapperCss({
          ...wrapperCss,
          heightCart: 100 + "%",
          paddingCart: 1 + "rem",
          arrow: "↑",
        })
      : setWrapperCss({
          ...wrapperCss,
          heightCart: 0 + "px",
          paddingCart: 0,
          arrow: "↓",
        });
  };

  //-- create state to total
  //variable state
  const [total, setTotal] = useState(0);
  //-- create function to update total
  //* function  *//
  const updateTotal = () => {
    let sum = 0;
    //-- runs each element of cartList and set sum to be increase with each item price total
    list.map((item) => {
      return (sum += item.price * item.quantity);
    });
    //-- sets total to sum value
    setTotal(sum);
  };

  //-- when cartList receives an update also updates new total
  useEffect(() => {
    updateTotal();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  //-- function to update total when function is actived inside ProductCart, setting then the new value to be showed
  //* function  *//
  const updateQuantity = (index, newQuantity) => {
    //? create new variable to store cartList values
    const updatedList = [...list];
    //? assigns to this copy the new quantity
    updatedList[index].quantity = newQuantity;
    //? activates function to update total
    updateTotal();
  };
  //variable array method
  useEffect(() => {
    if (list.length > 0) {
      const cartArray = JSON.stringify(list);
      localStorage.setItem("cartList", cartArray);
    }
  }, [list]);

  const cart = list.map((item, index) => {
    return (
      <ProductCart
        key={item.id}
        index={index}
        quantity={item.quantity}
        name={item.name}
        price={item.price}
        updateQuantity={updateQuantity}
      />
    );
  });

  const handlePayment = () => {
    alert("There is no back-end integrated, try again in a couple weeks.");
  };

  return (
    <>
      <CartStyle>
        <LineHeader
          cart={"true"}
          cartCount={cart.length}
          mainText={"Cart"}
          text={wrapperCss.arrow}
          event={openCart}
        />
        <ProductWrapper
          height={wrapperCss.heightCart}
          padding={wrapperCss.paddingCart}
        >
          {cart}
          <Total total={total} />
          <Button erase="true" text={"Erase list"} event={handleDeleteList} />
          <Button payment="true" text={"Go to payment"} event={handlePayment} />
        </ProductWrapper>
      </CartStyle>
    </>
  );
}
