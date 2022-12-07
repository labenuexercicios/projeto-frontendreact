import { FooterDiv } from "./styled"
import imagemLinkedin from "../../imagem/linkedin.png"
import imagemGitHub from "../../imagem/github2.png"

export const Footer = () => {
    return(
      
        <FooterDiv>       

         <p>
            Feito por Aureana Santos.❤️ Todos os direitos reservados.
           
         
         <a href="https://www.linkedin.com/in/aureana-santos-a7091b21b"> <img src={imagemLinkedin} alt="LinkedIn img" /></a>
       
         <a href="https://github.com/Aureana"> <img src={imagemGitHub} alt="LinkedIn img" /></a>

         </p>
        </FooterDiv>
        
    )

} 
export default Footer