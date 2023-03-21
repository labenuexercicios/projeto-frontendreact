import {MainStyled, ProductBlock, ProductData, AddCart, ButtonSize, LabelSize,
       Input356, Radio, LogoStyled} from './styles'
import React, {useState} from 'react'

import cartImg from './Main-assets/126510.png'
export const Main = (props) => {

    /////////////////////selecionar tamanho////////////////////////
    // const [size, setSize] = useState("");
    // const onChangeSize = (event) => {
    //     props.setSize(event.target.value)
    //   }

    return(
          // style={{ backgroundImage: `url(${fundo})` }}>
        <MainStyled  display={props.product.display}> {/* //apaga = {props.apaga === true  ? esconde: 1===1}  */} 
            <ProductBlock color={props.product.backColor}> 
                <img src={props.product.imgUrl} />
                <ProductData>
                    <p>{props.product.name}</p>
                    <p>R$<strong>{props.product.price}</strong></p>
                </ProductData>
            </ProductBlock>
            {/*//////////////parte do Size das roupas/////////////////*/}
            {/* {props.produto.HasSize && 
            <LabelSize>
                <ButtonSize onClick={() => props.pesquisarBotao(props.string)}>P</ButtonSize> 
                <ButtonSize onClick={() => props.pesquisarBotao(props.string)}>M</ButtonSize> 
                <ButtonSize onClick={() => props.pesquisarBotao(props.string)}>G</ButtonSize> 
            </LabelSize>} */}
            
            {/* {props.produto.hasSize && 
            <LabelSize>
            <Input356>
                <Radio>
                <label>
                    <input type="radio" name="curso" value = {size} onChange = {onChangeSize}/>
                    <label for="integral"><span>P</span> </label>

                    <input type="radio" name="curso" value={Size} onChange = {onChangeSize}></input>
                    <label for="noturno"><span>M</span></label>  

                    <input type="radio" name="curso" value={Size} onChange = {onChangeSize}></input>
                    <label for="noturno"><span>G</span></label> 
                </label>
                </Radio>      
            </Input356>      
            </LabelSize>} */}

            <AddCart onClick = {() => props.addCartFunction(props.product)} >adicionar ao carrinho <LogoStyled src={cartImg}/></AddCart>
        </MainStyled>
    )
}