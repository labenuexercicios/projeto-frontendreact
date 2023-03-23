import { HeaderStyle, Input, Img, IconsHeader, Navbar, Quantity } from "./HeaderStyle"
import cartwhite from "../../Images/cartwhite.png"
import account from "../../Images/account2.png"
import logo from "../../Images/logo-light.png"

export default function Header(props) {

    return (
        <HeaderStyle >
            <Navbar>
                <Img
                    className="icon"
                    src={logo}
                    alt="home"
                    onClick={() => props.changeScreen(1)} />
                <Input
                    value={props.searchFilter}
                    onChange={(e) => props.setSearchFilter(e.target.value)}
                    placeholder={"Busque seu produto"}
                />
                <IconsHeader>
                    <Img
                        src={account}
                        alt="account-header"
                        width="32px"
                        onClick={() => props.changeScreen(3)} />
                    <Img
                        src={cartwhite}
                        alt="cart-header"
                        width="40px"
                        onClick={() => props.changeScreen(2)} />
                    <Quantity 
                    cartQuantity={props.cartQuantity}
                    type="button">{props.cartQuantity}</Quantity>
                </IconsHeader>

            </Navbar>
        </HeaderStyle>
    )

}