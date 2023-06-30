import React, { useState ,useContext} from "react";
// ICONS
import { BiMenuAltRight } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
// IMAGE
import logo from "../Header/Logo/logo.png";
import { ProductContext } from "../Hooks/useProductContext";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {name, setName} = useContext(ProductContext)



  const toogleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-white shadow-md p-2 w-full z-10 top-0">
        <div className="flex items-center text-whitem ml-3 ">
          <div>
            <span>
              <img
                src={logo}
                alt="Logo origami em forma de passário nas cores azul e vermelho"
                className="w-24 h-24"
              />
              <h1>STAR WARS</h1>
            </span>
          </div>
        </div>

        <div className="block lg:hidden">
          <button
            onClick={toogleNav}
            className="flex items-center px-3 py-2 rounded border border-gray-500"
          >
            <BiMenuAltRight size={20} />
          </button>
        </div>

        <div
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "" : "hidden"
            }`}
        >
       <ul className=" lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <div className="pt-2 relative mx-auto text-gray-600">
                <input 
                  className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                  type="search"
                  name="search"
                  placeholder="Search"
                  value={name}
                  onChange={(e)=> setName(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 mt-5 mr-4"
                >
                  <svg
                    className="text-gray-600 h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 56.966 56.966"
                    width="512px"
                    height="512px"
                  >
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                  </svg>
                </button>
              </div>
            </li>

            <li className="mr-3">
              <div className="inline-block text-gray-950 no-underline hover:text-gray-200 ease-in-out hover:text-underline py-2 px-4">
                Sobre-nós
              </div>
            </li>
            <li className="mr-3">
              <div className="inline-block text-gray-950 no-underline hover:text-gray-200 ease-in-out hover:text-underline py-2 px-4">
                Produtos
              </div>
            </li>
            <li className="mr-3">
              <div className="inline-block text-gray-950 no-underline hover:text-gray-200 ease-in-out hover:text-underline py-2 px-4">
                Contato
              </div>
            </li>
            <li className="mr-3">
              <div className="inline-block text-gray-950 no-underline hover:text-gray-200 ease-in-out hover:text-underline py-2 px-4">
                <BsCart size={20} />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;