import styled from 'styled-components'


export const CardContainer = styled.div`
    border: 1px solid black;
    width: 100%;
    justify-items: end;
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    gap: 30px;
    padding: 1em;

    img {
      width: 100%;
      cursor: pointer;
      align-self: center;
      transition: transform 0.3s ease;
    }

    hr {
      width: 94%;
    }
    
    button {
      cursor: pointer;
      /* margin: 5px 0; */
      font-size: 12px;
      font-weight: bold;
      border-radius: 5px;
      border: none;
      padding: .5em;
      background-color: blue;
  
    }

    div {
      border-radius: 5px;
      background-color: grey;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }

    span {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: .5em;
      margin: 8px;
      width: 100%;
      
    }

  `