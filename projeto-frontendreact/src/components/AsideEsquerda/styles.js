import styled from "styled-components";

// export const AsideEsquerdaStyled = styled.aside`
// border: 1px solid black;
// height: 100vh;
// align-items: center;
// font-size: 30px;
// `

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    gap: 16px;
    color: white;
`

export const Input = styled.input`
    //width: 100%;
    //padding: 8px;

    float: left;
    background-color: transparent;
    padding-left: 5px;
    font-size: 15px;
    border: none;
    height: 50px;
    width: 151px;
`

export const BotaoPesquisa = styled.button`
border: none;
float: right;
height: 48px;
border-radius: 10px;
width: 120px;
font-weight: bold;
background: #5F9EA0;
font-size: 18px;

&:hover {
  font-size: 21px;
}

&:active {
  background-color: white;
  font-size: 20px;
}
`

export const SectionBusca = styled.section
`
  display: flex;
  margin: 20px auto;
  background-color: #E0EEEE;
  border: solid 1px #5F9EA0;
  border-radius: 10px;
  width: 280px;
  height: 50px;
`

export const ImgLupa = styled.img
`
border-radius: 10px;
  float: left;
  width: 55px;
  height: 48px;
`