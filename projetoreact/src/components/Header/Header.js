import { HeaderContainer } from "./Header.styled"
import carrinho from "../../assets/carrinho.svg"
import lupa from "../../assets/lupa.svg"

function Header(props) {
  return (
    <HeaderContainer >
      <a>
        Loja da Fran
      </a>

      <div>

        <input placeholder="Search" />

        <button>
          <img src={lupa} alt="lupa icon" />
        </button>

      </div>

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
