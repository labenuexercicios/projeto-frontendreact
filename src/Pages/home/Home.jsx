import Promotions from "../../components/Home/Promotions/Promotions";
import BestProducts from "../../components/Home/BestProducts/BestProducts";
import { HomeStyled } from "./style";
import Categories from "../../components/Home/categories/Categories";

export default function Home() {
  return (
    <HomeStyled>
      <Categories />
      <Promotions />
      <BestProducts />
    </HomeStyled>
  );
}
