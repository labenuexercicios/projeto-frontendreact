import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Button,
  EyeIcon,
  EyeInvisibleIcon,
  FormLogin,
  Input,
  Label,
  Link,
  LoginContainer,
  LoginSection,
  Main,
} from "./styled";

const Login = ({
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
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleInputEmail = (event) => {
    setInputEmail(event.target.value);
  };

  const handleInputPassword = (event) => {
    setInputPassword(event.target.value);
  };

  const [showPassword, SetShowPassword] = useState("password");
  const handleShowPassword = (type) => {
    SetShowPassword(type);
  };

  return (
    <LoginContainer>
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
        <LoginSection>
          <h1>Iniciar sessão</h1>
          <FormLogin>
            <Label htmlFor="email">
              <p>Email:</p>
              <Input
                type="email"
                placeholder="seunome@email.com.br"
                id="email"
                required
                value={inputEmail}
                onChange={handleInputEmail}
              />
            </Label>
            <Label htmlFor="password">
              <p>Senha:</p>
              {showPassword === "password" ? (
                <EyeIcon onClick={() => handleShowPassword("text")} />
              ) : (
                <EyeInvisibleIcon
                  onClick={() => handleShowPassword("password")}
                />
              )}
              <Input
                type={showPassword}
                id="password"
                value={inputPassword}
                onChange={handleInputPassword}
                required
              />
            </Label>
            <Link href="#">Esqueceu a senha?</Link>
            <Button type="submit">Iniciar sessão</Button>
            <p>
              Não possui uma conta ainda?{" "}
              <Link href="#" onClick={() => handleScreen(5)}>
                Cadastre-se
              </Link>
            </p>
          </FormLogin>
        </LoginSection>
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
    </LoginContainer>
  );
};

export default Login;