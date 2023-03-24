import styled from "styled-components";
import { MdClose } from "react-icons/md"

export const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: #00000047;
  z-index: 10000;
  transition: all 0.3s ease 0s;
  cursor: default;
  visibility: visible;
`;

export const ModalWrapper = styled.div`
    width: 45rem;
    height: 30rem;
    box-shadow: 0 5px 16px rgba(0, 0, 0.2);
    background: #ffff;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;
    margin-top: 8rem;
    margin-left: 27rem;
`;

export const ModalImg = styled.img`
  width: 20rem;
  height:20rem;
  margin-top: 5rem;
  border-radius: 10px 0 0 10px;
  background: #ffff;
`;

export const ModalContent =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;

    p {
        margin-bottom: 1rem;
    }

    button {
        padding: 10px 24px;
        background: #141414;
        color: #fff;
        border: none;
    }
`
export const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 17rem;
  height: 27.5rem;
  justify-content: space-between;
  align-items: left;
  border: #810541 1px solid;
  border-radius: 1.5rem;
  padding: 1rem;
  color: #2B1B17;
  background-color: #FBFBF9;

  @media screen and (max-width: 319px) {
    width: 15rem;
  }

  h1 {
    color: #C25A7C;
    font-size: 2rem;
    line-height: 2rem;
    margin-top: 0.35rem;
  }

  h2 {
    font-size: 1.1rem;
    margin-top: 1rem;
    line-height: 1.3rem;
    cursor: pointer;
    color: #810541;

    :hover {
      color: #7E354D;
    }
  }
`;

export const Button = styled.button`
  width: 15rem;
  background-color: #550A35;
  border-radius: 0.5rem;
  padding: 0.5rem;
  color: #fff;
  margin: 0.5rem 0;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  :hover {
    background-color: #810541;
  }

  :active {
    background-color: #67568c;
  }
`;