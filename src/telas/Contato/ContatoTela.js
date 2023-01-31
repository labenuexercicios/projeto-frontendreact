import styled from "styled-components"
import { Main } from "./ContatoTela.styled"
import game from "../../logo/gameboy.png"
import linkedin from "../../icones/linkedin.png"
import github from "../../icones/github.png"
import email from "../../icones/email.png"



function ContatoTela (props) {
    return (
            <Main>
            <section>
            <div className="contato">
            <h1>Contato </h1>
            </div>
           
            <div className="compra">
             <p>Projeto feito por: Laion Pereira</p>
            <a>Turma: Conway</a>
            </div>


            <div class="sociais">
            <div class="icon-email">
             <a href="mailto:kingslaion@gmail.com" target="_blank">
             <div class="box">
             <img src={email} width="50px" alt="email" />
            <p>E-mail</p>
             </div>
             </a>
             <a href="mailto:kingslaion@gmail.com" target="_blank">
                </a>
              
        </div>
              <div class="icon-github">
                <a href="https://github.com/laionkings" target="_blank">
               <div class="box">
              <img src={github} width="90px" alt="github" />                                        
           <p>Github</p>
              </div>
             </a>
            <a href="https://github.com/laionkings" target="_blank">
          </a>

          </div>


            <div class="icon-linkedin">
              <a href="https://www.linkedin.com/in/laionpereira/" target="_blank">
           <div class="box">
           <img src={linkedin} width="50px" alt="linkedin"/>
           <p>LinkedIn</p>
           </div>
           </a>
           <a href="https://www.linkedin.com/in/laionpereira/" target="_blank">
            </a>
            
            </div>
            </div>


            <div className="gameplay">
            <img src={game} width="250px" alt="Gameplay" />
            </div>
            </section>
            </Main>



    )
    }
    export default ContatoTela