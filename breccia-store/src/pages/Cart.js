import { useContext } from "react";
import CartDetails from "../components/CartDetails";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, cartAmount } = useContext(CartContext);
  return (
    <div className="flex flex-col lg:px-20 py-10">
      {cartAmount(cart) ? (
        <div>
          <CartDetails />
          <div className="flex justify-center">
            <Link to="/checkout">
              <button className="lg:w-56 uppercase bg-black py-3 w-full mt-4 text-white">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 items-center justify-center h-full">
          <h1 className="text-xl">Your cart is currently empty</h1>
          <Link to="/product">
            <button className="font-light text-lg border px-2 py-1">
              Return to shop
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
