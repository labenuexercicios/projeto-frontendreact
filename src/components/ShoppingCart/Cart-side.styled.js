import styled from "styled-components"

export const CartContainer = styled.div`
display:${(props)=> props.size ? "block": "none"};

margin-left:auto;
width:15%;

 >div{
    display:flex;
    flex-direction:column;
    align-items:center;
 }



`
export const CartCardContainer =styled.div`
padding: 16px 0;


    img{
        height:150px;
        
    }
    >p{
        text-align:center;
    }
    >div{
        display:flex;
        justify-content:center;
    }

`