import React from "react";
import { FooterStyle, Base, SocialMedia,Help } from "./footerStyle";
import {MdFacebook, MdWhatsapp} from 'react-icons/md';

const Footer = () =>{
    return(
    <>
     <FooterStyle>
     <Help>
        <Help href="https://www.google.com" target="_blank" rel="noopener noreferrer">Atendimento</Help>
        <Help href="https://www.google.com" target="_blank" rel="noopener noreferrer">Trocas e Devoluções</Help>
     </Help>
     {/* <pay>
        <p>Visa</p>
        <p>Master Card</p>
        <p>Elo</p>
     </pay> */}
     <SocialMedia> 
         <SocialMedia href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" ><MdFacebook  size={28}/></SocialMedia>
         <SocialMedia href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" ><MdWhatsapp size={28}/></SocialMedia>
     </SocialMedia>
     </FooterStyle>
            
     <Base>
         <p>Todos os direitos reservados © 2023</p>
         <p>Desenvolvido por: Renata Santos</p>
     </Base>

    </>
    )

};

export default Footer