import {styled} from "styled-components";

export const NavStyle = styled.nav`
background-color: white;
display: flex;
justify-content: space-around;
height: 50px;
position: fixed;
top: 0;
right: 0;
left: 0;
button{
    font-size: 20px;
    color:black;
    background-color: transparent;
    border: transparent;
    }
button:hover{
    color: red;
    background-color: blue;
}
`
export const Div = styled.div`
    display: flex;
    margin-top: 50px;
`
export const Img = styled.img`
    width: 50vw;
    height: 500px;
`