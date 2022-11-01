import {CarrinhoStyled, 
        PStyle,
        FixaDireita,
        ListaContainer,
        Item,
        ItemTotal,
        RemoveButton,
        LogoStyled,} from './styles'

        import bin from "./Carrinho-midia/bin.png";
        import carrinhoImg from "./Carrinho-midia/istockphoto-1079804618-1024x1024.jpg"
        import styled from "styled-components";
        
        const DivCarrinho = styled.p`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top:10px;
`


    export const Carrinho = (props) => {
        
        let total = 0
        for(let i=0; i<props.listaCarrinho.length; i++)
        {
            total += +(props.listaCarrinho[i].preco)
        }
    
    return(
        // style={{ backgroundImage: `url(${fundo})` }}>
         <CarrinhoStyled display={props.displayCarrinho}>  
            <FixaDireita>
                <DivCarrinho>
                    <LogoStyled src={carrinhoImg}/>
                    <PStyle>
                         Carrinho:
                    </PStyle>
                </DivCarrinho>
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