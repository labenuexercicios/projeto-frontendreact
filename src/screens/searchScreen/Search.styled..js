import styled from "styled-components";


export const MainContainer = styled.main`

display:flex;


width:100%;


.div-products{   
    
   

    width:100%;
    color:black;
    display:flex;
    flex-direction:column;  
    margin-top:8px;
    margin-right:32px;

    nav{
        margin-left:auto;
        >label{
            
            margin-right:8px;
        }
        .filter-side{
            background-color:white;
            display:flex;
            gap:50px;;
            flex-wrap:wrap;
            padding:32px 64px;;
            width:80%;
            
        }
    }

    >section{
        display:flex;
        flex-wrap:wrap;
        margin-left:32px;
        
        padding:16px;
        gap:48px;
    }
    
    
    
}
`











