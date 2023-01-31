import styled from "styled-components";

export const Main = styled.main`
  margin-top: 50px;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      width: 100%;
      margin-top: 10px;
      margin-left: 50px;
    }

    .valor-total {
      background-color: #ff7f50;
      font-size: 1.1em;
      font-family: "Poppins";
      display: flex;
      width: 210px;
      margin-top: -150px;
      justify-content: center;
    }

    .oferta {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 4em;
    }

    .oferta p {
      margin-top: -20px;
      margin-left: 50px;
      font-size: 1.3em;
      font-family: "Poppins";
    }

    .oferta span {
      color: #f69f1c;
      padding: 0 0.2em;
      font-family: "Poppins";
     
      :hover {
        cursor: pointer;
        filter: brightness(1.1);
      }

      :active {
        filter: brightness(0.95);
      }
    }

    .gameboy {
      margin-left: 1010px;
    }
  }
`;
