import styled from 'styled-components'


export const Search = styled.aside`

    padding: 1vh;
    display: flex;
    
       
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 20px;

    i {
        margin-right: 8px;
    }

    label {
        font-size: 1.5vw;
        padding: 1vw;
        color: #3CFFF3;
        margin-bottom: 10px;
    }

    input {
        width: 100%;
        border: 1px solid grey;
        border-radius: 4px;
        transition: transform 0.3s ease-in-out;
        margin-top: 6px;
    }

    
    
    input:hover {
    border: 2px solid #A7E657;
    transform: scale(1.05);
    }

    

`