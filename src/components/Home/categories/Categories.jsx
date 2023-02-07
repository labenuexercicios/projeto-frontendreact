import { useNavigate } from "react-router-dom";
import { Navigation } from "./Style";
import { A, CategoryConteiner, Img, Container } from "./Style";
import { goToProducts } from "../../../Router/Coordinator";

export default function Categories() {
  const navigate = useNavigate();

  const categories = JSON.parse(localStorage.getItem("categories"));

  return (
    <Container>
      <Navigation>
        {categories.map((category) => (
          <CategoryConteiner
            key={category.id}
            onClick={(e) => {
              e.preventDefault();
              goToProducts(navigate, " ", category.id);
            }}
          >
            <Img src={category.image} />
            <A>{category.name}</A>
          </CategoryConteiner>
        ))}
      </Navigation>
    </Container>
  );
}
