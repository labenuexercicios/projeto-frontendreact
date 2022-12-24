import { BoxButtons, BoxDiv, BoxForm, Buttons, ButtonsTitle, InputProductsSearch, StyledHeader, Title } from "./styled";
import { BsFillCartFill } from "react-icons/bs";


const Header = ({ goCart, goHome, filterName }) => {

    return (
        <StyledHeader>
            <BoxDiv>
                <ButtonsTitle onClick={goHome}><Title>Labe Store</Title></ButtonsTitle>
            </BoxDiv>
            <BoxForm>
                <form >
                    <InputProductsSearch type="text" placeholder="Digite o nome do produto"
                        onChange={filterName}
                    />
                </form>
            </BoxForm>
            <BoxButtons>
                <Buttons onClick={goCart}><BsFillCartFill fontSize='25' /></Buttons>
            </BoxButtons>
        </StyledHeader>
    )
}

export default Header
