import styled from 'styled-components'

export const HeaderStyled = styled.header`
    background-color: white ;
    height: 100px;
    position: sticky;
    top: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
  
    img {
        height: 100px;
    }

    ul {
        display: flex;
        justify-content: space-between;
        list-style: none;
        
    }

    a {
        text-decoration: none;
        color: grey;
    }


`

export const HeaderNav = styled.header`
    background-color: #6C7FFF ;
    height: 40px;
    display: flex;
    justify-content: space-between;
    padding: 0 10em;
    align-items: center;


    li {
        display: flex;
        justify-content: space-around;
    }

    a {
        text-decoration: none;
        color: white;
    }

    a:hover{
        color: #A7E657;
    }

`

export const Pesquisa = styled.form`
display: flex;
height: 30px;


input {
    border: 1px solid grey;
    border-radius: 4px;
    padding: 0 10px;
    width: 20em;
}

img {
    height: 50px;
    position: relative;
    top: -10px;
    right: 50px;

}


`