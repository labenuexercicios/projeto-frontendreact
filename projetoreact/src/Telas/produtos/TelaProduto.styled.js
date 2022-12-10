import styled from "styled-components"

export const Main = styled.main`
    display: flex;
    margin: 36px 0px;
    flex-direction: row;
    height: 300vh;
       
`
export const Filtros= styled.section `
    display: flex;
    border-radius: 5px;
    margin-top: 10px;
    gap: 20px;
    flex-direction: column;

    .ordenar{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`

export const Cards= styled.section`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    align-content: center;
    min-width:100vh;
    
.precoCompra{
    margin-top:15px;
 
}

.imagemTopo{
    height: 300px ;
    width: 1100px;
}

.container {
    position: relative;
    max-width: 1000px;
    flex-wrap:wrap;
    z-index:1;
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

    .botaoCompra{

        :hover {
        
            cursor: pointer;
            filter: brightness(1.1);
            background-color: lightgreen;
        }

        :active {
            filter: brightness(0.95);
        }

        margin-left:15px;
        background-color:yellow;
        border-radius:10px;
        border: none;
        height:50px;
        width:80px;
    }
   
    
    .imagens{
        height: 190px;
        width: 190px;

    }

`

