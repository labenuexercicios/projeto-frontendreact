import React from 'react'
import {
    CardContainer,
    DivImagemCard,
    DivImagemOff,
    ImagemOff,
    ValorOff,
    Imagemproduct,
    NomeProduto,
    DivFormaPagamento,
    PrecoSemOff,
    PreçoComOff,
    OpcoesPagamento,
    BotaoAddCarrinho,
} from './Card.styled'
import saleImg from '../../assets/sale.svg'




function Card(props) {
    const { product , addToCart} = props;
    const precoVirgula = product.preco.toFixed(2).toString().replace(".", ",")
    const precoDesconto = ((product.preco * (1 - product.desconto / 100)).toFixed(2)).toString().replace(".", ",")
    const precoDividido = ((product.preco / 5).toFixed(2).toString().replace(".", ","))



    return (


        <CardContainer>

            <div className='image-product-div'>
                {product.desconto ? //ternario
                    <div className='label-off'>
                        <img src={saleImg} alt="off label" />
                        <h3>{product.desconto}%</h3>
                    </div> : ''}

                <img src={product.imagem[0]} alt="Product Image"  />
            </div>

            <h2>{product.nome}</h2>

            <div className='price'>
                {product.desconto?<p className='price-full'>R${precoVirgula}</p>:""}
                <p className='price-discount'>R${precoDesconto}</p>
                <p className='p-cash'>á vista </p>
                <p className="payment-option">ou <span>5x</span> de ${precoDividido}</p>
            </div>

            <button onClick={()=>addToCart(product)}>Adicionar ao carrinho</button>
        </CardContainer>
    )
}
export default Card;