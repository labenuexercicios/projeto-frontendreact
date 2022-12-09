import styled from "styled-components";

export const PayUserInfo = styled.div`
  /* border: 2px solid yellow; */
  background-color: rgba(0, 0, 0, 0.729);
  min-height: 16vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 24px;
  color: white;
  padding: 16px 8px;
  width: 100%;
`
export const HeaderPayment = styled.div`
  /* border: 2px solid red; */
  display: flex;
  justify-content: space-between;
  align-self: flex-start;
  width: 100%;
`
export const Title = styled.h3`
  /* border: 2px solid green; */
  width: 50%;
  display: flex;
  align-self: flex-start;
  `
export const ButtonChange = styled.button`
/* border: 2px solid red; */
background-color: transparent;
color: white;
border: none;
font-size:16px;
display: flex;
align-self: flex-start;
width: 5%;
cursor: pointer;

:hover{
color: orange;
}
`
export const InfoCardExist = styled.p`
/* border: 2px solid blue; */
color: white;
display: flex;
justify-content: space-between;
width: 60%;
gap: 8px;
padding-left: 16px;
`
export const CardInfo = styled.div`
  /* border: 2px solid yellowgreen; */
  width: 15vw;

  display: flex;
  justify-content: space-between;

  img{
    width: 2vw;
    height: 2.5vh;
  }
`
export const BillingInfo = styled.div`
  /* border: 2px solid red; */
  p{
    color: #c559df;
  }
`
export const CardPaymentAdd = styled.div`
  /* border: 2px solid yellow; */
  background-color: rgba(0, 0, 0, 0.729);
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  color: white;
  padding: 16px 8px;
  padding-right: 18px;
`
export const ButtonClose = styled.button`
    background-color: transparent;
    color: white;
    border: none;
    font-size:16px;
    display: flex;
    width: 5%;
    cursor: pointer;

    :hover{
    color: orange;
  }
`
export const ExistingCard = styled.div`
  /* border: 2px solid yellow; */
  display: flex;
  justify-content: space-between;
  margin: 0 35px;
  align-items: center;
  

  img{
    width: 2vw;
    height: 2.5vh;
  }
`
export const TypeOfCard = styled.div`
  /* border: 2px solid white; */
  display: flex;
  width: 16vw;
  gap: 8px;
`
export const RemoveCard = styled.img`
  /* border: 2px solid pink; */
  cursor: pointer;
`
export const DateExp = styled.div`
  text-align: end;
`
export const TypingCard = styled.div`
  /* border: 2px solid yellow; */
  display: flex;
  justify-content: space-between;
  margin: 0 35px;
  align-items: center;
  
  img{
    width: 2vw;
    height: 2.5vh;
  }
`
export const NameCard = styled.p`
  /* border: 2px solid greenyellow; */
  width: 17.5vw;
`
export const LinhaShort = styled.div`
  border: 1px solid gray;
  margin: 0 35px;
`
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
  cursor: pointer;
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
export const CartPageStyle = styled.div`
    display: flex;

`
export const ContainerCart = styled.main`
    /* border: 2px solid red; */
    min-height: 83vh;
    width: 80%;
    display: flex;
    flex-direction: column;
`
export const CardUserInfo = styled.div`
  /* border: 2px solid yellow; */
  background-color: rgba(0, 0, 0, 0.729);
  height: 16vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  padding: 16px 8px;
  width: 100%;
`
export const InfoCard = styled.p`
/* border: 2px solid blue; */
color: white;
display: flex;
flex-direction: column;
width: 60%;
gap: 8px;
`
export const HeaderProduct = styled.div`
  /* border: 2px solid red; */
  background-color: rgba(0, 0, 0, 0.729);
  display: flex;
  justify-content: space-between;
  padding-right: 8px;
  color: white;
`
export const FinalCart = styled.div`
    /* border: 2px solid blue; */
    width: 20vw;
    display: flex;
    flex-direction: column;
    padding: 16px;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.300);
    color: white;
    text-align: center;

    div{
        display: flex;
        flex-direction: column;
        gap: 4vh;
        align-items: center;
    }

    button{
        width: 10vw;
        height: 4vh;
        background-color: green;
        border: none;
        border-radius: 8px;
        color: whitesmoke;
        box-shadow: 2px 4px 26px -3px rgba(255,255,255,1);
        cursor: pointer;
    }

    img{
        width: 15vw;
    }
`