import styled from 'styled-components'

export const ItensStyle = styled.div`

    display: flex;
    align-items: center;
    padding: 1vw;
    margin: 5px 1vw;
    display: grid;
    grid-template-columns: 5vw 11.5vw;
    width: 16vw;
    height: 4.5vw;
    /* background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,0.8) 40%, rgba(255,255,255,0) 100%); */
    border: 2px solid #85F83F;
    border-right: 2px solid #85F83F;
    
    p {
        font-size: 1.1vw;
        color: white;
    }

    h5 {
        color: white;
    }

    img {
        width: 4.5vw;
        height: 4.5vw;
        border-radius: 4px;
    }

    #etiqueta {
        display: flex;
        flex-direction: column;
        align-items: left;
    }

    #label {
        display: flex;
        justify-content: space-between;
        margin-top: 0.7vw;
        align-items: center;
    }

    transition: transform 0.3s ease-in-out;

    &:hover {
    transform: scale(1.05);
    }
    
    
`

export const Button = styled.button`

    
    border-radius: 2.1vw;
    height: 2.1vw;
    width: 2.1vw;
        
    border: none;
    background-color: #83A3C9;
    
    p {
    font-size: 2.5vw;
    margin-top: -0.9vw;
    color: #5E7796;
    }

    :hover {
        background-color: #5E7796;
        p {
            color: white;
        }
    }

  
`

export const Lista = styled.div`
    display: flex;
    flex-wrap: wrap;
`