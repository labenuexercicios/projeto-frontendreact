import React from "react";
import { FooterStyle } from "./footerStyle";

const Footer = () =>{
    return(
    <>
     <FooterStyle>
     <help>
        <p>Atendimento</p>
        <p>Trocas e Devoluções</p>
     </help>
     <pay>
        <p>Visa</p>
        <p>Master Card</p>
        <p>Elo</p>
     </pay>
     <socialMedia>
         <p>instagram</p>
         <p>facebook</p>
         <p>whatssap</p>
     </socialMedia>
     
            <span>Todos os direitos reservados © 2023</span>
            <span>Desenvolvido por: Renata Santos</span>
     </FooterStyle>

    </>
    )

};

export default Footer