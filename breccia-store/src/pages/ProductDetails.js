import ProductsSection from "../components/Sections/ProductsSection";
import { FiSearch } from "react-icons/fi";
import { useContext, useState } from "react";
import FilteredProducts from "../components/Sections/FilteredProducts";
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");
  const [screenSearch, setScreenSearch] = useState(false);
  const [filter, setFilter] = useState("");
  const { products } = useContext(ProductContext);

  const handleSearch = () => {
    setResult(search);
    setScreenSearch(true);
  };

  const handleProductsSection = () => {
    setScreenSearch(false);
  };

  const filterProducts = (products) => {
    if (filter === "Cheap") {
      return products.sort((a, b) => a.price - b.price);
    } else if (filter === "Expensive") {
      return products.sort((a, b) => b.price - a.price);
    } else {
      return products;
    }
  };

  filterProducts(products);

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="w-screen  lg:flex lg:justify-center">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="z-20 w-full lg:w-[260px] relative px-2 focus:outline-none border-b py-2 "
            placeholder="Buscar"
          ></input>

          <FiSearch
            onClick={handleSearch}
            className="absolute right-2 top-[76px] lg:sticky  z-20"
          />
        </div>
        <div className="pt-4 text-sm flex items-center gap-1 ">
          <p>Select by:</p>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="focus:outline-none active:outline-none"
          >
            <option defaultValue=""></option>
            <option>Cheap</option>
            <option>Expensive</option>
          </select>
        </div>
      </div>
      {screenSearch ? (
        <FilteredProducts
          result={result}
          handleProductsSection={handleProductsSection}
          className="pt-12"
        />
      ) : (
        <ProductsSection className="pt-12" />
      )}
    </div>
  );
};

export default ProductDetails;
