import styled from 'styled-components'


export const Search = styled.aside`

    padding: 1em;
    display: flex;
    
       
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: left;


    label {
        font-size: 14px;
        padding: 10px 0;
        color: #6C7FFF;
    }

    input {
        width: 100%;
        border: 1px solid grey;
        border-radius: 4px;
    }

    hr {
        color: grey;
    }

`

export const Button = styled.button`
    width: 6em;
    border-radius: 4px;
    background-color: #6C7FFF;
    color: white;
    border: 0;
    padding: 4px;
    margin-top: 10px;

`