import { DivInformation, DivRedes, DivPay, TitleRedes, TitlePay, Li, A, A1, DivStore, Ul, Img, H3, DivEnd, DivSecond, DivFirst } from "./fotterStyle";
import whats from "../../img/whatsapp.svg"
import yt from "../../img/youtube.svg"
import linkedin from "../../img/linkedin.svg"
import instagram from "../../img/instagram.svg"
import facebook from "../../img/facebook.svg"
import git from "../../img/square-github.svg"
import mastercard from "../../img/mastercard.svg"
import visa from "../../img/visa.svg"
import dinersclub from "../../img/dinersclub.svg"
import amex from "../../img/amex.svg"
import paypal from "../../img/paypal.svg"
import pix from "../../img/pix.svg"
import copyright from "../../img/copyright.svg"


export default function Footer (){
    return(
       <>
       <DivInformation>
            <DivStore>
                <ul>
                    <A href="#"><Li>Encontre uma loja LabStore perto de você</Li></A>
                    <A href="#"><Li>Cartão presente</Li></A>
                    <A href="#"><Li>Novidades</Li></A>
                    <A href="#"><Li>Trabalhe Conosco</Li></A>
                </ul>
            </DivStore>

            <div>
                <Ul> 
                    <A href="#"><Li>Dúvidas Gerais</Li></A>
                    <A href="#"><Li>Entregas</Li></A>
                    <A href="#"><Li>Produtos</Li></A>
                    <A href="#"><Li>Trocas e Devoluções</Li></A>
                    <A href="#"><Li>Corporativo</Li></A>
                    <A href="#"><Li>Fale Conosco</Li></A>
                </Ul>
            </div>

            <div>
                <TitleRedes>
                    <div>
                        <h3>Redes Sociais</h3>
                    </div>
                    <DivRedes>
                        
                            <a href="https://wa.me/+5511966397027">
                                <Img src={whats} width={30}/>
                            </a>

                            <a href="https://www.youtube.com/channel/UCEVHqh_dmg0RGwRpGMvlLow">
                                <Img src={yt} alt="youtube" title="youtube" width={40}/>    
                            </a>

                            <a href="https://www.linkedin.com/in/vini-gomes/">
                                <Img src={linkedin} alt="linkedin" title="linkedin" width={30}/>
                            </a>

                            <a href="https://www.instagram.com/vinni_gomes.dev/?hl=pt-br">
                                <Img src={instagram} alt="instagram" title="instagram" width={30}/>
                            </a>

                            <a href="https://www.facebook.com/vinicius.gomes.7545/">
                                <Img src={facebook} alt="facebook" title="facebook" width={35}/>
                            </a>

                            <a href="https://github.com/gomesvini">
                                <Img src={git} alt="git" title="git" width={30}/>
                            </a>
                        
                    </DivRedes>
                </TitleRedes>

                <TitlePay>
                    <h3>Formas de pagamento</h3>
                    <DivPay>                        
                        <img src={mastercard} alt="mastercard" title="mastercard" width={30}/>
                        <img src={visa} alt="visa" title="visa" width={30}/>
                        <img src={dinersclub} alt="dinersclub" title="dinersclub" width={30}/>
                        <img src={amex} alt="amex" title="amex" width={30}/>
                        <img src={paypal} alt="paypal" title="paypal" width={30}/>
                        <img src={pix} alt="pix" title="pix" width={30}/>
                        
                    </DivPay>
                </TitlePay>
            </div>
       </DivInformation>

       <DivEnd>   
            <DivFirst>
                <H3>Brasil</H3>
                <A1 href="#"><H3>Política de Privacidade</H3></A1>
                <A1 href="#"><H3>Termos de uso</H3></A1>    
            </DivFirst>

            <DivSecond>
                <H3><img src={copyright} width={10}/> 2023 - Desenvolvido por Vinícius Gomes. Todos os direitos reservados.</H3>
                <H3>CNPJ: 00.000.000/0000-00 - Rodovia Leste, S/N Km 000 - CEP 00000-000 - São Paulo/SP</H3>
            </DivSecond>
       </DivEnd>

       </>
    )
}