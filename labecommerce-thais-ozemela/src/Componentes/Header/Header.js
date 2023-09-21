import { ContainerHeader, HeaderText, ListHeader } from "./HeaderStyle";


function Header() {
    return (
        <ContainerHeader>
            <HeaderText>
                SIDERAL STAMP T-SHIRT
            </HeaderText>
            <ListHeader>
                <li><h3>Home</h3></li>
                <li><h3>Contato</h3></li>
                <li><h3>Sobre nós</h3></li>
            </ListHeader>
        </ContainerHeader>
    )
}

export default Header;