import styled from "styled-components";

export const ProductContainer = styled.div`
    width: 400px;
    height: 670px;

    background-color: #b3b3b3;
    border-radius: 20px;
    
    /* padding: 28px; */
    margin: 7rem 1rem 1rem 1rem;

    img {
        width: 400px;
        -webkit-box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
		-moz-box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
        
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        border-radius: 20px;
        
        margin-bottom: 0.8rem;
    }

    p:nth-child(1n)  {
        color: #fff;
        font-size: 1.1rem;
        margin: 1rem 0rem 1rem -1rem;
    }
    button{
        width: 150px;
        height: 35px;
    }
`
