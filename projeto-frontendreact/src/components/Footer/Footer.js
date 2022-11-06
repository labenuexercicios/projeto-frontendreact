import {FooterStyled, SocialNetwork, ImagemIcones} from './style'
//import fundo from './midia-footer/estrela-ceu.webp';
import iconeInsta from "./midia-footer/Instagram_icon.png.webp"
import iconeLinkedin from "./midia-footer/linkedin.png"
import iconeGit from "./midia-footer/github.jpg"

export const Footer = () => {
    return(
        <FooterStyled>
            <div>
                <p> 🚀 <strong>Galaxy Store - moda para todas as galáxias</strong> 🚀</p> <p> 🚀 <strong>Desenvolvido por Luiz Henrique Marinho</strong>🚀 </p>
            </div>
            <SocialNetwork>
                <ImagemIcones>
                    <a href={"https://www.instagram.com/luiz_marinho97/"}  target={"_blank"}><img src={iconeInsta} /></a>
                    <a href="https://www.linkedin.com/in/luiz-henrique-marinho-23456019b" target="_blank"><img src={iconeLinkedin} /></a>
                    <a href="https://github.com/LuizHenriqueMarinho" target="_blank"><img src={iconeGit} /></a>
                </ImagemIcones>
            </SocialNetwork>
        </FooterStyled>
    )
}