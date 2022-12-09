import styled from "styled-components";

export const HeaderContainer = styled.section`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: rgb(0, 96, 177);

  .search-group{
    position: relative;

    input {
      min-width: 500px;
      height: 5vh;
      border: white;
      border-radius: 10px;
      box-shadow: rgb(0 0 0 / 12%) 0px 10px 15px;
      outline: none;
    }

    .search-input{
      padding-left: 35px;
    }

    img{
      position: absolute;
      left: 0;
      padding: 9px 8px;
      color: #aaa;
      transition: 0.3s;
      height: 100%;
    }
  }

  .nav-bar {
    display: flex;
    align-items: center;
    gap: 10px;

    p{
      font-size: 16px;
      font-weight: 600;
      padding-left: 10px;
      color: white;
    }
  }

  .logo-header {
    display: flex;
    align-items: center;

    :hover{
      cursor: pointer;
    }
  }

  button{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
    background-color: rgb(0, 96, 177);
    border: none;
    color: #ffd100;

    :hover{
      cursor: pointer;
      color: white;
    }

    .cart-badge{
      position: relative;
      margin-bottom: 30px;
      font-size: 0.8rem;
    }
  }
`;

export const Logo = styled.h1`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  text-align: center;
  color: white;
  padding-right: 5px;
`;