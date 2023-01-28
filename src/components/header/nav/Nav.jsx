import { Navigation } from "./Style";
import { A } from "./Style";
import { Container } from "./Style";

export default function Nav(props) {
  const handleClick = () => {
    props.setPageFlow("products");
  };

  return (
    <Container>
      <Navigation>
        {props.categories.map((item) => (
          <A key={item.id} href="" onClick={handleClick}>
            {item.name}
          </A>
        ))}
      </Navigation>
    </Container>
  );
}
