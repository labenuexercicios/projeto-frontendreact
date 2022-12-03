import styled from "styled-components"


export const CardLogin = styled.div`
  /* border: 2px solid yellow; */
  background-color: rgba(0, 0, 0, 0.729);
  box-shadow: 4px 6px 26px -3px rgba(255,255,255,1);
  border-radius: 12px;
  width: 25vw;
  height: 64vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8vh;
  color: white;
  position: relative;
`

export const ImageLogin = styled.img`
/* border: 2px solid white; */
  height: 10vh;
  width: 5vw;
  position: absolute;
  top: 5vh;
  left: 9.5vw;
`

export const HeadForm = styled.div`
  /* border: 2px solid blue; */
  color: white;
  width: 20vw;
  text-align: center;
`
export const FormControl = styled.form`
  /* border: 2px solid red; */
  color: white;
  display: flex;
  flex-direction: column;
  height: 14vh;
  justify-content: center;
  width: 20vw;
  gap: 20px;

`
export const FormLabel = styled.label`
  /* border: 2px solid white; */
`
export const Input = styled.input`
  color: white;
  border: none;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  height: 4vh;

`

export const CadastrarPassword = styled.div`
  /* border: 2px solid pink; */
  color: white;
  width: 20vw;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
`

export const ButtonSingIn = styled.button`
  /* border: 2px solid red; */
  color: white;
  width: 20vw;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 4px;
  height: 8vh;
`

export const LabelInput = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  flex-direction: column;
`