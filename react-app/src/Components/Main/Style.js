import styled from "styled-components"


//CARD DE PRODUTO 
export const Produto = styled.div`
    padding: 10px;
    display:flex;
    flex-direction: column;
    width: 150px;
    border: 1px solid black;
    border-radius: 10px;
    gap: 10px;
    margin: 10px;
    `
    
    export const Figure = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60%;

        img{
            height: 150px;
            width: auto;
            max-width: 100%;
        }
 `
 //INFORMACÓES DOS CARDS DE PRODUTO 
 export const InfosProdutos = styled.div`
height: 40%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

      span{
          font-size: 14px;
          width: 90%;
          text-align: center;
      }

     h3{
         font-size: 18px;
         color: black;
     }

     button{
         background-color: black;
         border-radius: 8px;
         color: white;
         width: 100px;
         height: 30px;
         border: none;
     }
 `
export const Feed = styled.div`
    margin: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;

    `
export const Container = styled.div`
    display: flex;
    margin: 0 5px 20px 5px;
    justify-content: center;
    gap: 15px;
`
////ESTILO DO CONTAINER LATERAL COM OS ITENS DO CARRINHO

export const ContainerLateralCarrinho = styled.div`
    padding: 10px 20px 0 20px;
    border: 1px solid black;
    border-radius: 10px;

    button{
        margin: 15px;
        background-color: black;
        border-radius: 10px;
        color: white;
        width: 100%;
        height: 30px;
        border: none;
    }

    span{
        font-size: 12px;
    }
`
//ESTILO DO CONTAINER CENTRAL COM O FEED DE IMAGENS 
export const ContainerCentral = styled.div`
    display: flex;
    flex-direction: column;
    align-center: center;
    justify-content: center;
    gap: 10px;
    padding: 10px;
    flex-wrap: wrap;
    border-radius: 10px;
    border: 1px black solid;
`

export const ContainerCentralSuperior = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        
    select{
        border-radius: 8px;
    }
`

export const Central = styled.div`
display: flex;

`
export const Geral = styled.div`
display: flex;
flex-direction: column;
`