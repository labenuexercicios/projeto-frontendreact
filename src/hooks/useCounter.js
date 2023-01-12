import { useState } from "react";

export const useCounter = (op) => {
  const [quantidade, setQuantidade] = useState(0);

  //EXEMPLO MEU
  const soma = () => {
    setQuantidade(quantidade + 1);
  };

  const sub = () => {
    setQuantidade(quantidade - 1);
  };

  return [quantidade, soma, sub];
};
