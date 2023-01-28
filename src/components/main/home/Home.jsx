import BesProdcts from "./bestProducts/BestProducts";
import Promotions from "./promotions/Promotions";
export default function Home(props) {
  return (
    <div>
      <Promotions
        pageFlow={props.pageFlow}
        setPageFlow={props.setPageFlow}
        products={props.products.filter(function (item) {
          return item.discount > 0;
        })}
      />

      <BesProdcts
        pageFlow={props.pageFlow}
        setPageFlow={props.setPageFlow}
        products={props.products.filter(function (item) {
          return item.discount > 0;
        })}
      />
    </div>
  );
}
