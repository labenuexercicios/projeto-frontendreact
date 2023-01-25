import { FooterContainer } from "./Footer.Styled"
import gitHub from "../assets/icons8-github.svg"
import linkedin from "../assets/icons8-linkedin.svg"

function Footer() {

    return (
        <>
            <FooterContainer>

                <h2>Desenvolvido por Maikel Diulio</h2>

                <div>
                    <a href="https://www.linkedin.com/in/maikel-diulio-5a3a49212/" target="_blank" >
                        <img src={linkedin} />
                    </a>

                    <a href="https://github.com/MaikelDiulio" target="_blank" >
                        <img src={gitHub} />
                    </a>
                </div>


            </FooterContainer>
        </>
    )
}

export default Footer