import { NavStyle, Img, Img2, Div, NavBackground } from "./HeaderStyled"
import image1 from "../../assets/Images/mulher-pensativa-de-cabelo-encaracolado.jpg"
import image2 from "../../assets/Images/retrato-analogico-de-homem-bonito-posando-artisticamente-ao-ar-livre.jpg"

export const Header = ({changeScreen})=>{
const showCart = () => { changeScreen("Cart")}
const showHomepage = () => { changeScreen("Homepage")}

    return(
        <>
        <NavStyle>
        <button onClick={showHomepage}>Space Collection</button>
        <button>Feminino</button>
        <button>Masculino</button>
        <button>Acessórios</button>
        <button>Pesquisar</button>
        <button>Login</button>
        <button onClick={showCart}>Carrinho</button>
        </NavStyle>
        <Div>
        <Div>
        <Img src={image1}/>
        </Div>
        <Div>
        <Img2 src={image2}/>
        </Div>
         </Div>
         <NavBackground/><NavBackground/>
        </>
    )
}