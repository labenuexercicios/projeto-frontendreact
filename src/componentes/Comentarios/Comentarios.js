import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal,
  Container,
  ListaMostrada
} from "./styled";
import bin from "./../../img/bin.png";

const listaDeTarefasInicial = [
  {
    titulo: "Eu adorei as camisetas, vou comprar mais."
  },
  {
    titulo: "Adorei o site, ficou incrível!!"
  },
  {
    titulo: "Adorei as camisas de Astrounas, são incríveis."
  }
];

export function ListaTarefas() {
  const [lista, setLista] = useState(listaDeTarefasInicial);
  const [novaTarefa, setNovaTarefa] = useState({ titulo: ""});
  const [removed, setRemoved] = useState([]);
  const onChangeTarefa = (event) => { //função que adiciona a tarefa
    const tarefa = {
      titulo: event.target.value,
    };
    setNovaTarefa(tarefa);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa({ titulo: ""});
  };

  const enter = (event) => { //função do enter
    if(event.key === 'Enter'){

      const novaTarefa = {
        titulo: event.target.value
      };
        setLista([...lista, novaTarefa]);
        console.log(novaTarefa);
        setNovaTarefa({ titulo: "" });
    }
  }

  const removeTarefa = (tarefaParaRemover) => { //função para remover
    const listaFiltrada = lista.filter(tarefa => tarefa.titulo !== tarefaParaRemover.titulo);

    setRemoved([...removed, tarefaParaRemover]);
    setLista(listaFiltrada);
  };

  return (
    <Container>
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Escreva aqui:"
          value={novaTarefa.titulo}
          onChange={onChangeTarefa}
          onKeyDown={enter}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ListaMostrada>
          <h2>Adicione Aqui seu comentário:</h2>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa.titulo}</p>
                <RemoveButton onClick={() => removeTarefa(tarefa)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ListaMostrada>

      </ListaContainer>
      <LinhaHorizontal />
    </ListaTarefasContainer>
    </Container>
  );
}


export default ListaTarefas;