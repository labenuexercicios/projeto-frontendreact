import styled from "styled-components";


const StyledHeader = styled.header`
    display: flex;
    background-color: #fffbf4;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    padding: 24px;
    position: fixed;
.input{
    position: relative;
    font-size: 1.2em;
    padding: 3px;
	display: inline-block;
	border-radius: 9999em;
    }
.h1{
    font-size: 34px;
    font-family: monospace;
    color: black;
    text-shadow: 0.1em 0.2em 0.05em #333;
    
    }
`

export default StyledHeader;