import styled from 'styled-components'

export const DivPai = styled.div `
    margin: 0;
    display: flex;
    background: linear-gradient(to right, darkgreen, blue);
    align-items: center;
    justify-content: center;
    color: white;
   


    section{
        margin: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;
        
    }
    
    
`

// estilo card
export const CardContainer = styled.div `
    height: 370px;
    width: 250px;
    border: 1px solid black;
    
   
    div {
        height: 70%;
        width: 100%;
    }

    table{
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        width: 100%;
        padding: 8px;
    }

`

export const ProductImage = styled.img `
    max-width: 100%;
    min-height: 100%;
`

export const AddButton  = styled.button `
    padding:10px;
    background-color: white;
    width: 100%;


    button:hover{
        
        color: gray;
        background-color: black;
    }
    
`

export const Form = styled.form`
    margin: 0;
    padding: 10px;


`

export const Carrinho=styled.div`
   

    table{
        margin-top: 50px;
    }
`

export const Select=styled.div`
        margin: 26px;
        width: 100%;
        display: flex;
        

        select{
            width: 150px;
            padding: 5px;
        }

`