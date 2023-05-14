import React from 'react'
import { ProductStyled,Texto,Botao} from './productCardStyle'



function ProductCard() {
    const cardImage = `https://picsum.photos/200/300?a=${Math.floor(Math.random()*6)+1}`
    return (
        <>
            <ProductStyled>
                <img src= {cardImage} alt='imagem'/>
                <Texto>
                    <p>Nome do Produto</p>
                    <p>Valor</p>
                    
                </Texto>
                <Botao>
                    <button>Adicionar ao Carrino</button>
                </Botao>
                
            </ProductStyled>
        </>
    )
}

export default ProductCard