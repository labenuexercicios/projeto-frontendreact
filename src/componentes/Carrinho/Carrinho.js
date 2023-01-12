import { Container, Header, Itens, ContainerButton } from "./style";

export default function Carrinho(props) {
  // PROPS VINDO DO APP, FUNCAO PARA ESCONDER CARRINHO
  const showOrHide = () => {
    props.setShowElement(false);
  };

  const removerItemCarrinho = (item) => {
    const removeItem = props.listaCarrinho.filter(
      (produto) => produto !== item
    );
    props.setListaCarrinho(removeItem);
  };

  const MostraLista = props.listaCarrinho.map((item) => {
    return (
      <Itens>
        {`${item.name} - ${item.price}`}
        <button onClick={() => removerItemCarrinho(item)}>remover</button>
      </Itens>
    );
  });

  return (
    <Container>
      <ContainerButton>
        <button onClick={showOrHide}>
          <img
            src={"https://cdn-icons-png.flaticon.com/512/75/75519.png"}
            alt="X"
          />
        </button>
      </ContainerButton>
      <Header>
        <h1>Carrinho</h1>
      </Header>
      {MostraLista}
      <hr />
      <div>
        <p>Valor Total: R$</p>
      </div>
    </Container>
  );
}
