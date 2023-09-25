import { styled } from "styled-components";

export const ItemsContainer = styled.section`
  width: 100%;
  height: 100px;
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  justify-content: space-around;

  & .item-image {
    width: 50px;
    height: 50px;

    & img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }
  }

  & .item-text {
    width: 100px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    overflow: hidden;

    & h3 {
      font-size: 1.2rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      height: 20px;
      line-height: 20px;
      padding: 0 2px;
      width: 100%;
    }
  
      & p {
        font-size: 1.2rem;
      }
  
  }

  & button {
    width: 50px;
    height: 50px;
    color: var(--rosa-medio);
    font-size: 1.6rem;
    border: none;
    background: none;
    cursor: pointer;
    /* position: absolute;
    top:0px;
    right: 0; */
  }
`;
