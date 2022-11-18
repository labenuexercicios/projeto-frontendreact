import styled from "styled-components";

export const MenuFilter = styled.div`
  padding: 10px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  .filter-name-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }

  .select {
    padding: 10px;
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
