import { useContext } from "react";
import { SideBarContext } from "../hooks/SideBarContext";
import { useCartContext } from "../hooks/useCartContext";
import CartItem from "./cartItem";

import { MdClose } from "react-icons/md";
import { BsFillTrashFill } from "react-icons/bs";

const SideBar = () => {
  const { isOpen, handleClose } = useContext(SideBarContext);
  const { cart, clearCart, total, amount, finishCart} = useContext(useCartContext);
  return (
    <>
      <div
        className={`${
          isOpen ? "right-0" : "-right-full"
        } w-full bg-white fixed top-0 h-full shadow-xl md:w-[35vw] xl:max-w-[45vw] transition-all duration-300 z-20 lg:px-[65px] `}
      >
        <div className="flex items-center justify-between border-b">
          <div className="text-sm font-semibold">Suas compras ({amount})</div>
          <div
            className="cursor-pointer w-8 h-8 flex justify-center items-center"
            onClick={handleClose}
          >
            <MdClose className="text-2xl" />
          </div>
        </div>

        <div className="flex flex-col gap-y-2 h-[500px] lg:h-[540px] overflow-y-auto overflow-x-hidden border-b">
          {cart.map((item, index) => {
            return <CartItem item={item} key={index} />;
          })}
        </div>
        <div className="flex flex-col gap-y-3 py-4 mt-4">
          <div className="flex w-full justify-between items-center">
            <div className="uppercase font-semibold">
              <span>Total: R${Number(total).toFixed(2)}</span>
            </div>
            <div
              className="cursor-pointer w-8 h-8 flex justify-center items-center"
              onClick={clearCart}
            >
              <BsFillTrashFill />
            </div>
          </div>

          <div className="bg-gray-400 flex p-4 justify-center items-center text-primary w-full">
            <button onClick={finishCart} >Finalizar compras</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;