import styled from "styled-components"; 

export const ButtonOrderCtn = styled.div`
display: flex;
flex-flow: row wrap;
width: 100%;
height: 40px;
justify-content:center;
margin: 5px auto;
`
export const ButtonOrder = styled.button`
width: 140px;
background: ${(props)=> props.id === "b1" ? "red" : "green"}};
color: white;
transition-duration: 25ms;
border-radius: 15px;
padding: 0.32rem;
margin: 20px;
:hover{
    background: gold;

}
`

