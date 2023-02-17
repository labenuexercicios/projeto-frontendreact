import { Title } from "../../footer/main-footer/assistant/styled";
import { Button, Content, Image } from "./styled";

function Card(props) {
  const { name, image, price } = props;
  return (
    <>
      <Content>
        <Image src={image} alt="" />
        <h3>{name}</h3>
        <p>R$ {price},00</p>
        <Button>Adicionar ao carrinho</Button>
      </Content>
    </>
  );
}

export default Card;
