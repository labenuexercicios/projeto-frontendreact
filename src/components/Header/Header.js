import { HeaderContainer } from "./Header.styled"
import cartIcon from "../../Assets/carticon.png"
import backIcon from "../../Assets/backicon.png"

function Header(props) {
    return (
        <HeaderContainer>
            <a className="galaxy">
                G A L A X Y
            </a>

            <a className="store">
                S T O R E
            </a>


            <div className="button-group">
                <button onClick={props.changeToProductsScreen}>
                    <img src={backIcon} alt="backIcon" />
                </button>

                <button onClick={props.changeToCartScreen}>
                    <img src={cartIcon} alt="cartIcon" />
                </button>
            </div>

        </HeaderContainer>
    )
}

export default Header