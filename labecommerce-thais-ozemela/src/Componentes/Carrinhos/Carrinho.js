import React from 'react'
import { EstiloCarrinho } from './CarrinhoStyle'
import Itens from './Itens/Itens'

export default function Carrinho () {
    return (
        <div>
            <EstiloCarrinho>
             <p>Carrinho</p>
             <Itens />
             </EstiloCarrinho>
        </div>
    )
}
