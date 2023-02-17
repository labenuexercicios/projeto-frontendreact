import { Container } from "../container"
import MainFooter from "./main-footer"
import { ContentFooter, FooterContainer } from "./styled"
import SubFooter from "./sub-footer"

function Footer(){
    return(
        <FooterContainer>
            <Container>
            <ContentFooter>
            <MainFooter/>
            </ContentFooter>
            <hr/>
            <SubFooter/>
            </Container>
        </FooterContainer>
    )
}

export default Footer