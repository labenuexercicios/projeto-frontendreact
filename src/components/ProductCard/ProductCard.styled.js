import styled from "styled-components"

export const ProductCardContainer = styled.article`
    border: 1px solid #808080;
    margin: 30px;
    margin-right: 8px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    width: 30%;
    height: 23vw;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.50);
    

    > div {
        padding: 8px;
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .card-price-and-cart-action {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 8px;

        button {
           padding: 4px;
           border-radius: 10px;
           border: none;        
           width: 10%;
           color: white;
           background-color: gray;
           height:2vw;
        }
        .button-card{
            width: 50%;
            background-color: gray;
        }
        .cart-card-delete-btn {      
            right: 0;
            background-color: red;
            color: white; 
            width: 30%;
            height:2vw;
        }
    }

   
     img {
        width: 60%;
        height:16vw;
    }
`