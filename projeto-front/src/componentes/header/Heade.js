import { HeaderContainer } from "./Header.styled";
import carrinho from "../../assets/carrinho.png"
import logo from "../../assets/logo-projeto.png"
import iconVoltar from "../../assets/seta-esquerda.png"
<style> @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap'); </style>



function Header(props) {
    return (
        <HeaderContainer>

                <a onClick={props.alternaTelaProduto} >
                     <img src={logo}/>
                </a>

            

            <div className="grupo-botoes">
                <button onClick={props.alternaTelaProduto}>
                    <img src={iconVoltar} alt="cart icon" />
                </button>

                <button onClick={props.alternaTelaCarrinho}>
                    <img src={carrinho} alt="cart icon" />
                </button>
            </div>

        </HeaderContainer>
    )
}

export default Header