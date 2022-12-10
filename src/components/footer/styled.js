import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-top: lightgray;
  border-width: 1px;
  border-style: solid;
  border-left: none;
  border-right: none;
  border-bottom: none;
  span {
    font-weight: bold;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  width: 80px;
  justify-content: space-between;
  img {
    width: 30px;
  }
`;

export const FooterBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 55%;
`;
