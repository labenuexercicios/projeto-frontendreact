import React from 'react';
import {Page} from './styled'

export function Cart() {

 


  return (
    
      <Page>  

 
      <main>
        <table>
            <thead>
            <tr>
              <th>PRODUTO</th>
              <th>PRECO</th>
              <th>QTD</th>
              <th>DELETAR</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>NOME PRODUTO</td>
              <td>$100</td>
              <td>          <button><i class="fa-solid fa-minus"></i></button>1<button><i class="fa-solid fa-plus"></i></button></td>
              <td>
      
<button><i class="fa-solid fa-trash"></i></button>

              </td>
            </tr>

            </tbody>
          </table>
     

    </main>

  </Page>


    );
  }