import styled from 'styled-components'

export const HeaderStyled = styled.header`
    height: 15vh;

    text-align: center;
    display: grid;
    grid-template-columns: 1fr 6fr 1fr;


  
    img {
        height: 100px;
    }

    /* ul {
        display: flex;
        justify-content: space-between;
        list-style: none;
        
    } */
/* 
    a {
        text-decoration: none;
        color: grey;
    } */


`

// export const HeaderNav = styled.header`
//     background-color: #6C7FFF ;
//     height: 40px;
//     display: flex;
//     justify-content: space-between;
//     padding: 0 10em;
//     align-items: center;


//     li {
//         display: flex;
//         justify-content: space-around;
//     }

//     a {
//         text-decoration: none;
//         color: white;
//     }

//     a:hover{
//         color: #A7E657;
//     }

// `

export const Pesquisa = styled.form`
display: flex;
height: 5vh;
justify-content: center;
position: relative;
top: 5vh;
left: -3vw;


input {
    border: 1px solid grey;
    border-radius: 6px;
    padding: 0 1vw;
    width: 40vw;
}

input:hover {
    border: 2px solid #A7E657;
}

i {
    position: relative;
    top: 1vh;
    right: 4vh;
}

transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }


`