import { Container, CountShoppingCart, ShoppingCartConteiner } from "./Style";
import { Favorite } from "./Style";
import { ShoppingCart } from "./Style";
import FavoriteImg from "../../../../public/Img/General/Favorite.png";
import ShoppingCartImg from "../../../../public/Img/General/ShoppingCart.png";
import { goToShoppingCart } from "../../../Router/Coordinator";
import { useNavigate } from "react-router-dom";

export default function GeneralItens(props) {
  const navigate = useNavigate();
  function handleShoppingCartClick() {
    goToShoppingCart(navigate, 0);
  }

  return (
    <Container>
      <Favorite src={FavoriteImg} alt=""></Favorite>
      <ShoppingCartConteiner>
        <ShoppingCart
          src={ShoppingCartImg}
          onClick={handleShoppingCartClick}
          alt=""
        ></ShoppingCart>
        <CountShoppingCart>{props.shopingCartNumber}</CountShoppingCart>
      </ShoppingCartConteiner>
    </Container>
  );
}
