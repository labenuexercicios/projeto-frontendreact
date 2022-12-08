import styled from "styled-components";

const Main = styled.section `
    padding-top: 24px;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 1fr;
    background-color: #1C1C1C;
    width: 100%;

`
export default Main

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 24px;
    
`