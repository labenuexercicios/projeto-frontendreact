import React from 'react';
import Carrinho from '../Carrinho/Carrinho';
import Produtos from '../Produtos/Produtos';
import { BodyContainer, ColunaCarrinho, ColunaProduto } from './Styled';


function Body({ sacola, ordenar, filtrar }) {
    return (
        <BodyContainer>
            <ColunaProduto border={sacola.carrinho.length === 0 ? "":"2px solid black"}>
                <Produtos sacola={sacola} ordenar={ordenar} filtrar={filtrar}/>
            </ColunaProduto>
            <ColunaCarrinho>
                <Carrinho sacola={sacola} />
            </ColunaCarrinho>

        </BodyContainer>


    )
}
export default Body