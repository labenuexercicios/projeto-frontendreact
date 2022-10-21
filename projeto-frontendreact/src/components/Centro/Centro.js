import {CentroStyled, Imagem, ProdutosBloco, DadosProduto, AddCarrinho} from './styles'

export const Centro = (props) => {
   
    return(
        // style={{ backgroundImage: `url(${fundo})` }}>
         <CentroStyled>   
            <ProdutosBloco>
            <Imagem src={props.produto.imagemUrl} />
                <DadosProduto>
                    <p>{props.produto.nome}</p>
                    <p>R${props.produto.preco}</p>
                </DadosProduto>
            </ProdutosBloco>
            <AddCarrinho>adicionar ao carrinho</AddCarrinho>
        </CentroStyled>
    )
}