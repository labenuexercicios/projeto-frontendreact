import styled from "styled-components";
//import styled from url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,700;0,900;1,300&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700&display=swap');
//font-family: 'Poppins', sans-serif;
//font-family: 'Roboto', sans-serif;
export const Button = styled.button`
  background-color: rgba(18, 16, 16, 0.882);
  border: 3px solid rgb(255, 54, 248);
  border-radius: 8px;
  padding: 16px;
  width: 200px;
  color: white;
  margin-top: 32px;
  cursor: pointer;
`;

export const Input = styled.input`
  padding: 8px;
  margin-left: 16px;
`;

export const Label = styled.label`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.997);
`;

export const Div3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  flex-direction: column;
  flex-wrap: wrap;
  width: 20%;
  margin-left: 2.3rem;
`;

export const H3 = styled.h3`
font-size: 18px; 
color: rgba(255, 255, 255, 0.997);
font-family: Arial, Helvetica, sans-serif;
`

export const Select = styled.select`
  width: 160px;
  display: flex;
  justify-content: center;
  margin-left: 15px;
  margin-top: 6px;
  color: rgba(255, 255, 255, 0.997);
  background-color: rgba(31, 31, 31, 0.932);
`;


export const Option = styled.option`
  padding: 8px;
  margin-left: 16px;
`;
