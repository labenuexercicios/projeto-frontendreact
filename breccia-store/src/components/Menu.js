import { useContext } from "react";
import { MenuContext } from "../contexts/MenuContext";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Menu = () => {
  const { openMenu, handleCloseMenu } = useContext(MenuContext);
  return (
    <div
      className={`
     ${openMenu ? "right-0" : "-right-full"} 
        w-full h-full top-0
        fixed bg-white shadow-2xl  transition-all duration-300 z-20 px-2 flex py-24 justify-center`}
    >
      <AiOutlineClose
        onClick={handleCloseMenu}
        className="text-xl absolute top-4 right-4"
      />
      <div className="flex flex-col items-center ">
        <Link to="/">
          {" "}
          <div
            onClick={handleCloseMenu}
            className="uppercase text-xl border-b w-full text-center py-8 border-t"
          >
            Home
          </div>
        </Link>
        <div className="uppercase text-xl border-b w-full text-center py-8">
          About
        </div>
        <Link to="/product">
          <div
            onClick={handleCloseMenu}
            className="uppercase text-xl border-b w-full text-center py-8"
          >
            Products
          </div>
        </Link>
        <div className="uppercase text-xl border-b w-full text-center py-8">
          Contact
        </div>
      </div>
    </div>
  );
};

export default Menu;
