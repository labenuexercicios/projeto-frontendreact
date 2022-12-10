import { ProductCardContainer } from "./ProductsCard.styled";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function ProductCard(props) {
  const {
    product,
    addToCart,
    isOnProductsScreen,
    isOnCartScreen,
    increaseQuantityInCart,
    decreaseQuantityInCart,
  } = props;

  return (
    <ProductCardContainer>
      <p>{isOnProductsScreen && "Produtos"}</p>
      <p>{isOnCartScreen && "carrinho"}</p>
      <img src={product.imageUrl} alt={product.imageAlt} />
      <div className="header">
        <h2>{product.name}</h2>
      </div>
      <div className="Card-price-and-button">
        <span>{formatter.format(product.value)}</span>

        {
        isOnCartScreen && product.quantity > 1 
        && <button 
            onClick={()=>decreaseQuantityInCart(product)}> - </button>
        }
        {isOnCartScreen && (
          <button onClick={()=> increaseQuantityInCart(product)}> + </button>
        )}
        {isOnProductsScreen && (
          <button onClick={() => addToCart(product)}> Add to cart </button>
        )}
        {isOnCartScreen && <span>x{product.quantity}</span>}
      </div>
    </ProductCardContainer>
  );
}

export default ProductCard;
