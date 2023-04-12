import { HeaderContainer } from "./Header.styled"
import carrinho from "../../assets/carrinho.svg"
import logo from "../../assets/logoecommerce.png"





function Header(props) {

  
  return (
    <HeaderContainer >

      
    
        <img className="logo" src= {logo}/>
        <h1 className="nomeLogo">STAR SPACE TOYS</h1>
      

  

      <div className="grupoBotao">

        <button onClick={props.alternarTelaProduto}>HOME</button>

        <button onClick={props.alternarTelaCarrinho}>
          <img className="img.Carrinho" src={carrinho} alt="carrinho icon" />
        </button>

      </div>

    </HeaderContainer>
  )
}

export default Header;
