import { Link } from "react-router-dom";
import Cart from "./Cart";
import { SidebarContext } from "../contexts/SidebarContext";
import { useContext } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { open, handleClose } = useContext(SidebarContext);

  return (
    <div
      className={`${
        open ? "right-0" : "-right-full"
      } fixed w-full bg-white top-0 h-full shadow-2xl md:w-[35vw] lg:max-w-[30vw] transition-all duration-300 z-20 px-2`}
    >
      <div className="flex justify-between py-4 px-2 border-b">
        <p className="font-semibold text-sm uppercase">Shopping bag (0)</p>
        <IoMdArrowForward
          onClick={handleClose}
          className="text-xl cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Sidebar;
