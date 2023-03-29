import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Astronaut, CheckIcon, Container, LilacBox, Main } from "./styled";
import AstronautPurchased from "../../assets/imgs/logo.png";

const Purchased = ({
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
  return (
    <Container>
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
      <Main>
        <LilacBox>
          <CheckIcon />
          <h2>Compra Finalizada com Sucesso!</h2>

          <p>
            Parabéns! Sua compra foi finalizada com sucesso e em breve você poderá desbravar o Universo!
          </p>
          <Astronaut
            src={AstronautPurchased}
            alt="espaço"
          />
        </LilacBox>
      </Main>
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
    </Container>
  );
};

export default Purchased;