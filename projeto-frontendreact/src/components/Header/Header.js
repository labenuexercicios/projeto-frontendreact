import {HeaderStyled, LogoStyled, LoginStyled, LogoBlackFridayStyled, DivHeader} from './styles'
import logo from './midia-header/8fe884105100727.5f71ebef2d0ee.jpg';
import background from './midia-header/estrela-ceu.webp';
import blackFriday from './midia-header/black-friday-2894130_1920.webp'
import login from './midia-header/download.png'

export const Header = (props) => {
    return(
        <HeaderStyled style={{ backgroundImage: `url(${background})` }}>
            <a href="#"><LogoStyled src={logo}/></a>
            <DivHeader>
                <p>Venha conhecer nossa</p><LogoBlackFridayStyled src={blackFriday}/><p>das <strong>galaxias!</strong></p>
            </DivHeader>
            <DivHeader>
                <p>Login  .</p> <button onClick={props.toggleToLogin}><LoginStyled src={login}/></button>
            </DivHeader>
        </HeaderStyled>
    )
}