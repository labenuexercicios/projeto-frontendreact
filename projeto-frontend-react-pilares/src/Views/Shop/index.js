import React from "react";
import styled from "styled-components";


export const MainShop = styled.div`
    display: flex;
    width: 90%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`

export const SearchClient = styled.div`
    display: flex;
    width: 20%;
    flex-direction: column;
`

export const ResponseSection = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    `
export function ShopList({img1}){
    return(
        <MainShop>
            <h1>Shop</h1>

            <SearchClient>
                <img src={img1} alt="img do produto"/>
  
            </SearchClient>

            <ResponseSection>
            
            </ResponseSection>
        </MainShop>
    )
}