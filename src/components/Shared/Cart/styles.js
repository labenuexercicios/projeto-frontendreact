import styled from "styled-components";

export const CartContainer = styled.div`
  background: var(--beige);
  padding: 20px;
  width: 12%;
  max-width: 220px;
  box-shadow: inset 10px 0 50px rgba(0 , 0 , 0 , 0.3);
  padding-top: 4.5%;

  .total {
    font-size:20px !important;
  }

  .cart-preview {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);;
    margin-bottom: 10px;
  }

  .oops {
    width:100px;
    margin-bottom:20px;
  }

  .hidden {
    display:none;
    transition:0.2s;
  }
`;
