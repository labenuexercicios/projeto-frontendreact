



import styled from "styled-components";

export const PainelFiltro = styled.div`
border:1px solid black;
display: flex;
flex-direction:column;
height: 80vh;
width: 20vw;
align-items:center;



>h2{
    text-align:center;
}



`

export const ListaTarefasContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
  min-height: 100vh;
  box-shadow: -2px 3px 30px -7px rgba(0, 0, 0, 0.75);
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
`;

export const InputContainer = styled.div`
  padding: 2rem;
  width: 100%;
  background-color: #4e5abc;
  display: flex;
  gap: 1rem;
  justify-content: center;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
`;

export const TaskInput = styled.input`
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 16px;
`;

export const AddTaskButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
`;

export const ListaContainer = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;

export const RemoveButton = styled.button`
  padding: 8px;
  background-color: white;
  border: none;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor:pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #6752ff;
  }
`;

export const Tarefa = styled.li`
  display: flex;
  width: 19vw;
  height: 10vh;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  border: 1px solid black;
  border-radius: 10px;
  /* padding: 6px 8px; */
  // transition: background-color 0.3s;
  // &:hover {
  //   background-color: #6752ff;
  // }
`;

export const LinhaHorizontal = styled.hr`
  width: 100%;
  margin: 16px;
`
export const SubTotal = styled.div`



> h3{
color: red;
}
`;

export const TarefaFeita = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 6px 8px;
  
  :disabled{
    background-color:#ccc;
    color: #ccc;
    
  }

  p{
    color: #ccc;
    text-decoration: line-through
  }
`;
