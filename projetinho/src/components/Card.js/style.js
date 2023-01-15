import styled from "styled-components"

export const CardContainer = styled.section`

background:  #c8e7ff;
width: 250px;
height: 300px;
border: solid #c86bfa 3px;
border-radius:10px;
display:flex;
gap:10px;
padding: 10px;
align-items: center;



img{
  
    height: 150px;
    width: 150px;
}

button{
    
    width: 50%;
    }


.cardbrinquedos{
    height: 250px;
    width:300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    
}

.cardbrinquedos img{

   border-radius: 10px;

}

button{
    background: #48cae4;
    border: #c86bfa solid 3px;
    border-radius: 5px;
    :hover {
    transform: scale(1.1);
    background-color: #3366ff;
    color: white;
  }
}

.inputzinho{
    background: #c8e7ff;
  height:5vh;
    width:500px;
    right: 100px;
    margin: 5px;
    border-radius: 10px 20px 30px;

}

`
