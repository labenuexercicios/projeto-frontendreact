import styled from "styled-components";

export const Main = styled.main`
display: flex;
margin: 36px 0px;   
flex-direction: row;
height:100vh;


`
export const PrecoTotal= styled.section `

.preco{
    font-size:30px;
    font-weight:bold;
    
}
    display:flex;
    height: 110px;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items:center;
    border: 3px solid black;
    

`
export const Card = styled.div`

display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: center;
align-items: flex-start;
align-content: center;
min-width:100vh;
/* border: 4px solid green; */

.container {
position: relative;
max-width: 1000px;
flex-wrap:wrap;
z-index:1;
} 

.container .card{
position: relative;
width: 300px;
height: 400px;
margin: 30px;
border-radius: 15px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
align-items: center;
border: 1px solid black;
}

.imagens{
        height: 200px;
        width: 200px;
    }

`
