import { useState } from "react";

export function useOrdenar() {
  const [ordem, setOrdem] = useState("");
  function receberOrdem() {
    const options = [
      { value: "limpar", label: "Ordenar" },
      { value: "crescente", label: "Crescente" },
      { value: "decrescente", label: "Decrescente" },
    ];
    return (
      <select 
        id="ordem"
        value={ordem}
        onChange={(e) => {
          setOrdem(e.target.value);
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }

  function crescente(a, b) {
    if (a.value < b.value) return -1;
    if (a.value > b.value) return 1;
    return 0;
  }

  function decrescente(a, b) {
    if (a.value > b.value) return -1;
    if (a.value < b.value) return 1;
    return 0;
  }
  function ordenarId(a, b) {
    return a.id - b.id;
  }

  function ordenar(a, b) {
    switch (ordem) {
      case "crescente":
        return crescente(a, b);
      case "decrescente":
        return decrescente(a, b);
      default:
        return ordenarId(a, b);
    }
  }
  return { ordenar: ordenar,  receberOrdem: receberOrdem };
}
