import { useContext } from "react";
import { useCartContext } from "../hooks/useCartContext";
import React from "react";
import { MdClose } from "react-icons/md";

const CartItem = ({ item }) => {
  const { id, name, image, price, amount } = item;
  const { removeCart, increaseAmount, decreaseAmount } = useContext(useCartContext);
  return (
    <div className="flex gap-x-4 py-2 lg:border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        
        <img src={image} alt="Imagem do produto" className="max-w-[70px]" />

        <div className="flex gap-3 items-center">
          <div className="w-6 h-6 bg-black text-white flex items-center justify-center flex-col">
            <span onClick={() => increaseAmount(id)} className="m-auto cursor-pointer">+</span>
          </div>
          <div onClick={() => decreaseAmount(id)} className="w-6 h-6 bg-black text-white flex items-center justify-center flex-col">
            <span className="m-auto cursor-pointer">-</span>
          </div>
        </div>

        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <div className="text-sm uppercase max-w-[200px] hover:underline">
              {name} Quantidade: {amount}
            </div>

            <div className="text-xl cursor-pointer color">
              <MdClose
                className="hover:text-red-600 transition"
                onClick={() => removeCart(id)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
