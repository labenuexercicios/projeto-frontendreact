import styled from "styled-components";

// export const AsideEsquerdaStyled = styled.aside`
// border: 1px solid black;
// height: 100vh;
// align-items: center;
// font-size: 30px;
// `

export const Form = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 20px;
    gap: 16px;
    color: black;

    @media screen and (max-device-width: 700px) {
  display:none;
}

`

export const Input = styled.input`
    float: left;
    background-color: transparent;
    padding-left: 5px;
    font-size: 12px;
    border: none;
    height: 50px;
    width: 9vw;
    @media screen and (max-device-width: 1000px) {
    width: 18vw;
}
    
`

export const InputMaxMin = styled.input`
    float: left;
    background-color: transparent;
    padding-left: 5px;
    font-size: 15px;
    border: none;
    height: 50px;
    width: 2000px;
`


export const BotaoPesquisa = styled.button`
border: none;
float: right;
height: 40px;
border-radius: 10px;
width: 10vw;
font-weight: bold;
background: #5F9EA0;
font-size: 14px;

@media screen and (max-device-width: 1000px) {
    width: 18vw;
}

&:hover {
  font-size: 17px;
}

&:active {
  background-color: white;
  font-size: 18px;
}
`

export const SectionBusca = styled.section
`
  display: flex;
  align-items: center;
  margin: 20px 5px 20px 5px;
  background-color: #E0EEEE;
  border: solid 1px #5F9EA0;
  border-radius: 10px;
  width: 18vw;
  height: 41px;
  @media screen and (max-device-width: 1000px) {
    width: 30vw;
}
`

export const ImgLupa = styled.img
`
border-radius: 10px;
  float: left;
  width: auto;
  height: 40px;
  @media screen and (max-device-width: 1000px) {
    display:none;
}
`

export const FixaEsquerda = styled.div
`
position: fixed;
`

export const PStyle = styled.p
`
color: white;
text-shadow: -2px 0 black, 0 2px black,
      2px 0 black, 0 -2px black;
font-size: 17px;
padding-left: 5px;
padding-top: 10px;
@media screen and (max-device-width: 1000px) {
  font-size: 2vw;
}
`