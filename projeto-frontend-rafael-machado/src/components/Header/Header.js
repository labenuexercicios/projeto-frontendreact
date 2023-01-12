import React from "react"
import { Container } from "./style"
import logo from "../../assets/astrodev.logo.png"

const Header = ({ pesquisa, setPesquisa, carrinho, mudarTela }) => {
    
    let totalCarrinho = 0

    const somaProdCarrinho = () => {
        for (let i = 0; i < carrinho.length; i++) {
            totalCarrinho += carrinho[i].precototal
        }
        return
    }

    somaProdCarrinho()



    return (
        <>
            <Container>
                <div>
                    <img src={logo} alt="astrodev.logo.png" />
                </div>
                <div className="Div-input-busca">
                    <h1>Frete Gratis para compras acima de R$ 200,00</h1>
                    <input
                        placeholder="Buscar produtos, marcas e muito mais..."
                        value={pesquisa}
                        onChange={(ev) => { setPesquisa(ev.target.value) }}
                        type="text"
                    />
                </div>
                <div>
                <h2>Carrinho:</h2>
                    {carrinho.map((produto) => {
                        return (
                            <p> <span><b> {produto.quantidade}</b></span>
                                <span><b> {produto.nome} </b></span>
                                <span><b> R$ {produto.precototal.toFixed(2)}</b></span>
                            </p>
                        )
                    })}
                    <h3><b>Valor total: R$ {totalCarrinho.toFixed(2)}</b></h3>
                    <button onClick={() => mudarTela(2)}>Concluir compra</button>
                </div>
            </Container>
        </>
    )
}

export default Header