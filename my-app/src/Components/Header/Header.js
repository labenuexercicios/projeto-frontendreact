import {MainHeader, Imagem} from "./styleHeader"
import cart from "../../assets/shopping-cart.svg"
import logo from "../../assets/logo-header.png"
import logotitle from "../../assets/logo-title.jpg"
import heart from "../../assets/heart.svg"
import user from "../../assets/user.svg"


const Header = () => {

    return(
        <MainHeader>
            <div>
                
                        
            </div>
            <div>
            <img src={logotitle} alt="logo-header.png"/>   
            </div>
            <div>
                <img src={user} alt="user"/>
                <p>Hey,<br/>
                Faça o seu login ou cadastra-se</p>
            </div>
            <div>
                <img src={heart} alt="favoritos"/>
                <img src={cart} alt="carrinho"/>
            </div>

        </MainHeader>
    )
}

export default Header