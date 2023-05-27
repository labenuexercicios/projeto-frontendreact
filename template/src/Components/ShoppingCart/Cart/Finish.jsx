import { FinishMessage, Background } from "./FinishStyle"

export const Finish =({changeScreen})=>{
    const showHomepage = () => { changeScreen("Homepage")}
    return(
        <Background>
            <FinishMessage>
            <h1>
              COMPRA FINALIZADA COM SUCESSO!  
            </h1>
            <p>Parabéns! Sua compra foi finalizada com sucesso e em breve você poderá desbravar o Universo!</p>
            <button onClick={showHomepage}>OK</button>
            </FinishMessage>
        </Background>
    )
}