import React from "react"
import { FooterStyle,FooterContainer1,FooterContainer2, FooterContainer3, UlFooter, ImageCard, ImageCardWhats,ImageCardFace,ImageCardInsta, AstroImage2 } from "./styled"
import master from "../Image/master.png"
import visa from "../Image/visa.png"
import whats from "../Image/Whats.png"
import insta from "../Image/Insta.png"
import face from "../Image/face.png"
import paypal from"../Image/paypal.png"
import cartoes from "../Image/Cartoes.png"






export function Footer (){

    return(
        <div>
            <FooterStyle>
            
            <FooterContainer1>
            <UlFooter><b>Atendimento</b></UlFooter>
            <UlFooter>Meus Pedidos</UlFooter>
            <UlFooter>Central de atendimento</UlFooter>
            
            </FooterContainer1>

            <FooterContainer2 >
            <UlFooter ><b>Formas de Pagamento</b></UlFooter>
            <ImageCard src={cartoes}/>
         


            </FooterContainer2>
          

            <FooterContainer3>
            
            <UlFooter><b>Siga-nos nas redes sociais</b></UlFooter>
           
            <ImageCardWhats src={whats} />   
            <ImageCardInsta src={insta}/>   
            <ImageCardFace src={face}/>



            </FooterContainer3>

            </FooterStyle>




        </div>



    )


}


