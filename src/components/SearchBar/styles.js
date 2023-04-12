import styled from "styled-components";

export const SearchContainer = styled.div`
    background: var(--light-blue);
    display:flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    padding:0 20px;
    border-radius: 5px;
    margin-bottom:30px;
    
    label {
        color: var(--beige) !important;
    }

    input {
        line-height: 30px;
        border-radius: 10px;
        margin-left:10px;
    }

    select {
        line-height: 30px;
        border-radius: 10px;
        margin-left:10px;
        height: 32px;
    }

    button {
        position:absolute;
        right: 4px;
        top:1px;
        width: 40px;
        height: 30px;
        background: none;
        border: none;
        font-size:20px;
        color: var(--details);
        cursor: pointer;
    }

    button:hover{
        transition:0.2s;
        transform:scale(1.2);
        color: #2653a7;
    }

    button:active{
        transition:0.2s;
        transform:scale(1);
        color: #fff;
    }

    .searchBar {
        position:relative;
    }
`