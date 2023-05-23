/* import styled from "styled-components"; */

export const ContainerHeader = styled.header`
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 1;
  background: radial-gradient(circle at 99.06% 50%, #ce48ff 0, #7c34ed 25%, #081db2 50%, #000977 75%, #000045 100%);
  display: flex;
  justify-content: space-between;
  
`;

export const ContainerInput = styled.div`
  display: flex;
  gap: 0.9125rem;

  input {
    color: white;
    border: 0.125rem solid #8707ff;
    border-radius: 0.625rem;
    padding: 0.625rem 1.5625rem;
    background: transparent;
    max-width: 31.25rem;
    height: 2.8125rem;
    margin-top: 0.1563rem;
    outline: none;
    
  }

  label{
    margin-top: 0.825rem;
    margin-left: 30.875rem;
    font-size: 1.25rem;
  }
`;

export const ButtonPesquisar = styled.button`
  width: 5vw;
  height: 6vh;
  border-radius: 0.625rem;
  border: none;
  padding: 0.3125rem;
`;

export const ContainerIcons = styled.div`
  display: flex;
  gap: 1.25rem;
  margin-right: 1.9625rem;
  margin-top: 0.625rem;

  .icon-cart {
    filter: invert(100%);
  }

  .icon-cart:hover {
    cursor: pointer;
  }

  .cartQuantity {
    position: relative;
  }

  .cartLength {
    position: absolute;
    font-size: 0.7rem;
    background-color: #8606fe;
    color: #fff;
    border-radius: 50%;
    top: 0;
    width: 1.425rem;
    height: 1.0925rem;
    padding: 0;
    right: -0.625rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerSidebar = styled.div`
  color: white;
  background: rgba(3, 125, 144, 0.4); 
  position: fixed;
  height: 70%;
  top: 0rem;
  right: 0rem;
  width: 28.125rem;
  right: ${(props) => (props.sidebar ? "0" : "-100%")};
  animation: showSidebar 0.1s;

  > h3 {
    margin-top: 0.9375rem;
    margin-left: 20%;
    margin-bottom: 3%;
    font-family: 'Times New Roman', Times, serif;
    font-size: 1.8625rem;
  }

  > img {
    position: fixed;
    width: 3.5625rem;
    height: 2.5625rem;
    margin-top: 1.0625rem;
    margin-left: 24rem;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 18.75rem;
    }
  }
`;

export const Content = styled.div`

overflow-y: auto;
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    display: none;
  }

  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .boxProducts {
    display: flex;
    margin-bottom: 2.3rem;
    width: 90%;
    font-size: 0.9125rem;
    border-bottom: 0.125rem solid #8606fe;
  }

  .boxProducts > img {
    margin-bottom: 2rem;
    width: 5.625rem;
    height: 5.625rem;
    border-radius: 8px;
    background: rgb(84, 23, 162);
    background: linear-gradient(
      41deg,
      rgba(84, 23, 162, 1) 0%,
      rgba(67, 9, 226, 1) 100%
    );
  }

  .boxInfos {
    margin-left: 0.6rem;
  }

  .itemQuantity {
    margin: 1.125rem;
    font-size: 1.125rem;

  }

  .cardInfoQuantityERemove {
    display: flex;
    flex-direction: column;
  }

  .cardInfosQuantity {
    display: flex;
    justify-content: space-around;
    text-align: center;
    align-items: center;
    border: 0.125rem solid #8606fe;
    width: 6rem;
    height: 1.5625rem;
    border-radius: 0.4375rem;
    margin-top: 1rem;
  }

  .defineQuantity {
    font-size: 1.125rem;
    font-weight: bold;
  }

  .defineQuantity:hover {
    cursor: pointer;
    color: #8606fe;
  }

  .removeItem {
    width: 1.5625rem;
    height: 1.5625rem;
    margin-top: 0.0625rem;
    margin-left: 1.6875rem;
  }

  .removeItem:hover {
    cursor: pointer;
  }

  .price {
    font-size: 18px;
    margin-left: 0.3125rem;
    margin-top: 1.9rem;
  }

  > h2 {
    position:sticky;
    bottom: 0%;
    margin-bottom: 0.75rem; 
    font-family: 'Times New Roman', Times, serif;
  }
`;
