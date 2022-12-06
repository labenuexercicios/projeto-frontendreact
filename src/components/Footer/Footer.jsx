import { FooterStyle } from "./style"
import astrodev from '../../assets/icons/astrodev.svg'

export const Footer  = () => {
    return(
        <FooterStyle>
            <article>
                <img src={astrodev}/>
                <ul>
                    <li>dcsc</li>
                    <li>dcsd</li>
                    <li>dscsd</li>
                </ul>
                <article>
                    portuguese
                </article>
            </article>
        </FooterStyle>
    )
}