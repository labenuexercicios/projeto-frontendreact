import styled from 'styled-components'

export const ProductCardContainer = styled.article`
    border: 1px solid black;
    margin: 4px 0;
    margin-right: 8px;
    padding: 8px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    
    
    > div{
        padding:8px;

    }
    .card-header{
        display: flex;
        justify-content: space-between;
        align-items: center;

    }
    .card-price{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 8px;

    }
    button{
        padding: 4px;

    }
    .button-delete-item{
        position: absolute;
        top: 0;
        right: 0;
        background-color: #78866b;

    }
                  

`
    