import {CentroStyled, ProdutosBloco, DadosProduto, AddCarrinho, BotaoTamanho, LabelTamanho,
       Input356, Radio, LogoStyled} from './styles'
import React, {useState} from 'react'

import imgCarrinho from './Centro-midia/126510.png'
export const Centro = (props) => {

    /////////////////////selecionar tamanho////////////////////////
    // const [tamanho, setTamanho] = useState("");
    // const onChangeTamanho = (event) => {
    //     props.setTamanho(event.target.value)
    //   }

    return(
          // style={{ backgroundImage: `url(${fundo})` }}>
        <CentroStyled  display={props.produto.display}> {/* //apaga = {props.apaga === true  ? esconde: 1===1}  */} 
            <ProdutosBloco color={props.produto.backColor}> 
                <img src={props.produto.imagemUrl} />
                <DadosProduto>
                    <p>{props.produto.nome}</p>
                    <p>R$<strong>{props.produto.preco}</strong></p>
                </DadosProduto>
            </ProdutosBloco>
            {/*//////////////parte do tamanho das roupas/////////////////*/}
            {/* {props.produto.tamanho && 
            <LabelTamanho>
                <BotaoTamanho onClick={() => props.pesquisarBotao(props.string)}>P</BotaoTamanho> 
                <BotaoTamanho onClick={() => props.pesquisarBotao(props.string)}>M</BotaoTamanho> 
                <BotaoTamanho onClick={() => props.pesquisarBotao(props.string)}>G</BotaoTamanho> 
            </LabelTamanho>} */}
            
            {/* {props.produto.tamanho && 
            <LabelTamanho>
            <Input356>
                <Radio>
                <label>
                    <input type="radio" name="curso" value = {tamanho} onChange = {onChangeTamanho}/>
                    <label for="integral"><span>P</span> </label>

                    <input type="radio" name="curso" value={tamanho} onChange = {onChangeTamanho}></input>
                    <label for="noturno"><span>M</span></label>  

                    <input type="radio" name="curso" value={tamanho} onChange = {onChangeTamanho}></input>
                    <label for="noturno"><span>G</span></label> 
                </label>
                </Radio>      
            </Input356>      
            </LabelTamanho>} */}

            <AddCarrinho onClick = {() => props.adicionarCarrinho(props.produto)} >adicionar ao carrinho <LogoStyled src={imgCarrinho}/></AddCarrinho>
        </CentroStyled>
    )
}