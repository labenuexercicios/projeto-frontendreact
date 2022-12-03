import styled from "styled-components";

export const ContainerAddCard = styled.div`
    /* border: 2px solid white; */
    display: flex;
    justify-content: space-around;
    height: 50vh;
`
export const ContainerForm = styled.form`
  /* border: 2px solid red; */
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 25vw;
  gap: 20px;
  position: relative;
`
export const ContainerTypeCard = styled.div`
    /* border: 2px solid yellow; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 25vw;
  gap: 20px;

  div{
    display: flex;
    gap: 16px
  }

  img{
    width: 4vw;
    height: 4.5vh;
  }
`
export const LabelInput = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  flex-direction: column;
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

export const InputCvv = styled.input`
    width: 3vw;
    color: white;
    border: none;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    height: 4vh;
`

export const SelectExpired = styled.div`
    /* border: 2px solid yellowgreen; */
    display: flex;
    flex-direction: column;

    select{
        /* border: 2px solid purple; */
        background-color: rgba(255, 255, 255, 0.1);
        color: white;
        /* border: none;         */
    }
`

export const Select = styled.div`
/* border: 2px solid orange; */
    display: flex;
    gap: 8px;
`

export const ButtonAddCard = styled.button`
  color: white;
  width: 15vw;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 4px;
  height: 4vh;
  bottom: 0;
  right: 0;
`