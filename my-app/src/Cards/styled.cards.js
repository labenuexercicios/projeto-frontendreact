import styled from "styled-components";

const StyledCards = styled.div`
    img{
        border-radius: 20px;
        -webkit-box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
		-moz-box-shadow:    9px 7px 5px rgba(50, 50, 50, 0.77);
		box-shadow:         9px 7px 5px rgba(50, 50, 50, 0.77);
    }
    .menu{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    }
    .card{
       padding: 20px;
    }
    p{
        font-size: 20px;
        margin: 10px;
    }
`

export default StyledCards;