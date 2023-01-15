import React from "react";


const Cart = (props) => {

    return (<>
        <table>
            <tr>
                <td>
                    {props.quantidade}x
                </td>
                <td>
                    {props.nomeProduto}
                </td>
                <td>
                    CRED${props.price},00
                </td>
                <td>
                    <button onClick={props.removerCarrinho}>Remove</button>
                </td>
            </tr>
        </table>

       </>
    )
}

export default Cart