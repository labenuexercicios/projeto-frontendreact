import { Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
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
};

export default ProductCard;
