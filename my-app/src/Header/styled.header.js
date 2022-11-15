import styled from "styled-components";


const StyledHeader = styled.header`
    display: flex;
    background-color: #8870ff;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    padding: 24px;
.input{
    position: relative;
    font-size: 1.2em;
    padding: 3px;
	display: inline-block;
	border-radius: 9999em;
    }
.h1{
    color: white;
    text-shadow: 0.1em 0.1em 0.05em #333
    }
`

export default StyledHeader;