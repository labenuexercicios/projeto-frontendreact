import { Container } from "./styled"
import logo from "../../assets/logo.jpg"

export const Header = (props) => {
    return (
        <Container>
            <div className="logo">
                <img src={logo} alt="foto Logo" />
            </div>
            <div className="header-things">
                <h2 onClick={() => props.setTela("home")}>Página Inicial</h2>
                <h2 onClick={() => props.setTela("car")}>Carrinho</h2>
            </div>
        </Container>
    )
}