import {CentroStyled, Imagem, ProdutosBloco, DadosProduto, AddCarrinho} from './styles'

export const Centro = (props) => {
    // const onChangeDisplay = (event) => {
    //     props.setProdutos.display(event.target.value)
    //   }
    return(
        // style={{ backgroundImage: `url(${fundo})` }}>
          <CentroStyled  display={props.produto.display}> {/* //apaga = {props.apaga === true  ? esconde: 1===1}  */} 
            <ProdutosBloco color={props.produto.backColor}> 
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