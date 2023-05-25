import { NavStyle, Img, Div } from "./HeaderStyled"
import image1 from "../../assets/Images/homem-viajando-com-o-metro-da-cidade.jpg"
import image2 from "../../assets/Images/homem-de-baixo-angulo-jogando-padel.jpg"


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
        <Img src={image1}/>
        <Img src={image2}/>
        </Div>
        
        </>
    )
}