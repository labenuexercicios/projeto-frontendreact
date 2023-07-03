import React from "react";
import Card from "../components/Card";
import { useContext } from "react";
import { ProductContext } from "../hooks/useProductContext";

const Home = () => {
  const {
    handleName,
    searchCategory,
    setSearchCategory,
    filterCategory,
    priceMax,
    setPriceMax,
    priceMin,
    setPriceMin,
    searchProducts,
    setSearchProducts,
    order,
    setOrder,
    filteredProducts,
  } = useContext(ProductContext);

  return (
    <>
      <div
        id="home"
        className="flex flex-wrap gap-2 justify-center mt-14 mb-14"
      >
        <span className="text-xl text-gray-700 mt-1 font-bold">Filtros:</span>
        <select
          className="border-2 border-gray-300 text-gray-400 bg-white h-10 px-3 pr-24 rounded-lg text-sm focus:outline-none"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          name="filter-order"
          id="filtersOrder"
        >
          <option value="order">Ordem</option>
          <option value="asc">Crescente</option>
          <option value="desc">Decrescente</option>
        </select>

        <select
          className="border-2 border-gray-300 text-gray-400 bg-white h-10 px-3 pr-24 rounded-lg text-sm focus:outline-none"
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
          name="filter-category"
          id="filters"
        >
          <option value="Selecionar">Categoria</option>
          <option value="Astronaltas">Astronaltas</option>
          <option value="Carros">Carros</option>
          <option value="Monstros">Monstros</option>
          <option value="Planetas">Planetas</option>
          <option value="Robôs">Robôs</option>
          <option value="Foguetes">Foguetes</option>
        </select>
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-8 rounded-lg text-sm focus:outline-none"
          type="search"
          value={priceMin}
          onChange={(e) => setPriceMin(e.target.value)}
          placeholder="Valor mínimo"
        />

        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-8 rounded-lg text-sm focus:outline-none"
          type="search"
          value={priceMax}
          onChange={(e) => setPriceMax(e.target.value)}
          placeholder="Valor máximo"
        />
        <div className=" relative  text-gray-600">
          <input
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-8 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Pesquisar produto"
            value={searchProducts}
            onChange={(e) => setSearchProducts(e.target.value)}
          />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
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
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredProducts
          .filter((product) => {
            return product.price >= priceMin || priceMin === "";
          })
          .filter((product) => {
            return product.price <= priceMax || priceMax === "";
          })
          .filter(filterCategory)
          .filter(handleName)
          .map((product, index) => {
            return <Card product={product} key={index} />;
          })}
      </div>
    </>
  );
};

export default Home;
