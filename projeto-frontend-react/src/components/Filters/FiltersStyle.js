import { styled } from "styled-components";


export const FiltersContainer = styled.div`
    background-color: var(--isabelline);
    margin-top: 12vh;
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: 20%;
    height: calc(100vh - 12vh);
    gap: 30px;
    
    h2 {
        font-size: 34px;
    }

    label {
        font-size: 22px;
    }

    input {
        display: block;
        width: 100%;
        height: 30px;
        margin: 20px 0;
        border: none;
        padding-left: 10px;
        border-radius: 6px;
        font-size: 16px;
    }

    button {
        background: transparent;
        width: 100%;
        height: 30px;
        border: 2px solid var(--rosa-muito-claro);
        margin: 10px 0;
        cursor: pointer;
        border-radius: 6px;
        font-size: 16px;
        
    }

`


// /* border: solid 1px black; */
// ;
// /* margin: 10px; */
// width: 100%;
// max-width: 300px;
// height: 100vh;
// position: fixed;
// top: 0;
// right: 0;
// padding: 100px 20px 20px;
// display: flex;
// flex-direction: column;
// justify-content: space-between;

