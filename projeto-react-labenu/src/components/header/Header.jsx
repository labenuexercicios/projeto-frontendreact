import Logo from "./logo/Logo"
import { HeaderStyled } from "./HeaderStyled"
import TopMenu from "./topMenu/TopMenu"

export default function Header({cart, setCart, showCart, setShowCart }) {
    return (
        <HeaderStyled>
            <Logo />
            <TopMenu
                cart={cart}
                setCart={setCart}
                showCart={showCart}
                setShowCart={setShowCart}
            />

        </HeaderStyled>
    )
} 