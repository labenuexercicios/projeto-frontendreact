import styled from "styled-components";

export const MenuFilter = styled.div`
  padding: 10px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-left: -100px;

  .filter-name-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }

 .input{
    padding: 5px;
    border-radius: 8px;
    border: 0.5px solid grey;
  }

  .select{
    padding: 5px;
    border-radius: 10px;

    :hover {
      cursor: pointer;
      filter: brightness(0.9);
    }
  }

 
`;

export const ImageFilter = styled.img`
  width: 40px;
`;
