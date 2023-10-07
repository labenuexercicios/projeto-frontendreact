import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin: 0 auto;
  justify-content: center;
  min-height: 100vh;
  background-color: white;

`;

export const ListaTarefasContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  margin: 0 auto;
  min-height: 90vh;
  box-shadow: -2px 3px 30px -7px rgba(0, 0, 0, 0.75);
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  background-color: white;
  margin-bottom: 10px;  
`;

export const InputContainer = styled.div`
  padding: 2rem;
  width: 70vw;
  background-color: #000000;
  display: flex;
  gap: 1rem;
  justify-content: center;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  
`;

export const TaskInput = styled.input`
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-size: 16px;
  width: 10vw;
`;

export const AddTaskButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const ListaContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;

`;

export const ListaMostrada = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0;
    margin: 0;
    min-width: 200px;
`

export const RemoveButton = styled.button`
  padding: 8px;
  background-color: #de2f45;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

`;

export const Tarefa = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  border: 1px solid black;
  border-radius: 10px;
  padding: 6px 8px;
  transition: background-color 0.3s;
  &:hover {
    background-color: lightblue;
  }
  width: 100%;

`;

export const LinhaHorizontal = styled.hr`
  width: 100%;
  margin: 16px;
`

