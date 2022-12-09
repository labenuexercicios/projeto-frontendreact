import { FooterStyle } from "./style"
import astrodev from '../../assets/icons/astrodev.svg'
import { GiBrazilFlag } from 'react-icons/gi'

export const Footer  = () => {
    return(
        <FooterStyle>
            <article>
                <img src={astrodev}/>
                <ul>
                    <a href="https://guilhermesquita.vercel.app/" target='_blank'><li>Sobre Mim</li></a>
                    <a href="https://www.linkedin.com/in/guilhermesquita/" target='_blank'><li>Contato</li></a>
                    <a href="https://github.com/" target="_blank"><li>Github</li></a>
                </ul>
                <article>
                    <GiBrazilFlag/>
                    portuguese
                </article>
            </article>
        </FooterStyle>
    )
}