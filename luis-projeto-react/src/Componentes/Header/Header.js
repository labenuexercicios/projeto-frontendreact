import { Container } from "./styles";
import { NomeLoja } from "./styles";



function Header() {

    return (
        <div>
            <NomeLoja><h1>Labeloja</h1></NomeLoja>
            <Container>
                <div>Nome:</div>
                <input
                    type="text"
                    placeholder="Produto"
                />
                <div>Valor Mínimo:</div>
                <input
                    type="number"
                    placeholder="Valor Mínimo"
                />
                <div>Valor Máximo:</div>
                <input
                    type="number"
                    placeholder="Valor Máximo"
                />
            </Container>
        </div>
    );
}

export default Header;