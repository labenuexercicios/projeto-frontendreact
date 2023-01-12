import React from "react"
import { Container } from "./style"
import logo from "../../assets/astrodev.logo.png"

const Header = ({ pesquisa, setPesquisa }) => {

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
                    <h3>Valor total: R$ </h3>
                    <button>Concluir compras</button>
                </div>
            </Container>
        </>
    )
}

export default Header