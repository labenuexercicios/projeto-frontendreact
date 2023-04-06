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
  width: 52rem;
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

export const ModalContent =styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  text-align: justify;
  text-justify: inter-word;

  h2 {
    width: 30rem;
    padding-bottom: 2rem;
    text-align: center;
    
  }

  h3 {
    text-align: center;
    color: #C25A7C;
    margin-bottom: 1rem;
  }

  h5 {
    text-align: center;
    margin-bottom: 1rem;
  }

  p {   
                                                               
    margin-bottom: 2rem;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }

  img {
    width:15rem;
    height: 15rem;
    margin-left: 2rem;
    border: 3px solid #810541;
    border-radius: 1.5rem;
    object-fit: contain;
  }

  div {
    display: table-column;
    margin-left: 2rem;
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