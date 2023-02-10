import { FooterStyled, ElementPStyled, ImgLogoLabenu } from "./FooterStyled"

export default function Footer () {
    return (
        <FooterStyled>
            <ElementPStyled>Free Shipping on SPACE POP TOYS products from U$70*</ElementPStyled>
            <ElementPStyled>PROJETO:</ElementPStyled>
            <ImgLogoLabenu src={require(`../../assets/logoLabenu.png`)}/>
        </FooterStyled>
    )
} 