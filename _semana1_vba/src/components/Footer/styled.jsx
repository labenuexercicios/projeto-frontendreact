import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  background-color: #2d3231;
  justify-content: space-around;
  color: white;
  align-items: center;
  height: 180px;
  padding: 0 30px;
  position: relative;
  left: 0;
  width: 100%;
  bottom: 0;

  img {
    height: 80px;
  }

  .redes {
    display: flex;
    align-items: center;
  }

  .info-site {
    display: flex;
    flex-direction: column;
    list-style: none;
    justify-content: flex-start;
  }
  .lista-info {
    display: flex;
    justify-content: space-evenly;
    gap: 20px;
    line-height: 30px;
  }
`;
