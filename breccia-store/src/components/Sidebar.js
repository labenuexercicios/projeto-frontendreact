import CartProduct from "./CartProduct";
import { SidebarContext } from "../contexts/SidebarContext";
import { useContext } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import CartDetails from "./CartDetails";

const Sidebar = () => {
  const { open, handleClose } = useContext(SidebarContext);
  const { cart, cartAmount } = useContext(CartContext);

  return (
    <div
      className={`${
        open ? "right-0" : "-right-full"
      } overflow-auto fixed w-full bg-white top-0 h-full shadow-2xl md:w-[35vw] lg:max-w-[30vw] transition-all duration-300 z-40 px-2`}
    >
      <div className="flex justify-between py-4 px-2 border-b">
        <p className="font-semibold text-sm uppercase">
          Shopping bag ({cartAmount(cart)})
        </p>
        <IoMdArrowForward
          onClick={handleClose}
          className="text-xl cursor-pointer"
        />
      </div>
      {cartAmount(cart) ? (
        <div>
          <CartDetails />
          <div className="flex flex-wrap justify-center py-6">
            <Link to="/checkout">
              <button
                onClick={handleClose}
                className="font-semibold border-2 border-black text-white bg-black uppercase w-40 py-2 "
              >
                Checkout
              </button>
            </Link>
            <Link to="/cart">
              <button
                onClick={handleClose}
                className="font-semibold uppercase border-2 border-black w-40 py-2"
              >
                View Cart
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 items-center justify-center h-full">
          <h1 className="text-xl">Your cart is currently empty</h1>
          <Link to="/product">
            <button
              onClick={handleClose}
              className="font-light text-lg border px-2 py-1"
            >
              Return to shop
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
