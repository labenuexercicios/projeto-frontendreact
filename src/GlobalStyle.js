import {createGlobalStyle} from 'styled-components'
export const GlobalStyle =createGlobalStyle`
    * {
    
        margin:0;
        padding: 10;
        box-sizing: border-box;
    }
    
    
    html{
        font-family: sans-serif;
        
    }
    #root{
        padding: 16px;
        max-width: 1200px;
        margin: 0 auto;
        background-image: linear-gradient(to bottom, black,#a9a9a9,#c0c0c0, #dcdcdc, #a9a9a9,#d3d3d3,white) ;
    }
    button{
        :hover{
                cursor:pointer;
                filter: brightness(0.85)
            }
            :active{
                filter:brightness(1.1)
            }

    }
`