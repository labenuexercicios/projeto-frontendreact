import styled from "styled-components";


export const BoxSelect = styled.div`
    width: 100%;
    padding: 5px;
    border-radius: 4px;
    height: 150px;
    z-index: 9999;
    
    ul{
        width: 100%;
        border-left: 1px solid #e0e0e0;
        border-right: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
        border-radius: 0 0 4px 4px;
        height: fit-content;
        text-align: left;        
        overflow: ${(props) => (props.isVisible ? "visible" : "hidden")}; 
        visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};            
        pointer-events: ${(props) => (props.isVisible ? "auto" : "none")};      
    }

    li{
        width: 100%;
        list-style: none;
        cursor: pointer;    
        height: 20px;
        line-height: 20px;
        padding-left: 5px;
        font-size: .8rem;
        background-color: #e63946;
        color: #ffffff;
        :hover{
            background-color: #ffffff;
            color: #ef7d12;
        }
    }

    button{
        width: 100%;
        background-color: #ffffff;
        height: 22px;
        line-height: 11px;
        border: 1px solid #e0e0e0;
        border-radius: 4px 4px 0 0 ;
        text-align: left;
        padding: 5px;
    }

`


