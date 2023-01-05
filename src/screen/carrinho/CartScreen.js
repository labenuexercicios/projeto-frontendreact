import ProductCard from '../../components/ProductCard/ProductCard';
import { priceFormatter } from '../../uteis/priceFormatter';
import{Main} from './CartScreen.styled'
function CartScreen(props) {
  const {
    cart ,
    increaseQuantityInCart,
    decreaseQuantityInCart,
    deleteItemFromCart
  }= props
  const Total = cart.reduce(
    (acc,product) =>{
      return product.quantity * product.price + acc
    }, 0
  )
  return (
    <Main>
    <section>
        <h1>Carrinho | Total ={priceFormatter.format(Total)} </h1>
        <hr/>
        
        {
        cart.map((product) => (
          <ProductCard 
          product={product}
           key={product.id} 
           isOnCartScreen={true}
           increaseQuantityInCart={increaseQuantityInCart}
           decreaseQuantityInCart={decreaseQuantityInCart}
           deleteItemFromCart={deleteItemFromCart}
           />
        ))
        }
    </section>
  </Main>
  );
}
export default CartScreen;
