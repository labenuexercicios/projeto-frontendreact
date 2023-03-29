import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Button,
  Card,
  Container,
  Main,
  ProductImage,
  ProductInfos,
} from "./styled";
import { FiShoppingBag } from "react-icons/fi";

const ProductDetails = ({
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
  productDetail,
  addProductCart,
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
        <Card key={productDetail.key}>
          <ProductInfos>
            <h2>{productDetail.name}</h2>
            <h1>R$ {productDetail.value.toFixed(2).replace(".", ",")}</h1>
            <h4>
              Ou em 3x de{" "}
              {(productDetail.value / 3).toFixed(2).replace(".", ",")}
            </h4>
            <p>{productDetail.description}</p>
            <small>
              <strong>Tamanho:</strong> {productDetail.measure}
            </small>
            <small>
              <strong>Categoria:</strong> {productDetail.category}
            </small>
            <Button
              onClick={() => {
                addProductCart(productDetail, productDetail.id);
                setCartIsOpen("0");
              }}
            >
              <FiShoppingBag /> Adicionar
            </Button>
          </ProductInfos>
          <ProductImage
            src={productDetail.imageUrl}
            alt={productDetail.imageAlt}
          />
        </Card>
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

export default ProductDetails;