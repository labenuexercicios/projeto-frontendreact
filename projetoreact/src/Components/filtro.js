import React from "react";

export default function Filtro(props) {

  return (
    <div>
        <h4>{props.label}</h4>
      <input
        type={props.type}
        value={props.inputValue}
        onChange={props.captureInput}
      ></input>

    </div>
  );
}
