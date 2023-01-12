import React from "react"
import { Container } from "./style"

const Header = () => {

    return(
        <> 
        <Container>
        <div>
            <img/>
        </div>
        <div className="Div-input-busca">
            <h1>Frete Gratis para compras acima de R$ 200,00</h1>
            <input
            placeholder="Buscar produtos, marcas e muito mais..."
            value=""
            onChange=""
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