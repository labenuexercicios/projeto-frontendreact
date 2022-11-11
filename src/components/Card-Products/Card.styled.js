import styled from "styled-components";

export const CardContainer = styled.div`
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
width:200px;

display:flex;
flex-direction:column;

.label-off{
    position:absolute;
    width:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    transform: translate(2px,16px);
    img{
        position:absolute;
    }

    h3{
        position:absolute;
        color:white;
        font-size:12px;
    }

}

.image-product-div{
    width:200px;
    height:210px;

    >img{
        width:100%;
        max-height:100%;
        
    }
}

h2{
    padding:8px;
    font-size:14px;
    height:80px;
}

.price{
    padding:8px;
    height:100px;
    .price-full{
        color:gray;
        text-decoration:line-through;
        font-size:14px
    }
    .price-discount{
        text-align:right;
        margin-right:24px;
        color:darkgreen;
        font-weight:bold;
    }
    .p-cash{
        font-size:12px;
        margin-right:20px;
        text-align:right;
    }
    .payment-option{
        margin-left:16px;
    }

    span{
    
        font-weight:bold;
    }



}
button{
    margin:8px 8px;
    border:none;
    height:20px;
    
   
}




`
