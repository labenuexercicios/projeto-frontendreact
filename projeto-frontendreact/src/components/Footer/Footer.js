import {FooterStyled,
        ImagemInsta,
        ImagemLinkedin,
        ImagemGit} from './style'
import fundo from './midia-footer/estrela-ceu.webp';
import iconeInsta from "./midia-footer/Instagram_icon.png.webp"
import iconeLinkedin from "./midia-footer/linkedin.png"
import iconeGit from "./midia-footer/github.jpg"

export const Footer = () => {
return(
     <FooterStyled style={{ backgroundImage: `url(${fundo})` }}>
        Desenvolvido por Luiz Henrique Marinho
        <p>
            <a href={"https://www.instagram.com/luiz_marinho97/"}  target={"_blank"}><ImagemInsta
                    src={iconeInsta} /></a>
            <a href="https://www.linkedin.com/in/luiz-henrique-marinho-23456019b" target="_blank"><ImagemLinkedin
                    src={iconeLinkedin} /></a>
            <a href="https://github.com/LuizHenriqueMarinho" target="_blank"><ImagemGit
                    src={iconeGit} /></a>
        </p>
    </FooterStyled>
)
}