import styled from "styled-components";

const StyledHomepage = styled.main`
    .banner{
        display: flex;
        justify-content: center;
    }
    img{
        margin: 10px;
        border-radius: 80px;
        height: 600px;
        width: 90%;
        -webkit-box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
		-moz-box-shadow:    9px 7px 5px rgba(50, 50, 50, 0.77);
		box-shadow:         9px 7px 5px rgba(50, 50, 50, 0.77);
    }
`

export default StyledHomepage;