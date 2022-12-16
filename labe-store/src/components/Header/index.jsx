import React from "react";
import { BoxButtons, BoxDivList, BoxList, BoxLogo, Buttons, ContainerHeader, DivContainer } from "./styled";

const Header = () => {
    return (
        <ContainerHeader>
            <DivContainer>
                <BoxLogo>
                    <Buttons><img src="" alt="logo" /></Buttons>
                </BoxLogo>
                <BoxDivList>
                    <BoxList>
                        <li><Buttons>???</Buttons></li>
                        <li><Buttons>???</Buttons></li>
                        <li><Buttons>???</Buttons></li>
                    </BoxList>
                </BoxDivList>
                <BoxButtons>
                    <BoxList>
                        <li><Buttons>???</Buttons></li>
                        <li><Buttons>???</Buttons></li>
                    </BoxList>
                </BoxButtons>
            </DivContainer>

        </ContainerHeader>
    )
}

export default Header
