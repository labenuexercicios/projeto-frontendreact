import Promotions from "../../components/Home/Promotions/Promotions";
import BestProducts from "../../components/Home/BestProducts/BestProducts";
import { HomeStyled } from "./style";

export default function Home() {
  return (
    <HomeStyled>
      <Promotions />
      <BestProducts />
    </HomeStyled>
  );
}
