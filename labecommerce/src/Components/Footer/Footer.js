import React from "react";
import { FooterStyle, Base, SocialMedia } from "./footerStyle";
import {MdFacebook, MdWhatsapp} from 'react-icons/md';

const Footer = () =>{
    return(
    <>
     <FooterStyle>
     <help>
        <p>Atendimento</p>
        <p>Trocas e Devoluções</p>
     </help>
     {/* <pay>
        <p>Visa</p>
        <p>Master Card</p>
        <p>Elo</p>
     </pay> */}
     <SocialMedia>
         <p><MdFacebook size={28}/></p>
         <p><MdWhatsapp size={28}/></p>
     </SocialMedia>
     </FooterStyle>
            
     <Base>
         <p>Todos os direitos reservados © 2023</p><br/>
         <p>Desenvolvido por: Renata Santos</p>
     </Base>

    </>
    )

};

export default Footer