import styled from 'styled-components';

export const Container = styled.nav`
    height: 80px;
   
`
export const Wrapper = styled.section`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    background-color: black;
    z-index: 3;
    height: 80px;
`
export const Search = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    margin-left: -70px;
`
export const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
    align-items: center;
    width: 70%;
    padding: 5px;
    background-color: white;
`
export const Input = styled.input`
    border: none;
    width: 700px;
   font-size: 1.2em;
`
export const Logo = styled.h1`
    font-weight: 900;
    text-align: center;
    color: white;
`

export const LogoNave = styled.div`
    flex: 1;
    font-size: 25px;
    margin-left: -100px;
`

export const Menu = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
export const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 20px;
    margin-right: 20px;
    color: white;
   
`
export const ButtonCarrinhoModal = styled.button`
border: none;
background-color: transparent;

`




