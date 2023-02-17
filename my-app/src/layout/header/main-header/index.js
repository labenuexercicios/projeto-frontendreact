import { Container } from "../../container";
import {
  Basket,
  Button,
  ItemList,
  Links,
  List,
  LogoIcon,
  Nav,
  NavContent,
  Section,
} from "./styled";

function MainHeader(props) {
  const { setIsOnFilter, setCategory } = props;

  function teste(e) {
    e.preventDefault();
    setCategory(e.target.value);
    setIsOnFilter(true);
  }
  return (
    <Nav>
      <Container>
        <NavContent>
          <LogoIcon
            src={process.env.PUBLIC_URL + "/img/logo-principal.svg"}
            alt="logo Astronauta"
          />
          <List>
            <ItemList>
              <Button value="brinquedos" onClick={(e) => teste(e)}>
                Brinquedos
              </Button>
            </ItemList>
            <ItemList>
              <Button value="calçados" onClick={(e) => teste(e)}>
                Calçados
              </Button>
            </ItemList>
            <ItemList>
              <Button value="diario" onClick={(e) => teste(e)}>
                Dia a Dia
              </Button>
            </ItemList>
            <ItemList>
              <Button value="escolar" onClick={(e) => teste(e)}>
                Escolar
              </Button>
            </ItemList>
            <ItemList>
              <Button value="sono" onClick={(e) => teste(e)}>
                Sono
              </Button>
            </ItemList>
            <ItemList>
              <Button value="todos" onClick={(e) => teste(e)}>
                Todos
              </Button>
            </ItemList>
          </List>
          <Section>
            <input type="search" placeholder="Buscar" />
            <a href="/">
              <Basket
                src={process.env.PUBLIC_URL + "/img/cart2.svg"}
                alt="carrinho de compras"
              />
            </a>
          </Section>
        </NavContent>
      </Container>
    </Nav>
  );
}

export default MainHeader;
