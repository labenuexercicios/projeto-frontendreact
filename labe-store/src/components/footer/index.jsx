import React from 'react'
import { BoxFooter, BoxMidia, BoxSocialMidia, BoxText } from './styled'
import { AiOutlineGithub, AiOutlineTwitter, AiFillInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs"


const Footer = () => {
    return (
        <BoxFooter>
            <BoxText>
                <h4>CRIADO POR MATHEUS MENDES</h4>
            </BoxText>
            <BoxMidia>
                <h4>Me siga nas redes socias</h4>
                <BoxSocialMidia>
                    <p><a href="https://www.instagram.com/matheusmendesreis/" target="blanck"><AiFillInstagram fontSize="30" /></a></p>
                    <p><a href="https://twitter.com/reisMatheusss" target="blanck"><AiOutlineTwitter fontSize="30" /></a></p>
                    <p><a href="https://www.facebook.com/Matheus.Mendes.51" target="blanck"><BsFacebook fontSize="30" /></a></p>
                    <p><a href="https://github.com/MathMendesReis" target="blanck"><AiOutlineGithub fontSize="30" /></a></p>
                    <p><a href="https://www.linkedin.com/in/matheus-mendes-4b2734245/"><AiOutlineLinkedin fontSize="30" /></a></p>

                </BoxSocialMidia>
            </BoxMidia>
        </BoxFooter>
    )
}

export default Footer
