import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  height: 78vh;
  width: 100vw;
  position: relative;
`

export const ImgBackground = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`