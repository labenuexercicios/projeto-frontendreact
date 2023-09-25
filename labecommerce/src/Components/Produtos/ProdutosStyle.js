import styled from 'styled-components';

export const StyledProdutos = styled.div`
    font-family: 'Mina', sans-serif;
    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }

    .titulos {
        height: 0;
        font-size:2rem;
        padding: 2rem 0 0;
        color: #66347F;
    }

    .produtos {
        padding: 5rem 2rem;
        margin: 0 3rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(25rem,2fr));
        gap: 1rem 2rem;
        box-sizing: border-box;
    }

    .produto {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        box-shadow: 1px 10px 10px 2px rgba(55, 48, 107, 0.2);
        border: 6px solid transparent;
        border-radius: 5px;
        pointer-events: auto;
        transition: border 0.3s ease-in-out;
        cursor: pointer;
        width: 100%;
    }

    .produto:hover {
        border: 2px dashed #9E4784;
    }

    .produto_img {
        width: 310px;
    }

    .info_produto {
        padding: 1rem;
        text-align: center;
    }

    .info_produto h1 {
        font-weight: 600;
        font-size: 1.5rem;
        color: #66347F;
        margin: 0;
    }

    .info_produto p {
        font-weight: 700;
        color: #9E4784;
        text-transform: uppercase;
        font-size: 18px;
        margin: 0;
    }

    .info_produto .valor {
        font-size: 1.5rem;
        color: #66347F;
        margin: 0;
    }

    .botao {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .botao button {
        background-color: transparent;
        width: 60%;
        color: #9E4784;
        border: none;
        outline: 0;
        cursor: pointer;
        border-radius: 2px;
        text-decoration: none;
        font-family: 'Mina', sans-serif;
        font-size: 100%;
        font-weight: 600;
        transition: background-color 0.3s ease-in-out;
        padding: 0.5rem;
    }

    .botao button:hover {
        background-color: #D27685;
        color: white;
    }

    .botao div {
        background-color: #9E4784;
        text-align: center;
        align-items: center;
        border-radius: 5px;
        width: 30%;
    }


    .btn:hover {
        font-weight: 600;
        background-color: transparent;
        transition: background-color 0.3s ease-in-out;
        color: #9E4784;
    }
    .btn {
    background-color: #9E4784;
    width: 60%;
    color: white;
    border: none;
    outline: 0;
    cursor: pointer;
    border-radius: 2px;
    text-decoration: none;
    font-family: 'Mina', sans-serif;
    font-size: 100%;
    transition: background-color 0.3s ease-in-out;
    padding: 0.5rem;
    text-align: center; 
    align-self: flex-end;
}

/*---------------------MEDIA------------------------------*/
@media only screen and (max-width:600px){
    header ul{
        display: none;
    }
}
`;
