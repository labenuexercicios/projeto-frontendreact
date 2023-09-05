import styled from "styled-components"

export const Aside = styled.aside`
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 90%;
    min-height: 10vh;
    height: fit-content;
    border-radius: 9px;
    min-width: 350px;

    input{
        width: 150px;
        border: none;
        margin: 2px 0 ;
        padding: 10px;
        border-radius: 9px;
    }
`;

export const AsideTitle = styled.span`
    display: block;
    color: rgba(0, 0, 0, 0.4);
    font-size: 1.25rem;
    font-weight: bold;
    margin: 0 0 10px 10px;
`;

export const AsideAmount = styled(AsideTitle)`
    font-size: 1rem;
    font-weight: normal; 
    margin-left: 10px ;
`;

export const FindPrice = styled.div`
    margin: 0;
    display: flex;
    gap: 5px;
    
    /* alterado por onta do select personalizado */
    align-items: center;
    align-items: baseline;
    height: 60px;

    input{
        width: 85px;
        height: 25px;
        background-color: #f2f2f2;
    };

    nameSearch{
        background-color: #ff0000;
    }
`;

export const BoxArrows = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 130px;
    height: fit-content;

    span{
        text-align: left;
        font-size: 0.8rem;
    }

    select{ 
        cursor: pointer;   
        background-color: #ebe9e9 ;
        transition-duration: 500ms;
        border: none;
        outline: none;
        border-bottom: #666666;
        border-radius: 4px;      
       
    }
    `

