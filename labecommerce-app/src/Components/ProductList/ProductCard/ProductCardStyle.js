import styled from 'styled-components';

export const Card = styled.div`
    display: grid;
    grid-template-rows: 2fr 1fr;
    justify-content: center;
    align-items: center;
    margin: 20px;
    border: 1px solid #000;
    width: 18vw;

    
    img{
        width: 200px;
    }

`
export const Dados = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    
    button{
        width: 150px;
        margin: 20px;
    }
`