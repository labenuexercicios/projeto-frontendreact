import React from "react";
import { Container } from "./style";

const Footer = () => {
    return (

        <Container>
            <div className="footer-dados">
                <div className="footer-introducao">
                    <img />
                    <br />
                </div>
                <div className="footer-contatos">
                    <p><h3>Fale Conosco:</h3></p><br />
                    <p><b>Telefone de contato</b></p>
                    <p>(24)98826-9179
                    </p>
                    <br />
                    <p><b>rafaelmartinsmachado25@gmail.com</b></p>
                    <br />
                    <p>Qualquer duvida é só chamar!</p>
                    <br />
                </div>
            </div>
            <div className="footer-rafael">
                <div>
                    <a href="https://github.com/RafaelMachado1" >https://github.com/RafaelMachado1"</a>
                </div>
                <div>

                    <a href="https://www.linkedin.com/in/rafael-m-machado-95305688/" >https://www.linkedin.com/in/rafael-m-machado-95305688/</a>
                </div>
            </div>
        </Container>
    )
}

export default Footer