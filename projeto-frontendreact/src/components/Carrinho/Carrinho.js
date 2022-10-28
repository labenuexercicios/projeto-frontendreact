import {CarrinhoStyled, 
        PStyle,
        FixaDireita,
        ListaContainer,
        Item,
        ItemTotal,
        RemoveButton} from './styles'

        import bin from "./Carrinho-midia/bin.png";
    export const Carrinho = (props) => {
        let total = 0
        for(let i=0; i<props.listaCarrinho.length; i++)
        {
            total += +(props.listaCarrinho[i].preco)
        }
    
    return(
        // style={{ backgroundImage: `url(${fundo})` }}>
         <CarrinhoStyled>  
            <FixaDireita>
                <PStyle>
                    <strong>Carrinho:</strong>
                </PStyle>
                <ListaContainer>
                <ul>
                {props.listaCarrinho.map((item, index) => {
                    return (
                    <Item key={index}>    {/*key={Math.random()> */}
                        <p>{item.qtd}x {item.nome} R${item.preco.toFixed(2)}</p>
                        <RemoveButton onClick={() => props.removeCarrinho(item)}> 
                        <img src={bin} alt="" width="16px" />
                        </RemoveButton>
                    </Item>
                    );
                })}
                </ul>
                </ListaContainer>
                <ItemTotal> 
                <strong>Total: R${total.toFixed(2)}</strong>
                </ItemTotal>
            </FixaDireita> 
        </CarrinhoStyled>
    )
}