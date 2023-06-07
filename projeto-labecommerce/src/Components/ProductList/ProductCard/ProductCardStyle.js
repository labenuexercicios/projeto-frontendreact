import styled from 'styled-components'
import backgroundImg from '../../../assets/images/OIG.jpg'


export const CardContainer = styled.div`
    /* border: 1px solid black; */
    width: 100%;
    justify-items: end;
    display: grid;
    grid-template-columns: repeat(auto-fit, 290px);
    gap: 20px;
    padding: 1em 0 1em 1em;
    

    img {
      width: 100%;
      cursor: pointer;
      align-self: center;
      transition: transform 0.3s ease;
    }
    

    hr {
      width: 100%;
      border: 1px solid #2B2B2B;
    }
    
    button {
      cursor: pointer;
      /* margin: 5px 0; */
      font-size: 10px;
      font-weight: bold;
      border-radius: 5px;
      border: none;
      padding: .75em;
      background-color: #2B2B2B;
      color: white;  
    }

    div {
      border-radius: 5px;
      background: #BEC8C4;
      background-position-x: right;
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
      padding: 8px;
      width: 100%;
      font-size: 12px;
      color: #1C1916;
      
    }

  `