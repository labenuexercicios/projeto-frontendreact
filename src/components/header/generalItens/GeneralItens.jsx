import { Container } from "./Style";
import { Favorite } from "./Style";
import { ShoppingCart } from "./Style";
import FavoriteImg from "../../../../public/Img/General/Favorite.png";
import ShoppingCartImg from "../../../../public/Img/General/ShoppingCart.png";
import { goToShoppingCart } from "../../../Router/Coordinator";
import { useNavigate } from "react-router-dom";

export default function GeneralItens() {
  const navigate = useNavigate();
  function handleShoppingCartClick() {
    goToShoppingCart(navigate, 0);
  }

  return (
    <Container>
      <Favorite src={FavoriteImg} alt=""></Favorite>
      <ShoppingCart
        src={ShoppingCartImg}
        onClick={handleShoppingCartClick}
        alt=""
      ></ShoppingCart>
    </Container>
  );
}
