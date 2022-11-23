import StyledHeader from "./styled.header";

const Header = (props) => {
    
    const onChange = (e) =>{
        props.setBusca(e.target.value)
        
    }

    return(
        <StyledHeader>
            
                <h1 className="h1">Gravidade ZERO</h1>
                <input
                value={props.busca} 
                onChange={onChange}
                className="input" 
                type="search" 
                placeHolder="  Buscar"
                /> 
            
        </StyledHeader>
    )
}

export default Header;