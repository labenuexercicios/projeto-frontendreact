import {FooterContainer,
    DivParteCima,
    ImagemAstro,
    SobreContainer,
    TituloSobre,
    LinkSobre,
    EscritaLink,
    DivParteBaixo,
    EscritaBaixo,
} from './Footer.styled'

 function Footer(){
    return(
        <FooterContainer>
            <DivParteCima>
                <ImagemAstro/>
                <SobreContainer>
                    <TituloSobre></TituloSobre>
                    <EscritaLink></EscritaLink>
                    <EscritaLink></EscritaLink>
                    <EscritaLink></EscritaLink>
                </SobreContainer>
                <SobreContainer>
                    <TituloSobre></TituloSobre>
                    <EscritaLink></EscritaLink>
                    <EscritaLink></EscritaLink>
                    <EscritaLink></EscritaLink>
                </SobreContainer>
                <SobreContainer>
                    <TituloSobre></TituloSobre>
                    <EscritaLink></EscritaLink>
                    <EscritaLink></EscritaLink>
                    <EscritaLink></EscritaLink>
                </SobreContainer>

            </DivParteCima>
            <DivParteBaixo>
                <EscritaBaixo></EscritaBaixo>
                
            </DivParteBaixo>


        </FooterContainer>
        
        
    )

}
export default Footer