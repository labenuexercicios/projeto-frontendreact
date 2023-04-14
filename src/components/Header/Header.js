import {
  HeaderContainer,
  MenuCenter,
  OptionsMenu,
  DivRight,
  BagImage,
  BotaoBuscar,
  InputBuscar,
  Logo,
} from "./styles";
import Image from "../../icons/mundo-da-lua.png";
import Bag from "../../icons/shopping-bag.png";


function Header(props) {

  const onChangeQuery = (e) => {
    props.setQuery(e.target.value);
  };

  return (
    <HeaderContainer>
      <Logo className="img" src={Image} alt="image-logo" />
      {/* 
      <MenuCenter className="nav">
        <OptionsMenu>Brinquedos</OptionsMenu>
        <OptionsMenu>Produtos Infantis</OptionsMenu>
      </MenuCenter> */}

      <DivRight className="div-right">
        <BagImage src={Bag} />

        <InputBuscar
          className="input"
          type="text"
          placeholder="O que você esta buscando?"
          value={props.query}
          onChange={onChangeQuery}
        />

        <BotaoBuscar className="button-search">Buscar</BotaoBuscar>
      </DivRight>
    </HeaderContainer>
  );
}

export default Header;
