import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartProduct from "./CartProduct";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { SidebarContext } from "../contexts/SidebarContext";

const CartDetails = () => {
  const { cart, clearCart, subTotal } = useContext(CartContext);
  const { handleClose } = useContext(SidebarContext);
  return (
    <div>
      <div>
        <div className="py-4 px-2 border-b flex justify-between">
          <p className="uppercase">Products</p>
          <p className="uppercase">Subtotal</p>
        </div>
        {cart.map((product) => {
          return <CartProduct key={product.id} product={product} />;
        })}
      </div>
      <div className="flex justify-between py-4 px-2 border-b border-t">
        <div className="flex items-center gap-4">
          <p className="uppercase">Subtotal</p>
          <p className="font-semibold text-lg">${subTotal(cart).toFixed(2)}</p>
        </div>
        <FiTrash2 className="cursor-pointer" onClick={clearCart} />
      </div>
    </div>
  );
};

export default CartDetails;
