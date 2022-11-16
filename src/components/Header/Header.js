import React from "react";
import {ButtonPesquisar, ContainerHeader, ImagemLogo, Buscador, MinimumMaximum, SelectOrder, ImagemCarrinho, FilterCart} from "./Header.styles";
import logo from "../../assets/logo.png";
import cartIcon from "../../assets/cart-icon.png"


export function Header (props){
    return(
    <>    
        <ContainerHeader>
            <ImagemLogo src={logo} alt="Imagem Logo"/>

            <Buscador>
                <input placeholder="Pesquisar" value={props.inputHeader} 
                       onChange={(e)=>{props.setInputHeader(e.target.value)}}/>
                <ButtonPesquisar>Buscar</ButtonPesquisar>
            </Buscador>
            <FilterCart>
                <MinimumMaximum>
                <input type="number" id="minimum" placeholder="Mínimo" value={props.inputMinPrice}
                onChange={(e)=>{props.setInputMinPrice(e.target.value)}}/> 
                <input type="number" id="maximum" placeholder="Máximo" value={props.inputMaxPrice} 
                onChange={(e)=>{props.setInputMaxPrice(e.target.value)}}/>
                </MinimumMaximum>

                <SelectOrder value={props.sortByPrice} onChange={(e)=>{props.setSortByPrice(e.target.value)}}>
                <option value="crescente" >Crescente</option>
                <option value="decrescente">Decrescente</option>
                </SelectOrder>

                <ImagemCarrinho src={cartIcon} alt="Imagem de Carrinho"/>
            </FilterCart>
            
            
        </ContainerHeader>
    </>    
)
}