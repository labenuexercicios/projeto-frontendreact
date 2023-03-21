import Home from "./Main/Home"
import Header from './Header/Header'
import { useState } from "react";
import {Container} from "./Main/styles"
import CarrinhoCompleto from "./Main/CarrinhoCompleto"
import PedidoFinalizado from "./Main/PedidoFinalizado"



export default function Mercado() {
    const [tela, setTela] = useState(1)
    const [carrinho, setCarrinho] = useState([])

    function mudarTela(valor) {
        setTela(valor)
    }

    function renderizaTela() {
        switch (tela) {
            case 1:
                return <Home carrinho={carrinho} setCarrinho={setCarrinho} mudarTela={mudarTela} />;
            case 2:
                return <CarrinhoCompleto carrinho={carrinho} setCarrinho={setCarrinho} mudarTela={mudarTela} />;
            case 3:
                return <PedidoFinalizado carrinho={carrinho} setCarrinho={setCarrinho} mudarTela={mudarTela} />
            default:
                return <Home mudarTela={mudarTela} />
        }
    }


    return (
        <>
        <Header
        mudarTela={renderizaTela()}/>
        <Container>
        {renderizaTela()}
        </Container>
        </>
    )
}