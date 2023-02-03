import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { MenuContext } from "../contexts/MenuContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { open, setOpen } = useContext(SidebarContext);
  const { openMenu, setOpenMenu } = useContext(MenuContext);
  const { cartAmount, cart } = useContext(CartContext);

  return (
    <div className="sticky top-0 bg-white z-30">
      <div className="flex px-4 py-2 justify-between border-b pb-1">
        <Link to="/">
          <div className="flex flex-col items-center">
            <p className="uppercase font-bold text-3xl">Breccia</p>
            <p className="uppercase text-xs">s t o r e</p>
          </div>
        </Link>

        <div className="lg:flex lg:gap-12 lg:items-center lg:pr-36 hidden">
          <Link to="/">
            <p className="cursor-pointer uppercase text-sm">home</p>
          </Link>
          <p className="cursor-pointer uppercase text-sm">about</p>
          <Link to="/product">
            <p className="cursor-pointer uppercase text-sm">products</p>
          </Link>
          <p className="cursor-pointer uppercase text-sm">contact</p>
        </div>

        <div className="flex items-center justify-center gap-3">
          <div
            onClick={() => {
              setOpen(!open);
            }}
            className="flex items-center gap-1 cursor-pointer"
          >
            <AiOutlineShoppingCart className="text-xl font-bold" />{" "}
            <span className="text-white bg-black rounded-full px-[6px] text-xs font-semibold">
              {cartAmount(cart)}
            </span>
          </div>

          <div
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
            className=" lg:hidden cursor-pointer flex items-center justify-center uppercase gap-1"
          >
            <AiOutlineMenu className=" text-2xl font-bold" />{" "}
            <span className="text-xs">Menu</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
