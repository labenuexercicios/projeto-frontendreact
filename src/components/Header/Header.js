import React from "react";
import {ButtonPesquisar, ContainerHeader, ImagemLogo, ButtonLogo, Buscador, MinimumMaximum, SelectOrder, ImagemCarrinho, FilterCart, CartButton} from "./Header.styles";
import logo from "../../assets/logo.png";
import cartIcon from "../../assets/cart-icon.png"
import {goToProductPage, goToCartPage} from '../../Router/coordinator'
// import { useNavigate } from "react-router-dom"

export function Header (props){

    const { setInputHeader,
        inputHeader, 
        setInputMaxPrice, 
        inputMaxPrice, 
        setInputMinPrice,
        inputMinPrice, 
        setSortByPrice, 
        sortByPrice,
        goToCartPage,
        goToProductPage
    } = props     

    // const navigate = useNavigate()
    
    return(
    <>    
        <ContainerHeader>
            <ButtonLogo onClick={() => goToProductPage()} >
                <ImagemLogo src={logo} alt="Imagem Logo"/>
            </ButtonLogo>
            
            <Buscador>
                <input placeholder="Pesquisar" value={inputHeader} 
                       onChange={(e)=>{setInputHeader(e.target.value)}}/>
                <ButtonPesquisar>Buscar</ButtonPesquisar>
            </Buscador>
            <FilterCart>
                <MinimumMaximum>
                <input type="number" id="minimum" placeholder="Mínimo" value={inputMinPrice}
                onChange={(e)=>{setInputMinPrice(e.target.value)}}/> 
                <input type="number" id="maximum" placeholder="Máximo" value={inputMaxPrice} 
                onChange={(e)=>{setInputMaxPrice(e.target.value)}}/>
                </MinimumMaximum>

                <SelectOrder value={sortByPrice} onChange={(e)=>{setSortByPrice(e.target.value)}}>
                <option value="crescente" >Crescente</option>
                <option value="decrescente">Decrescente</option>
                </SelectOrder>

                <CartButton onClick={() => goToCartPage()}>
                    <ImagemCarrinho src={cartIcon} alt="Imagem de Carrinho"/>
                </CartButton>
            </FilterCart>
            
            
        </ContainerHeader>
    </>    
)
}