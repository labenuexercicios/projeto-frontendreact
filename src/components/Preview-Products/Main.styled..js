import styled from "styled-components";


export const MainContainer = styled.main`
border:1px solid black;
display:flex;
flex-wrap:wrap;
align-content:flex-start;
width:100%;


    nav{
        height:4vh;
        width:100%;
        color:black;
 
        display:flex;
        justify-content:space-between;

        >div{
            display:flex;
            justify-content:center;
            align-items:center;
            margin-right:32px;
            
            >label{
                margin-right:8px;
            }
            
        }

        }
    .filter-side{
        background-color:white;
        display:flex;
        gap:50px;;
        flex-wrap:wrap;
        padding:32px 64px;;
        width:80%;

        }
        


`

