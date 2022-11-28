import styled from 'styled-components'


export const ProductContainer = styled.main`
display: flex;
border: 2px solid rgb(139, 164, 176);
background: rgb(28, 56, 70, 0.6);
border-radius: 15px;
width: 360px;
height: 330px;
padding-left: 10px;
gap: 6px;

    .marca{
        display: flex;  
        position: absolute;
        width: 140px;
        padding-top: 20px   
    }  

    .imagem{
        position: absolute;
        width: 137px;
        transform: rotate(25deg); 
        margin-top: -3.5em;
        margin-left: 1.2em;
        padding-left: 2em;
        transition: width .4s;
     }
     .imagem:hover{
        width: 150px;
       
       }

     .nome{
        text-align: center;
        font-family: 'Stick No Bills', sans-serif; 
        font-size: 25px;
        margin-left: 7em;
        margin-top: 0em;
     }

     .propriedades{
        font-family: 'Saira Condensed', sans-serif;
        display: flex;
        flex-direction: column;
        gap: 1px;
        margin-left: 10em;
     
    }

    .preco{
        font-family: 'Stick No Bills', sans-serif; 
        font-size: 25px;
    }
    
    .propcar{
        display: flex;
        flex-direction: column;
        color: rgb(139, 164, 176);
        margin-top:5%;
        gap: 10%;
        
    }

    .addcard{
        padding: 4px;
        background: rgb(139, 164, 176);
        color:rgb(28, 56, 70);
        font-family: 'Saira Condensed', sans-serif; 
        font-size: 20px;
        border: none;
        border-radius: 10px;
        box-shadow: 1px 1px 5px grey;
        margin-left: 5em;
        cursor: pointer;
    }
    
   

`




