import styled from "styled-components";

export const Main = styled.main`
display: flex;
margin: 36px 0px;   
flex-direction: row;
height:auto;


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
justify-content:center ;
min-width:100vh;

/* border: 4px solid green; */

.container {
display: flex;
position: relative;
max-width: 1000px;
flex-wrap:wrap;
z-index:1;
flex-wrap: wrap;

} 

.container .card{
position: relative;
    width: 300px;
    height: 320px;
    margin: 30px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-family:sans-serif;
    font-size:12px;
    background-color: white;
    border-radius: 50px;
    box-shadow: 10px 10px 10px 5px black;
   
}

.nomeBrinquedo{
    margin-left: 2rem;
    margin-right:2rem;
    margin-top: 15px;
}
.imagens{
        height: 200px;
        width: 200px;
    }

.informacoes{
    display: flex;
    margin-top: 10px;
    gap: 2rem;
    
}

.remover{
    background-color: lightsalmon;
    border-radius: 7px;

}

`
