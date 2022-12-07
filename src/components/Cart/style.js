import styled from "styled-components";

export const CartSection = styled.section `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');
    margin-left: auto;
    width: 20%;
    font-family: 'Poppins', 'Times New Roman', Times, serif;
    min-height: 100%;
    height: 100;
    border-top-left-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.20) 0px 1px 15px;
    h6{
        margin-top: 8px;
    }
    header{
        display: flex;
        justify-content: center;
        h6{
            font-weight: 700;
            cursor: pointer;
        }
    }

    article:nth-child(3){
        margin-top: 20px;
        padding-left: 10px;
        font-size: 12px;
        color: #938989;
    }
    
    display: flex;
    flex-direction: column;
`