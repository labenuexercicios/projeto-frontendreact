import styled from "styled-components";

export const HeaderContainer = styled.header`

  display: flex;
  height: 60px;
  border: 8px solid lightblue;
  justify-content: space-between;
  background-color: lightblue;

  .buttonGroup{
    display: flex;
    align-items: center;
    justify-content: space-between;
    
  }
  button{
    border: none;
    background-color: lightblue;
    width: 70px;
    height: 50px;
    margin: 0 4px;

    :hover{
      cursor: pointer;
      filter: brightness(1);
    }
    :active{
      filter: brightness(0.65);
    }
  }
`;
