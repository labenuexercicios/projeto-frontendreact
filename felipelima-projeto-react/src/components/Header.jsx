import React, { useContext, useState } from "react";
import logo from "../utils/Logo.png";
import { BiMenuAltRight } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { ProductContext } from "../hooks/useProductContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toogleNav = () => {
    setIsOpen(!isOpen);
  };

  const { searchProducts, setSearchProducts } = useContext(ProductContext);

  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-silver shadow-md p-2 w-full z-10 top-0">
        <div className="flex items-center text-black ml-3 ">
          <div>
            <span>
              <img
                src={logo}
                alt="Logotipo de um boneco espacial"
                className="w-24np h-24"
              />
            </span>
          </div>
        </div>

        <div className="block lg:hidden">
          <button
            onClick={toogleNav}
            className="flex items-center px-3 py-2 rounded border border-black"
          >
            <BiMenuAltRight className="text-black" size={20} />
          </button>
        </div>

        <div
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? "" : "hidden"
          }`}
        >
          <ul className=" lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a
                href="#footer"
                className="inline-block text-black no-underline hover:text-gray-700 ease-in-out hover:text-underline py-2 px-4 cursor-pointer text-lg"
              >
                Sobre-nós
              </a>
            </li>
            <li className="mr-3">
              <a
                href="#home"
                className="inline-block text-black no-underline hover:text-gray-700 ease-in-out hover:text-underline py-2 px-4 cursor-pointer text-lg"
                src="./Card.jsx"
              >
                Produtos
              </a>
            </li>
            <li className="mr-3">
              <a
                href="#footer"
                className="inline-block text-black no-underline hover:text-gray-700 ease-in-out hover:text-underline py-2 px-4 cursor-pointer text-lg"
              >
                Contato
              </a>
            </li>
            <li className="mr-3">
              <div className="inline-block text-black no-underline hover:text-gray-700 ease-in-out hover:text-underline py-2 px-4 cursor-pointer text-xl">
                <BsCart size={24} />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
