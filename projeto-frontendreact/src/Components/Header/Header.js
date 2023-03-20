import { HeaderStyle, Input, Img, IconsHeader, Navbar, Quantity } from "./HeaderStyle"
import cartwhite from "../../images/cartwhite.png"
import account from "../../images/account2.png"
import logo from "../../images/logo-light.png"

export default function Header(props) {

    return (
        <HeaderStyle >
            <Navbar>
                <Img
                    className="icon"
                    src={logo}
                    alt="home"
                    width="130px"
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
                        width="27px"
                        onClick={() => props.changeScreen(3)} />
                    <Img
                        src={cartwhite}
                        alt="cart-header"
                        width="32px"
                        onClick={() => props.changeScreen(2)} />
                    <Quantity 
                    cartQuantity={props.cartQuantity}
                    type="button">{props.cartQuantity}</Quantity>
                </IconsHeader>

            </Navbar>
        </HeaderStyle>
    )

}