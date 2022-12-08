import { HeaderContainer } from "./Header.styled"
import carrinho from "../../assets/carrinho.svg"




function Header(props) {

  
  return (
    <HeaderContainer >
      <a>
        Loja da Fran
      </a>

  

      <div className="grupoBotao">

        <button onClick={props.alternarTelaProduto}>imagen produto</button>

        <button onClick={props.alternarTelaCarrinho}>
          <img src={carrinho} alt="carrinho icon" />
        </button>

      </div>

    </HeaderContainer>
  )
}

export default Header;
