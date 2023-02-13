import imgLogo from "../../../assets/imagemLogo.png"
import { ImgLogoStyled } from "./LogoStyled"
import { GeneralContainerStyled, TitleStyled } from "./LogoStyled"

export default function Logo () {
    return (
        <GeneralContainerStyled>
            <br/>
            <TitleStyled>SPACE Y</TitleStyled>
                <ImgLogoStyled src={imgLogo}>
                </ImgLogoStyled>
                
                <TitleStyled>POP TOYS</TitleStyled>
        </GeneralContainerStyled>
    )
}