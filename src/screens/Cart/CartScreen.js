import { MainContainer, TotalPrice, GlobalStyle } from "./CartScreen.styled";

function CartScreen(props) {

  let totalPrice = 0

  return (
    <createGlobalStyle>
      <GlobalStyle />

      <MainContainer>

        {props.cartList.map((itens) => {
          totalPrice += itens.price

          return (
            <div className="container">
              <div className="card">
                <div className="content">
                  <h1>{itens.imageAlt}</h1>
                  <h2>R$ {itens.price},00</h2>
                  <h3>{itens.rating}</h3>
                  <img src={itens.imageUrl} width="150" height="100"></img>
                  <h4>{itens.name}</h4>
                  <button className="remove-to-cart" onClick={() => props.removeProducts(itens)}>Remover Produto</button>
                </div>
              </div>
            </div>

          )
        })}
      </MainContainer>

      <TotalPrice className="total-price">
        PREÇO TOTAL:R${totalPrice},00
      </TotalPrice>

    </createGlobalStyle>
  );
}
export default CartScreen