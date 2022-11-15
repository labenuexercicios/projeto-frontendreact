import StyledHeader from "./styled.header";

const Header = () => {
    return(
        <StyledHeader>
            
                <h1 className="h1">Gravidade ZERO</h1>
                <input className="input" type="text" placeHolder="Buscar"/> 
            
        </StyledHeader>
    )
}

export default Header;