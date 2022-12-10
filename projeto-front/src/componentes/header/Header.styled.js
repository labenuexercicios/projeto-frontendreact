import styled from "styled-components"


export const HeaderContainer = styled.header`

display:flex;
width: 100%;
height: 20vh;
justify-content: space-between;
align-items: center;
background-color: #00ebff;



a{
    font-size: 3em;
    font-family: 'Orbitron', sans-serif;
    cursor: pointer;
    /* margin-right: 30px; */
    justify-content:flex-start ;

    img{
        height: 20vh;
        width: 15vw;
        border-radius: 50%;
        /* background-color: darkblue; */
        
    }
    
}



button {
    border-radius:7px ;
    border:none ;

    :hover {
        cursor:pointer;
        filter: brightness(1.1);
    }

    :active {
        filter: brightness(0.95);
    }

}

.grupo-botoes{
    display: flex;
    align-items: center;
    margin: 3px;
    padding: 0 1rem;
    gap:11px;
    background-color: #00ebff;
    img{
        width: 64px;
        height: 64px;
        background-color: darkgray;
        box-shadow: 0 0 10px gray;
        border-radius: 10px;
    }
   
}

.barra-de-pesquisa{
    /* margin-right: 35vw; */
    display:flex;
    
   

    button{
        height: 40px;
        width: 60px;
        border-radius: 20px;
        background-color: darkgray;
        :hover {
        cursor:pointer;
        filter: brightness(0.90);
    }

    :active {
        filter: brightness(0.85);
    }
       

    }
}

`