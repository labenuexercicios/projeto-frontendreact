import styled from "styled-components";

export const MenuFilter = styled.div`
  padding: 10px;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-left: -65px;

  .filter-name-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;

    @media screen and (max-device-width:450px) {
    display: none;
  }
  }

 .input{
    padding: 5px;
    border-radius: 8px;
    border: 0.5px solid grey;

    @media screen and (max-device-width:450px) {
    width: 30vw;
  }
  }

  .select{
    padding: 5px;
    border-radius: 10px;

    :hover {
      cursor: pointer;
      filter: brightness(0.9);
    }
  } 

  @media screen and (max-device-width:450px) {
    margin: 65px 2px 2px 2px;

  }
`;

export const ImageFilter = styled.img`
  width: 38px;
`;
