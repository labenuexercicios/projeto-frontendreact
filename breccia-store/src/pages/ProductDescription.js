import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";
import { useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProductDescription = () => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();

  const product = products.find((item) => {
    if (item.id == id) {
      return item;
    }
  });

  return (
    <div>
      <Link to="/product">
        <p className="cursor-pointer flex gap-2 items-center text-sm uppercase px-10 py-4">
          <BsArrowLeft />
          All products
        </p>
      </Link>

      <div className="w-full py-24 items-center justify-center flex ">
        <div className="justify-center items-center flex flex-col gap-2 max-w-3xl lg:flex-row">
          <img className="max-w-[320px]" src={product.img} />
          <div className="px-10 flex flex-col gap-2">
            <p className="font-bold text-2xl">{product.name}</p>
            <p className="font-light text-sm">{product.category}</p>
            <p className="text-sm ">{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
            <button
              className=" active:bg-black hover:bg-gray-800 p-2 my-4 text-sm uppercase bg-black text-white"
              onClick={() => addToCart(product, product.id)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
