import { useContext, useState } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { CartContext } from "../../contexts/CartContext";
import { FiSearch } from "react-icons/fi";

const ProductsSection = () => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("");

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center">
        <div className="pt-4 w-screen  lg:flex lg:justify-center">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="z-20 w-full lg:w-[260px] relative px-2 focus:outline-none border-b  "
            placeholder="Buscar"
          ></input>

          <FiSearch className="cursor-pointer absolute right-2 -bottom-[44px] lg:sticky z-20" />
        </div>
        <div className="pt-4 text-sm flex items-center gap-1 ">
          <p>Select by:</p>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="focus:outline-none active:outline-none"
          >
            <option>Order</option>
            <option>Cheap</option>
            <option>Expensive</option>
          </select>
        </div>
      </div>
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-sm mx-auto md:max-w-none md:mx-0 ">
        {products
          .sort((a, b) => {
            if (filter === "Cheap") {
              return a.price - b.price;
            } else if (filter === "Expensive") {
              return b.price - a.price;
            } else if (filter === "Order") {
              return a, b;
            }
          })
          .filter((product) => {
            if (
              product.category.toLowerCase().includes(search.toLowerCase()) ||
              product.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return product;
            } else if (!search) {
              return product;
            }
          })
          .map((product) => {
            return (
              <div key={product.id}>
                <div className=" w-full h-[300px] relative overflow-hidden group transition">
                  <div className="w-full h-full flex justify-center items-center">
                    <div className="flex items-center justify-center w-[200px]">
                      <img
                        className="max-h-[160px] group-hover:scale-110 transition-duration-300"
                        src={product.img}
                      />
                    </div>
                  </div>

                  <button onClick={() => addToCart(product, product.id)}>
                    <BsPlus className=" absolute top-6 -right-11 group-hover:right-5 text-xl bg-black text-white opacity-0 group-hover:opacity-100 transition-all" />
                  </button>
                </div>
                <div className="flex flex-col items-center">
                  <Link to={`/product/${product.id}`}>
                    <h2 className="uppercase">{product.name}</h2>
                  </Link>
                  <p className="font-semibold">${product.price.toFixed(2)}</p>
                  <p className="font-thin text-sm">{product.category}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductsSection;
