import React, { useContext } from "react";
import {ButtonPesquisar, ContainerHeader, MainHeader, ImagemLogo, ButtonLogo, Buscador, MinimumMaximum, SelectOrder, ImagemCarrinho, FilterCart, CartButton, CartQuantity} from "./Header.styles";
import logo from "../../assets/logo2.png";
import cartIcon from "../../assets/cart-icon.png"
import { goToCartPage, goToProductPage } from "../../Router/coordinator";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";

export function Header (){

    const context = useContext(GlobalContext)

    const { setInputHeader,
        inputHeader, 
        setInputMaxPrice, 
        inputMaxPrice, 
        setInputMinPrice,
        inputMinPrice, 
        setSortByPrice, 
        sortByPrice,
        cart
    } = context     
    
    const navigate = useNavigate()
    
    return(
    <>    
        <MainHeader>
            <ContainerHeader>
                <ButtonLogo onClick={() => goToProductPage(navigate)} >
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
                    <CartButton onClick={() => goToCartPage(navigate)}>
                        <ImagemCarrinho src={cartIcon} alt="Imagem de Carrinho"/>
                        <CartQuantity>{cart.length}</CartQuantity>
                    </CartButton>
                    
                </FilterCart>
            </ContainerHeader>
            
            
        </MainHeader>
    </>    
)
}