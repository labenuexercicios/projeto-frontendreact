import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f3f3f3;
`;

export const Main = styled.div`
  font-weight: 600;
  font-size: 18px;
  margin-top: 15vh;
  background-color: #f3f3f3;
  margin-bottom: 70px;
  
  .shopping-continue{
    font-weight: 600;
    font-size: 25px;
    margin: 20px 16px;
  }

  .cart-section{
    display: flex;
    gap: 2rem;
    padding-left: 16px;
  }

  .cart-products{
    width: 70vw;
    height: 100%;
    border: 1px solid #e3e3e3;
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
    border: 1px solid rgba(var(--lightGrey), 1);
    background-color: #fff;
    border-radius: 15px;
  }

  .total-products{
    display: flex;
    flex-direction: column;
    width: 50vh;
    background-color: rgb(0, 96, 177);
    border-radius: 15px;
    color: #FEFCFC;
    padding: 20px 20px;
    height: 70vh;

    h2{
      font-size: 22px;
    }

    p, span{
      font-size: 16px;
      font-weight: 500;
      padding-top: 10px;
    }

    span:nth-child(2n){
      padding-left: 40px;
    }
  }

  hr{
    margin-top: 20px;
    margin-bottom: 15px;
    border: 1px solid rgb(0,96,177);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .card-type{
    display: flex;
    gap: 15px;
  }

  input[type="text"]{
    background-color: rgb(0, 96, 177);
    filter: brightness(1.1);
    border: none;
    width: 100%;
    height: 40px;
    border-radius: 6px;
    outline: none
}

  input::placeholder{
    color: white;
    font-size: 13px;
    font-weight: 500;
    padding-left: 10px;
  }

  .payment-inputs{
    display: flex;
    gap: 10px;
    
    input{
      background-color: rgb(0, 96, 177);
      filter: brightness(1.1);
      border: none;
      width: 100%;
      height: 40px;
      border-radius: 6px;
      outline: none;
    }

    input[type="month"]{
      color: white;
    }
  }
`
export const Checkout = styled.button`
  background-color: #43b02a;
  color: white;
  outline: none;
  width: 300px;
  height: 50px;
  border: #43b02a;
  border-radius: 12px;
  margin-top: 10px;
  font-weight: 600;
  font-size: 16px;
  width: 100%;

  :hover{
    cursor: pointer;
    background-color: rgb(7, 118, 0);
  }
` 
