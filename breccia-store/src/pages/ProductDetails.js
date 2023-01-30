import ProductsSection from "../components/Sections/ProductsSection";
import { FiSearch } from "react-icons/fi";
import { useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import FilteredProducts from "../components/Sections/FilteredProducts";

const ProductDetails = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");
  const [screenSearch, setScreenSearch] = useState(false);

  const searchItem = () => {
    setResult(search);
    setScreenSearch(true);
  };

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
            onClick={searchItem}
            className="absolute right-2 top-[76px] lg:sticky  z-20"
          />
        </div>
      </div>
      {screenSearch ? (
        <FilteredProducts result={result} className="pt-12" />
      ) : (
        <ProductsSection className="pt-12" />
      )}
    </div>
  );
};

export default ProductDetails;
