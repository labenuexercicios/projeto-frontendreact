import styled from "styled-components";

export const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000047;
  z-index: 10000;
  transition: all 0.3s ease 0s;
  cursor: default;
  visibility: visible;
  display: ${(props) =>
    props.cartIsOpen === "-120%" || props.menuMobileIsOpen === "-120%"
      ? "none;"
      : "block;"};

  @media screen and (max-width: 780px) {
    display: none;
  }
`;