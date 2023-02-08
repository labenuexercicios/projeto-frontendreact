import { useContext, useState } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { FiSearch } from "react-icons/fi";
import ProductCard from "../ProductCard";

const ProductsSection = () => {
  const { products } = useContext(ProductContext);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  return (
    <div className="mx-auto container">
      <div className="flex flex-col items-center">
        <div className="pt-4 w-full  lg:flex lg:justify-center relative">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="z-20 w-full lg:w-[260px]  px-2 focus:outline-none border-b  "
            placeholder="Search"
          ></input>

          <FiSearch className="cursor-pointer absolute right-2 bottom-1 lg:sticky z-20" />
        </div>
        <div className="pt-4 text-sm flex items-center gap-1 ">
          <p>Select by:</p>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="focus:outline-none active:outline-none"
          >
            <option>price</option>
            <option>Cheap</option>
            <option>Expensive</option>
          </select>
        </div>
      </div>
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-sm mx-auto md:max-w-none md:mx-0 ">
        {products

          .filter((product) => {
            const isNameAndCategoryIncluded =
              product.category.toLowerCase().includes(search.toLowerCase()) ||
              product.name.toLowerCase().includes(search.toLowerCase());
            if (isNameAndCategoryIncluded) {
              return product;
            }
            if (!search) {
              return product;
            }
          })
          .sort((a, b) => {
            if (filter === "Cheap") {
              return a.price - b.price;
            }
            if (filter === "Expensive") {
              return b.price - a.price;
            }
          })
          .map((product) => {
            return <ProductCard product={product} />;
          })}
      </div>
    </div>
  );
};

export default ProductsSection;
