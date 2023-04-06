import React from "react";
import Nav from "../Nav";
import NavMobile from "../NavMobile";
import { HeaderContainer } from "./styled";

const Header = ({
  products,
  handleArrayProducts,
  handleScreen,
  handleTitleCategory,
  rocketsCategory,
  spaceshipsCategory,
  shuttlesCategory,
  search,
  setSearch,
  handleSearch,
  setLowestPrice,
  setBiggestPrice,
  setOrdination,
  setCartIsOpen,
  itemAmount,
  setMenuMobileIsOpen,
}) => {
  const filteredProductsBySearch = products.filter((product) => {
    return product.name.toLowerCase().includes(search.toLowerCase());
  });

  const searchByEnter = (e) => {
    if (e.key === "Enter") {
      handleArrayProducts(filteredProductsBySearch);
      handleTitleCategory("Resultado da pesquisa");
      handleScreen(2);
      setSearch("");
      setLowestPrice(0);
      setBiggestPrice(10000);
      setOrdination("");
    }
  };
  return (
    <HeaderContainer>
      <Nav
        products={products}
        handleArrayProducts={handleArrayProducts}
        handleScreen={handleScreen}
        handleTitleCategory={handleTitleCategory}
        rocketsCategory={rocketsCategory}
        spaceshipsCategory={spaceshipsCategory}
        shuttlesCategory={shuttlesCategory}
        search={search}
        filteredProductsBySearch={filteredProductsBySearch}
        setSearch={setSearch}
        handleSearch={handleSearch}
        searchByEnter={searchByEnter}
        setLowestPrice={setLowestPrice}
        setBiggestPrice={setBiggestPrice}
        setOrdination={setOrdination}
        setCartIsOpen={setCartIsOpen}
        itemAmount={itemAmount}
      />
      <NavMobile
        products={products}
        handleArrayProducts={handleArrayProducts}
        handleScreen={handleScreen}
        handleTitleCategory={handleTitleCategory}
        search={search}
        filteredProductsBySearch={filteredProductsBySearch}
        setSearch={setSearch}
        handleSearch={handleSearch}
        searchByEnter={searchByEnter}
        setLowestPrice={setLowestPrice}
        setBiggestPrice={setBiggestPrice}
        setOrdination={setOrdination}
        setCartIsOpen={setCartIsOpen}
        itemAmount={itemAmount}
        setMenuMobileIsOpen={setMenuMobileIsOpen}
      />
    </HeaderContainer>
  );
};

export default Header;