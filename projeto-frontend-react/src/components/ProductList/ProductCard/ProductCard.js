import { ProductCardContainer } from "./ProductCardStyle";
import { productsList } from "../../../assents/productsList";

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
        <img src={imageUrl} />
        <h3>{name}</h3>
        <p>Preço: R$ {value},00</p>
        {/* <select>
          Quantidade:
          <option>Quantidade:</option>
          <option>01</option>
          <option>02</option>
          <option>03</option>
          <option>04</option>
          <option>05</option>
        </select> */}
        <button value={cart} onClick={() => addCart(products)}>
          Adicionar ao Carrinho
        </button>
      </ProductCardContainer>
    </div>
  );
}
