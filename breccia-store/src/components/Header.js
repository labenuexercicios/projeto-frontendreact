import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";

const Header = () => {
  const { open, setOpen } = useContext(SidebarContext);

  return (
    <div className="sticky top-0 bg-white z-20">
      <div className="flex px-4 py-2 justify-between border-b pb-1">
        <div className="flex flex-col items-center">
          <p className="uppercase font-bold text-3xl">Breccia</p>
          <p className="uppercase text-xs">s t o r e</p>
        </div>

        <div className="flex items-center justify-center gap-3">
          <div
            onClick={() => {
              setOpen(!open);
            }}
            className="cursor-pointer"
          >
            <AiOutlineShoppingCart className="text-xl font-bold" />
          </div>

          <a
            href="#"
            className=" flex items-center justify-center uppercase gap-1"
          >
            <AiOutlineMenu className="text-2xl font-bold" />{" "}
            <span className="text-xs">Menu</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
