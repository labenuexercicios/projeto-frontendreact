import { RemoveItembutton, Div1CartStyled, Div2CartStyled, QuantityButton, CartStyled, FisrtStyledContainer, SecondStyledContainer, ThirdStyledContainer, ImgCartStyled } from "./CartStyled"

export function Cart({ cart, setCart, removeItem, quantityById, setQuantityById, incrementQuantity, decrementQuantity }) {

  return (
    <Div1CartStyled>
      <div>
        <h1>Shopping Cart</h1>
      </div>
      <Div2CartStyled>
        {cart.map(item => (
          <CartStyled key={item.ID}>
            <p>Toy Name: {item.Name}</p>
            <p>Description: {item.Description}</p>
            <p>Brand: {item.Brand}</p>
            <p>Price: {item.Price}</p>
            <FisrtStyledContainer>
              <ImgCartStyled src={require(`../../../assets/${item.Image}`)} />
              <SecondStyledContainer>

                <p>Quantity</p>
                <ThirdStyledContainer>
                  <QuantityButton onClick={() => decrementQuantity(item.ID)}>-</QuantityButton>
                  <span> {quantityById[item.ID]} </span>
                  <QuantityButton onClick={() => incrementQuantity(item.ID)}>+</QuantityButton>
                </ThirdStyledContainer>
              </SecondStyledContainer>
              <p>Product ID: {item.ID}</p>
            </FisrtStyledContainer>
            <RemoveItembutton onClick={() => removeItem(item.ID)}>Remover item</RemoveItembutton>
          </CartStyled>
        ))}

      </Div2CartStyled>
    </Div1CartStyled>
  );
}

