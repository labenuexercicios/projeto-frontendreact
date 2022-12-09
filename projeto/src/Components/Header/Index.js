import {
  HeaderContainer,
  NameContainer,
  CartContainerButton,
  HeaderWrapper,
  InputContainer,
  Input,
  SearchButton,
  ButtonImage,
  CartImg,
  Note,
} from "./Styled";
import cartimage from "./assets/Cart-image.png";
import buscarImg from "./assets/buscar.png";
import { useState } from "react";
import { Cart } from "./Cart/Cart";

export const Header = (props) => {
  const { setQuerry } = props;
  const [searchBar, setSearchBar] = useState("");
  const search = () => {
    setQuerry(searchBar);
  };
  const [cartHiden, setCartHiden] = useState(false)
  const [cartVisible, setCartVisible] = useState(false);
  const totalItens = props.cart.reduce((acc, product) => (product.quantity) + acc,0)

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <NameContainer>
          <p>SpaceLip Store</p>
        </NameContainer>
        <InputContainer>
          <Input
            type="text"
            placeholder="O que você buasca?"
            value={searchBar}
            onChange={(e) => {
              setSearchBar(e.target.value);
            }}
          />
          <SearchButton
            onClick={() => {
              search();
            }}
          >
            <ButtonImage src={buscarImg} />
          </SearchButton>
        </InputContainer>
        <CartContainerButton
          onClick={() => {
            setCartVisible(true);
            setCartHiden(true)
          }}
        >
          {cartVisible ? (
            <Cart
              setCartVisible={setCartVisible}
              cart={props.cart}
              cartVisible={cartVisible}
              deleteItem={props.deleteItem}
              setCartHiden={setCartHiden}
              clearAllCart={props.clearAllCart}
              cartQuantity={props.cartQuantity}
            />
          ) : null}
          {totalItens>=1?(
          <Note>
            {totalItens}
          </Note>):null}
          <CartImg src={cartimage} />
        </CartContainerButton>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
