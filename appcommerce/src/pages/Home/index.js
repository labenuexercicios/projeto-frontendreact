import React from "react";
import { HomeContainer } from "./styled";
import { Slideshow } from "../../components/SlideShow/SlideShow";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductsContainer from "../../components/ProductsContainer";

const Home = ({
  products,
  handleArrayProducts,
  productsRender,
  handleScreen,
  titleCategory,
  handleTitleCategory,
  rocketsCategory,
  spaceshipsCategory,
  shuttlesCategory,
  search,
  setSearch,
  handleSearch,
  lowestPrice,
  setLowestPrice,
  biggestPrice,
  setBiggestPrice,
  ordination,
  setOrdination,
  newArrayProducts,
  setCartIsOpen,
  itemAmount,
  setMenuMobileIsOpen,
}) => {
  return (
    <HomeContainer>
      <Header
        products={products}
        handleArrayProducts={handleArrayProducts}
        handleScreen={handleScreen}
        handleTitleCategory={handleTitleCategory}
        rocketsCategory={rocketsCategory}
        spaceshipsCategory={spaceshipsCategory}
        shuttlesCategory={shuttlesCategory}
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        setLowestPrice={setLowestPrice}
        setBiggestPrice={setBiggestPrice}
        setOrdination={setOrdination}
        setCartIsOpen={setCartIsOpen}
        itemAmount={itemAmount}
        setMenuMobileIsOpen={setMenuMobileIsOpen}
      />
      <Slideshow />
      <ProductsContainer
        productsRender={productsRender}
        titleCategory={titleCategory}
        lowestPrice={lowestPrice}
        setLowestPrice={setLowestPrice}
        biggestPrice={biggestPrice}
        setBiggestPrice={setBiggestPrice}
        ordination={ordination}
        setOrdination={setOrdination}
        newArrayProducts={newArrayProducts}
      />
      <Footer
        handleArrayProducts={handleArrayProducts}
        handleScreen={handleScreen}
        handleTitleCategory={handleTitleCategory}
        rocketsCategory={rocketsCategory}
        spaceshipsCategory={spaceshipsCategory}
        shuttlesCategory={shuttlesCategory}
        setLowestPrice={setLowestPrice}
        setBiggestPrice={setBiggestPrice}
        setOrdination={setOrdination}
      />
    </HomeContainer>
  );
};

export default Home;