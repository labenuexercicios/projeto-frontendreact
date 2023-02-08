import { IoMdClose, IoMdRemove, IoMdAdd } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { SidebarContext } from "../contexts/SidebarContext";

const CartProduct = ({ product }) => {
  const { removeProduct, plusAmount, menusAmount } = useContext(CartContext);
  const { name, id, img, price, amount, category } = product;
  const { handleClose } = useContext(SidebarContext);

  return (
    <div className="justify-between items-center flex gap-2 px-2 py-4 relative group">
      <div className="flex items-center gap-1">
        <img className="w-20" src={img} />
        <div className="flex flex-col gap-1">
          <Link to={`/product/${product.id}`}>
            <p
              onClick={handleClose}
              className="cursor-pointer font-semibold text-sm"
            >
              {name}
            </p>
          </Link>
          <p className="font-thin text-xs">{category}</p>
          <div className="flex items-center gap-3 pt-1">
            <IoMdRemove
              onClick={() => menusAmount(id)}
              className=" cursor-pointer text-xs"
            />
            <div className="text-xs">{amount}</div>
            <IoMdAdd
              onClick={() => {
                plusAmount(id);
              }}
              className="cursor-pointer text-xs"
            />
            <p className="text-xs">${price.toFixed(2)}</p>
          </div>
        </div>
      </div>
      <div>
        <p className="cursor-pointer text-sm">${(price * amount).toFixed(2)}</p>
        <IoMdClose
          onClick={() => {
            removeProduct(id);
          }}
          className="cursor-pointer absolute top-2 group-hover:right-2 -right-11  opacity-0 group-hover:opacity-100 transition-all text-white bg-black"
        />
      </div>
    </div>
  );
};

export default CartProduct;
