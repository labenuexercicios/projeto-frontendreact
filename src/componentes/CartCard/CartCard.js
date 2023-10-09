import  { Container, CardItem, ImagemCarrinho, TextoCarrinho, PrecoCarrinho, ButaoDelete, Quantidade, Total, ContainerDetalhes } from "./CartCard.styles";

function CartCard({ itens, precoTotal, deleteProductToCart }) {

 
  return (
    <>
            <Container>
              <CardItem key={itens.id}>
                <ImagemCarrinho
                  key={itens.image}
                  src={itens.image}
                  alt="Camisas"
                />
                <TextoCarrinho key={itens.name}>
                  <strong>{itens.name}</strong>
                </TextoCarrinho>
                <ContainerDetalhes>
                <Quantidade>
                <strong>Qtd.{itens.amount}</strong>
                </Quantidade>
                <PrecoCarrinho key={itens.price}>
                  <strong>R${itens.price}</strong>
                </PrecoCarrinho>
                <ButaoDelete onClick={()=> deleteProductToCart(itens)}><strong>X</strong></ButaoDelete>
                </ContainerDetalhes>
             
              </CardItem>
            </Container>
    </>
  );
}

export default CartCard;
