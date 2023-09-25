import {CartContainer} from "./CartStyle"

function Cart() {
    return (
      <CartContainer>
        <h2>Cart</h2>
        <p><b>Products:</b></p>
        <p><b>x0 Product Name</b></p>
        <button>Remove</button>
        <p><b>Total price:</b> US$0,00</p>
  
      </CartContainer>
    );
  }

  export default Cart;