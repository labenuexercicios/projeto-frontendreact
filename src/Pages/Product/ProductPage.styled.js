import styled from "styled-components"
import background from '../../assets/sci-fi-deep-space-background-loop-free-video.jpeg';

export const CardsContainer = styled.div`
  border: 2px solid red;
  min-height: 86vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 16px;
  background-image: url(${background});
  background-size: cover;
`