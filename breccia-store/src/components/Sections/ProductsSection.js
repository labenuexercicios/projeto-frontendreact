import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { CartContext } from "../../contexts/CartContext";

const ProductsSection = () => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="container mx-auto">
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-sm mx-auto md:max-w-none md:mx-0 ">
        {products.map((product) => {
          return (
            <div>
              <div
                className=" w-full h-[300px] relative overflow-hidden group transition"
                key={product.id}
              >
                <div className="w-full h-full flex justify-center items-center">
                  <div classNa me="w-[200px]">
                    <img
                      className="max-h-[160px] group-hover:scale-110 transition-duration-300"
                      src={product.img}
                    />
                  </div>
                </div>
                <Link to={"/"}>
                  <button onClick={() => addToCart(product, product.id)}>
                    <BsPlus className=" absolute top-6 -right-11 group-hover:right-5 text-xl bg-black text-white opacity-0 group-hover:opacity-100 transition-all" />
                  </button>
                </Link>
              </div>
              <div className="flex flex-col items-center">
                <Link to={`/product/${product.id}`}>
                  <h2 className="uppercase">{product.name}</h2>
                </Link>
                <p className="font-semibold">${product.price}.90</p>
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
