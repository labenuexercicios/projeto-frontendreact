import styled from 'styled-components'


export const FiltroContainer = styled.main`
    display: flex;
    flex-direction: column;
    position: fixed;
    border: 2px solid rgb(139, 164, 176);
    background: rgb(28, 56, 70, 0.6);
    width: 205px;
    margin-top: 58px;
    margin-left: 1.5%;
    border-radius: 15px;
    height:180px;

    .pesquisa {
    border:2px solid rgb(139, 164, 176);
    background: #1C3846;
    color: rgb(139, 164, 176);
    font-family: 'Saira Condensed', sans-serif;
    font-size: 15px;
    width:40px;
    height:23px;
    float: right;
    margin-top: 15px; 
    margin-right: 7%;
    border-radius: 5px;
    }
    .preco{
        color:rgb(139, 164, 176);
        font-family: 'Saira Condensed', sans-serif;
        font-size: 15px;
    }
    .precomin{
        position: absolute;
        top: 15px;
        left: 15px;
        
    }
    .precomax{
        position: absolute;
        top: 55px;
        left: 15px;
        
    }
    .ordem{
        display: flex;
        color:rgb(139, 164, 176);
        font-family: 'Saira Condensed', sans-serif;
        font-size: 15px;
        padding-left: 15px;
        padding-top: 15px;
        gap: 25px;
    }
    .caixaordem{  
        background: #1C3846;
        border:2px solid rgb(139, 164, 176);
        color: rgb(139, 164, 176);
        font-family: 'Saira Condensed', sans-serif;
        font-size: 15px;
        width:80px;
        height:23px;
        border-radius: 5px;
    }
    
    `