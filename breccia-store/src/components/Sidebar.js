import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";
import { SidebarContext } from "../contexts/SidebarContext";
import { useContext, useEffect, useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";
import { FiTrash2 } from "react-icons/fi";
const Sidebar = () => {
  const { open, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, cartAmount, subTotal } = useContext(CartContext);

  return (
    <div
      className={`${
        open ? "right-0" : "-right-full"
      } fixed w-full bg-white top-0 h-full shadow-2xl md:w-[35vw] lg:max-w-[30vw] transition-all duration-300 z-40 px-2`}
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

export default Sidebar;
