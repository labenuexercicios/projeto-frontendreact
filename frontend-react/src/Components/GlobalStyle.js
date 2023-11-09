import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Times New Roman', Times, serif;
    
 }

 .product-image {
    width: 100%;
    object-fit: contain; /* or 'contain' depending on your needs */
}
 
`
