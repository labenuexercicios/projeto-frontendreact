import React from "react";
import { H2 } from "./styles";
import { Button, Container, Button1 } from "./styles";
import { Img } from "./styles";
import { Div, Div1 } from "./styles";
import { Hr } from "./styles";
import { useEffect } from "react";

export default function Cart(props) {
  const { cartItems, add, remove, setCartItems, removeFromCart } = props;

  const total = cartItems.reduce((a, c) => a + c.value * c.qt, 0);

  function retrieve() {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }

  useEffect(() => {
    retrieve();
  }, []);

  return (
    <Container>
      <aside className="block col-1">
        <h1>
          <img src="image/cart.png" alt="delete" width="50vw" height="50vh" />
        </h1>

        <H2>
          {cartItems.length === 0 && (
            <div>
              {" "}
              **********
              <br /> O carrinho está vazio <br /> *****{" "}
            </div>
          )}
        </H2>

        {cartItems.map((satellite) => (
          <div key={satellite.id} className="row">
            <div className="col-2">
              <p>
                <Img src={satellite.image} />
              </p>
              {satellite.name}
            </div>

            <Div1 className="col-2 text-right">
              {satellite.qt} x R${satellite.value.toFixed(2)}
            </Div1>

            <div className="col-2">
              <Button onClick={() => add(satellite)} className="add">
                +
              </Button>

              <Button onClick={() => remove(satellite)} className="remove">
                -
              </Button>

              <Button1
                onClick={() => removeFromCart(satellite)}
                className="removefromCart"
              >
                {" "}
                <img
                  src="image/delete.png"
                  alt="delete"
                  width="18vw"
                  height="18vh"
                />
              </Button1>
            </div>
            <Hr />
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <Div className="row">
              <div className="col-2"> Investimento Total:</div>
              <div className="col-1 text-right">R${total.toFixed(2)}</div>
            </Div>
          </>
        )}
      </aside>
    </Container>
  );
}
