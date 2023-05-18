import { Div, Titulo } from "./styled";
import Header from "../Header/Header"
import Footer from "../Footer/Footer";

function TelaUsuarioCadastrado (){
    return (
        <Div>
            <Header/>
            <Titulo>Cadastro concluído, parabéns!!!</Titulo>
            <Footer/>
        </Div>
    )
}
export default TelaUsuarioCadastrado;