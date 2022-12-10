import ProductCard from "../../components/ProductsCard/ProductsCard";
import { Main } from "./CartScreen.styled"  


function CartScreen(props) {
    const {
      cart,
      increaseQuantityInCart,
      decreaseQuantityInCart,
      deleteCardProduct
    }= props

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    
    const total = cart.reduce(
      (acc, product)=> product.value * product.quantity +acc, 0
    )

  return (
    <Main>
      <section>
      <h1>Cart</h1>
      <h3>Total ={formatter.format(total)}</h3>
      <hr/>
      {
          cart
          .map((product) => (
          <ProductCard 
            deleteCardProduct={deleteCardProduct}
            increaseQuantityInCart={increaseQuantityInCart}
            decreaseQuantityInCart={decreaseQuantityInCart}
            product={product} 
            key={product.id} 
            isOnCartScreen={true}
          />
          ))
      }
      </section>
    </Main>
  );
}

export default CartScreen;
