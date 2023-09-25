import { CardInfos, ProductCardContainer } from "./ProductCardStyle";
import { productsList } from "../../../assents/productsList";
import { BsFillCartPlusFill } from "react-icons/bs";
import formatCurrency from "../../../utils/formatCurrency";

export function ProductCard(props) {
  const { products } = props;
  const { cart } = props;
  const { id, name, value, imageUrl } = props;
  const { addCart } = props;
  const { deleteProductCart } = props;

  return (
    //   <ContainerCard key={item.id}>
    //   <Image src={item.url} alt={item.name} />
    //   <Text> Nome: {item.name}</Text>
    //   <Text>Quantidade:{item.amount}</Text>
    //   <Text>{item.valor}</Text>
    //   <button value={cart} onClick={() => addCart(product)}>Comprar</button>
    // </ContainerCard>

    <div>
      <ProductCardContainer>
        <img className="card__image" src={imageUrl} alt="product" />

        <CardInfos >
          <p className="card__price">{formatCurrency(value, "BRL")}</p>
          <h3 className="card__title">{name}</h3>
        </CardInfos>
        <button
          className="button__add-cart"
          value={cart}
          onClick={() => addCart(products)}
        >
          <BsFillCartPlusFill />
        </button>
      </ProductCardContainer>
    </div>
  );
}
