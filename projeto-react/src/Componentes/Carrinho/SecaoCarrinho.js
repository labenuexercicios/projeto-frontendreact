import React from "react";
import { DivTable } from "./style.js";

export default function SecaoCarrinho(props){

    return(
        <div>
            <DivTable>
                <tr>
                    <td className="quantidade">{"x "+props.quantidade}</td>
                    <td className="nome">{props.produto}</td>
                    <td>{"-  R$ "+ props.valor  + "0"}</td>
                    <td><button className="btn" onClick={props.apagar}>x</button></td>
                </tr>
            </DivTable>
        </div>
    )
}