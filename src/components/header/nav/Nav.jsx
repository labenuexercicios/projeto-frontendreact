import { useNavigate } from "react-router-dom";
import { Navigation } from "./Style";
import { A } from "./Style";
import { Container } from "./Style";
import { goToProducts } from "../../../Router/Coordinator";

export default function Nav() {
  const navigate = useNavigate();

  const categories = JSON.parse(localStorage.getItem("categories"));

  return (
    <Container>
      <Navigation>
        {categories.map((category) => (
          <A
            key={category.id}
            href=""
            onClick={(e) => {
              e.preventDefault();
              goToProducts(navigate, " ", category.id);
            }}
          >
            {category.name}
          </A>
        ))}
      </Navigation>
    </Container>
  );
}
