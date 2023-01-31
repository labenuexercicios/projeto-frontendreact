import { HeaderContainer } from "./Header.styled"
import logo from "../../logo/gameboy.png"
import lupaIcone from "../../icones/lupa.svg"
import carrinhoIcone from "../../icones/carrinho.png"
import gamer from "../../icones/gamer.png"
import ouvidoriaIcone from "../../icones/ouvidoria.png"

function Header(props) {

  const {
    paginaCarrinho, 
    paginaProdutos, 
    paginaContato,
    itensNoCarrinho,
    filtraTexto,
    onChangeFiltraTexto,
  } = props
  console.log(props)

    return (
      <HeaderContainer>
        
    {/* LOGO */} 
    <div className="logo">
   <img src={logo} width="150px" alt="Logo Gameplay" />
   </div>

   
   <div>
    <input className="pesquisar" 
    placeholder="Pesquisar"
    value={filtraTexto}  
    onChange={onChangeFiltraTexto} />

   

    
    <div className="button-lupa">
    <button>
        <img src={lupaIcone} width="30px" alt="Lupa Icone"/>
    </button>
    </div>
    </div>

    <div className="button-grupo">
        <button onClick={paginaProdutos}>
        <img src={gamer} width="40px" alt="gamer" />
        </button>

        <button onClick={paginaCarrinho} className="botao-carrinho">
        <img src={carrinhoIcone} width="40px" alt="Carrinho Icone" />
        
        {/* só irá mostrar o número de itens no carrinho se for maior que 0 */}
        <span className="itens-carrinho">{itensNoCarrinho > 0 && itensNoCarrinho}</span>

        </button>

        <button onClick={paginaContato}>
        <img src={ouvidoriaIcone} width="40px" alt="Carrinho Icone" />
        </button>
    </div>

      </HeaderContainer>
    );
  }
  
  export default Header;
  