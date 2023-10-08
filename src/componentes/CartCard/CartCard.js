import  { Container, CardItem, ImagemCarrinho, TextoCarrinho, PrecoCarrinho, ButaoDelete, Quantidade } from "./CartCard.styles";

function CartCard({ itens, deleteProductToCart }) {
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
                  {itens.name}
                </TextoCarrinho>
                <Quantidade>
                Qtd.{itens.amount}
                </Quantidade>
                <PrecoCarrinho key={itens.price}>
                  R${itens.price}
                </PrecoCarrinho>
                <ButaoDelete onClick={()=> deleteProductToCart(itens)}>X</ButaoDelete>
              </CardItem>
            </Container>
    </>
  );
}

export default CartCard;
