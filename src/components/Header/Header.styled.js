import styled from "styled-components"

export const HeaderContainer = styled.header`
 
display: flex;
justify-content: space-around; 
background-color: black;
height: 9em;
border: 10px solid black;

.galaxy {
  color: white;
  font-size: 50px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 14em;
  

}
.store {
  color: white;
  font-size: 50px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8em;
 
}

.button-group{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 10em;
}

button {

  cursor: pointer;
  border-radius: 5px;
  

  :hover {
    background-color: #cfcdde;
    transition: 0.3s;
    transform: scale(1.25);
}

  :active {
    background-color: #513895;
    color: white;
}
}
`
