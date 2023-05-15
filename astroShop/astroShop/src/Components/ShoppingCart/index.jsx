import { CheckoutButton, Container, ItemContainer, RemoveButton } from "./styles";
import camisaNasa from '../../assets/img/blusa1.png'

const ShoppingCart = () => {
  return (
    <>
    <Container>
      <h1>Astro Cart</h1>
      <ItemContainer>
        <div>
          <p>Produto: Camisa Nasa</p>
          <img src={camisaNasa} alt="Camisa Nasa" />
        </div>
        <RemoveButton>Remover</RemoveButton>
      </ItemContainer>
      <CheckoutButton>Finalizar Compra</CheckoutButton>
    </Container>
    </>
  )
}

export default ShoppingCart;