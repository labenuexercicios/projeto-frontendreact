import {MainHeader, Imagem} from "./styleHeader"
import cart from "../../assets/shopping-cart.svg"
import logo from "../../assets/astronaut-helmet-logo.png"
import logotitle from "../../assets/logo-title.jpg"
import heart from "../../assets/heart.svg"
import user from "../../assets/user.svg"


export default function Header(){

    return(
        <MainHeader>
            <div>
                <Imagem src={logo} alt="logo"/>   
                        
            </div>
            <div>
                <p> AstroDev E-Commerce</p>
            </div>
            <div>
                <img src={cart} alt="carrinho"/>
            </div>

        </MainHeader>
    )
}

