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
                <input type="number" id="minimum" placeholder="Mínimo"/> 
                <input type="number" id="maximum" placeholder="Máximo"/>
                </MinimumMaximum>

                <SelectOrder>
                <option value="">Crescente</option>
                <option value="">Decrescente</option>
                </SelectOrder>

                <ImagemCarrinho src={cartIcon} alt="Imagem de Carrinho"/>
            </FilterCart>
            
            
        </ContainerHeader>
    </>    
)
}