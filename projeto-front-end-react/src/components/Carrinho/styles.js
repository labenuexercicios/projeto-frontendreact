import styled from 'styled-components'


export const CarrinhoAside = styled.aside`
position: fixed;
right: 1.5%;
width: 323px;



.nome{
    display: flex;
    font-family: 'Stick No Bills', sans-serif; 
    color: rgb(139, 164, 176);
    font-size: 30px;
}

.vazio{
    text-align: center;
    font-size: 20px;

}

.carrinho{
    display: flex;
    flex-direction: column;
    background: rgb(28, 56, 70, 0.6);
    font-family: 'Stick No Bills', sans-serif; 
    margin-top: 20px;
    padding: 10px 0;
    border: 2px solid rgb(139, 164, 176);
    color: rgb(139, 164, 176);
    border-radius: 15px;
    gap: 4px;
}

.valor{
    display: flex;
    padding: 0 10px;
    font-family: 'Saira Condensed', sans-serif;
}

.foguete {
    flex-basis: 100px;
   
}

.botoes {
    display: flex;
    flex-basis: 100px;
    justify-content: space-between;
    padding-right: 10px;
   
}

.precolix {
    display: flex;
    flex-basis: 100px;
    justify-content: space-between;
    
}

.botao{
    width: 20px;
    height: 20px;
    cursor: pointer;
    background: rgb(139, 164, 176);
    color:rgb(28, 56, 70);
    font-family: 'Saira Condensed', sans-serif;  
    border: none;
    border-radius: 5px;
    box-shadow: 1px 1px 3px grey;    
}



.liximg{
    width: 20px; 
    cursor: pointer;   
}





.carcesta {
    display: flex;
    justify-content: center;
    gap: 20px; 
}

.cesta {
    font-family: 'Saira Condensed', sans-serif; 
    background: rgb(28, 56, 70);
    border-radius: 50%;
    width: 25px;
    border: 2px solid rgb(139, 164, 176);
    color: rgb(139, 164, 176);
    position: absolute;
    right: 75px;

}

.imagemCarrinho{
    width: 33px;
    
}


.valortotal{
    display: flex;
    gap: 80px;
 
    text-decoration: overline;
    font-family: 'Stick No Bills', sans-serif;
    padding: 0px 10px;


}
`