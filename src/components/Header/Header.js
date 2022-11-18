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
      <Logo className="img" src={Image} alt="imagem-logo" />

      <MenuCenter className="nav">
        <OptionsMenu>{props.menuBrinquedos}</OptionsMenu>
        <OptionsMenu>{props.menuAcessorios}</OptionsMenu>
      </MenuCenter>

      <DivRight className="div-a-direita">
        <BagImage src={Bag} />

        <InputBuscar
          className="input"
          type="text"
          placeholder="O que você esta buscando?"
          value={props.query}
          onChange={onChangeQuery}
        />
        {/* dentro do >< só algo que for aparecer para o usuario */}

        <BotaoBuscar className="button">Buscar</BotaoBuscar>
      </DivRight>
    </HeaderContainer>
  );
}

export default Header;
