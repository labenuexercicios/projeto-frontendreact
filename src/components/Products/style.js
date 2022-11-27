import styled from "styled-components";

export const Sales = styled.section `
    width: 30%;
    height: 80%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    gap: 5px;

    img{
        width: 6    0%;
    }

    p:nth-child(even){
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');
        font-family: 'Poppins', sans-serif;
        width: 80%;
    }

    p:nth-child(odd){
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600;700&display=swap');
        font-family: 'Poppins', sans-serif;
        
    }

    article{
        display: flex;
        font-weight: 300;
    }

`