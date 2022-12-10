import styled from "styled-components";

export const ContainerPagina = styled.div`
    width: 100%;
    display: flex;
    justify-content:center;
    flex-direction:column;
    flex-wrap:wrap;
    margin-bottom: 1000px;
`

export const ContentPage = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
    padding:16px;
    height:30vh;
    row-gap: 20px;
    margin-left: 25px;
    margin-right: 25px;
    justify-items: center;
    margin-bottom: 100px;
`
export const CashOutPage = styled.div`
   &{display: flex;
    flex-direction: column
   }
    h2{
        font-size:50px;
        align-self: center;
    }
    button{
        background-color: #6667ab;
        border-radius: 8px;
        font-size: 80px;
        color: white;
        width: 100%;
        height: 90px;
        border: none;
        transition: transform .3s;
}
button:hover{
        cursor: pointer;
        background-color: #6667ab;
        transform: scale(1.1);
`

export const CashOutItens = styled.div`
    &{
        display:flex;
        flex-direction: row;
        align-items: center;
        background: rgb(255,255,255);
        background: linear-gradient(90deg, rgba(255,255,255,1) 22%, rgba(102,103,171,1) 73%, rgba(102,103,171,1) 100%);
        margin-top:10px;
    }
img{
        height:10%;
        width:10%;
    }
h1{
    font-size:40px;
}

p{
    padding-left: 15px;
    font-size:30px;
}

h4{
    font-size:60px;
    padding-left: 60px;
}


`


    