import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: center;
  position: absolute;
  background-color: #272c99;

  .logo-group{
    display: flex;
    align-items: center;
  }

  .checkout-steps-cart, .checkout-steps-identify{
    background-color: #ffd100;
    border-radius: 30px;
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    margin-left: 150px;
  }

  .checkout-steps-identify{
    background-color: white;
    margin-left: 8px;
  }

  p{
    color: white;
    margin-right: 8px;
  }
`

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  text-align: center;
  color: white;
  padding-right: 5px;
`

export const Main = styled.div`
  margin-top: 15vh;
  padding-bottom: 70px;
  background-color: #f7f7f7;
  
  .shopping-continue{
    display: flex;
    gap: 10px;
    font-weight: 600;
    font-size: 25px;
    margin: 20px 16px;
    color: black;

    :hover{
      cursor: pointer;
    }
  }

  section{
    display: flex;
    gap: 2rem;
    padding-left: 16px;

    .cart{
      display: flex;
      flex-direction: column;

      .header-cart-section{
        margin: 20px 0px;
        color: black;

        h3{
          font-size: 20px;
          font-weight: 600;
        }

        p{
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 27px;
          color: black;
        }
      }
    }
  }

  .cart-products{
    width: 70vw;
    height: 100%;
    border: 1px solid #e3e3e3;
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
    border: 1px solid rgba(var(--lightGrey), 1);
    border-radius: 15px;
    background-color: white;

    .header-cart-products{
      display: flex;
      justify-content: center;
      gap: 150px;
      margin-left: 400px;
      margin-right: 50px;
      padding: 20px 0px;
      font-weight: 600;
      color: black;
    }
  }

  .total-products{
    display: flex;
    flex-direction: column;
    width: 50vh;
    background-color: black;
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

    hr{
      margin-top: 20px;
      margin-bottom: 15px;
      border: 1px solid #2c3ab7;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }

  .card-type{
    display: flex;
    gap: 15px;
  }

  input[type="text"]{
    background-color: #383838;
    filter: brightness(1.1);
    border: none;
    width: 100%;
    height: 40px;
    border-radius: 6px;
    outline: none;
    color: white;
    padding-left: 10px;
}

  input[type="number"]{
    color: white;
    padding-left: 10px;
  }

  input::placeholder{
    color: white;
    font-size: 13px;
    font-weight: 500;
  }

  .payment-inputs{
    display: flex;
    gap: 10px;
    
    input{
      background-color: #383838;
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
  background-color: #272c99;
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
    background-color: #2c3ab7;
  }
` 
