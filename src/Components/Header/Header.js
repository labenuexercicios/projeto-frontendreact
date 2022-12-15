import { HeaderContainer } from "./Header.styled"
import lupIcon from "../../assets/Lup.svg"
import cartIcon from "../../assets/Cart.png"
import SpaceTrip from "../../assets/SpaceTrip.svg"

function Header(props) {
    return (
        <HeaderContainer>
            <section>
                <button
                    className="ButtonSpaceTrip" onClick={props.goToProductsScreen} alt="Space Trips">
                    <img className="LogoSpaceTrip" src={SpaceTrip} alt="Logo" />
                </button>
            </section>
            <h1>Space Trip</h1>
            <div className="ButtonContainer">
                <div className="placeholderContainer" >
                    <input className="placeholderHeader" placeholder="Pesquisar" />
                    <button className="lupIconContainer">
                        <img className="lupIcon" src={lupIcon} alt="Lup" />
                    </button>
                </div>
          
            <button className="cartIconContainer" onClick={props.goToCartScreen}>
                <img className="cartIcon" src={cartIcon} alt="Cart icon" />
            </button>
              </div>
        </HeaderContainer>
    );
}

export default Header;