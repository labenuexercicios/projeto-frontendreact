import { Container } from "./style";
import CardNave from "./CardNave";
import Produtos from "../Produtos/produtos.json";

function Home(props) {
  // PROPS VINDO DO APP
  const pesquisa = props.pesquisa;
  const orderFilter = props.orderFilter;
  const valueMin = props.valueMin;
  const valueMax = props.valueMax;
  const category = props.category;

  return (
    <Container>
      {/* FUNCÕES PARA OS FILTROS */}
      {Produtos.filter((produto) => {
        return valueMin ? produto.price >= valueMin : produto;
      })
        .filter((produto) => {
          return produto.name.toLowerCase().includes(pesquisa.toLowerCase());
        })
        .filter((produto) => {
          return category ? produto.type.includes(category) : produto;
        })

        .filter((produto) => {
          return valueMax ? produto.price <= valueMax : produto;
        })
        .sort((currentPrice, nextPrice) => {
          switch (orderFilter) {
            case "Crescente":
              return currentPrice.price - nextPrice.price;
            case "Decrescente":
              return nextPrice.price - currentPrice.price;
            default:
              break;
          }
        })
        // FUNÇÃO PARA RENDERIZAR ITENS NA TELA
        .map((produto) => {
          return (
            <CardNave
              produto={produto}
              setListaCarrinho={props.setListaCarrinho}
              novoProduto={props.novoProduto}
              setNovoProduto={props.setNovoProduto}
              listaCarrinho={props.listaCarrinho}
            />
          );
        })}
    </Container>
  );
}

export default Home;
