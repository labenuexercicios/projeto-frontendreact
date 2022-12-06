import styled from 'styled-components'


export const FiltroContainer = styled.main`
    display: flex;
    flex-direction: column;
    position: fixed;
    border: 2px solid rgb(139, 164, 176);
    background: rgb(28, 56, 70, 0.6);
    width: 205px;
    margin-top: 50px;
    margin-left: 1.5%;
    border-radius: 15px;
    height:180px;

    .pesquisa {
        background: #1C3846;
        border:2px solid rgb(139, 164, 176);
        color: rgb(139, 164, 176);
        font-family: 'Saira Condensed', sans-serif;
        font-size: 15px;
        width:40px;
        height:23px;
        border-radius: 5px;
        ::-webkit-inner-spin-button,
        ::-webkit-outer-spin-button {
        -webkit-appearance: none;
    }
    }
    
    .preco{
        
        display: flex;
        color:rgb(139, 164, 176);
        font-family: 'Saira Condensed', sans-serif;
        font-size: 15px;
        padding: 15px 15px 5px  15px;
        justify-content: space-between    
    }
    
    .ordem{
        display: flex;
        color:rgb(139, 164, 176);
        font-family: 'Saira Condensed', sans-serif;
        font-size: 15px;
        padding: 10px 15px 5px  15px;
        justify-content: space-between
    }
    .caixaordem{  
        background: #1C3846;
        border:2px solid rgb(139, 164, 176);
        color: rgb(139, 164, 176);
        font-family: 'Saira Condensed', sans-serif;
        font-size: 15px;
        width:90px;
        height:23px;
        border-radius: 5px;
    }
    
    `